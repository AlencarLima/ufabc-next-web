<template>
  <div class="planning">
    <PaperCard title="Planejamento" class="text-next-grey">
      <p class="mt-4">
        Essa página é dedicada para organizar suas disciplinas cursadas e ver
        o progresso de sua graduação.
      </p>
    </PaperCard>

    <PaperCard class="mt-4">
      <div>
        <v-select
          v-model="selectedCourse"
          :items="courseOptions"
          item-title="name"
          item-value="id"
          label="Selecione um curso"
          variant="outlined"
          density="compact"
          clearable
        />
      </div>
      <div v-if="selectedCourse" class="mt-4">
        <div class="course-info">
          <div class="mb-2">
            <strong>Curso:</strong> {{ selectedCourseData?.name }}
          </div>
          <div class="mb-2">
            <strong>Tipo:</strong> {{ selectedCourseData?.type }}
          </div>
          <div class="mb-2">
            <strong>Campus:</strong> {{ selectedCourseData?.campus?.join(', ') }}
          </div>
        </div>
      </div>
      <div class="controls-row">
        <v-switch
          v-model="idealGrade"
          inset
          density="compact"
          hide-details
          :label="idealGrade ? 'Grade Ideal' : 'Sua Grade'"
        />
        <v-icon
          v-if="!idealGrade"
          :icon="showPendencies ? 'mdi-eye' : 'mdi-eye-off'"
          class="pendencies-toggle"
          :title="showPendencies ? 'Ocultar pendências' : 'Mostrar pendências'"
          @click="showPendencies = !showPendencies"
        />
      </div>
    </PaperCard>

    <PaperCard class="mt-4">
      <div
        v-for="(quad, quadIndex) in quads"
        :key="quad.label"
        class="discipline-board"
      >
        <div class="quad-card">
          <div>{{ quad.label }}</div>
          <div class="quad-credits">{{ getTotalCreditsForQuad(quadIndex) }} créditos</div>
        </div>
        <div
          class="discipline-cards"
          @dragover.prevent="handleDragOverContainer(quadIndex)"
          @drop.prevent="handleDrop(quadIndex)"
        >
          <div
            v-for="(item, renderIndex) in getRenderItems(quadIndex)"
            :key="item.key"
            :class="[
              'discipline-card',
              {
                placeholder: item.type === 'placeholder',
                'push-right': shouldPushRight(quadIndex, renderIndex, item.type),
                'not-enrolled': item.type === 'card' && !item.isEnrolled,
                'no-valid-grade': item.type === 'card' && item.hasValidGrade === false,
              },
              item.type === 'card' ? `discipline-card--${item.category}` : '',
            ]"
            :draggable="item.type === 'card'"
            @dragstart="item.type === 'card' ? handleDragStart(quadIndex, item.originalIndex, $event) : undefined"
            @dragover.prevent.stop="item.type === 'card' ? handleDragOverItem(quadIndex, item.originalIndex, $event) : undefined"
            @drop.prevent.stop="handleDrop(quadIndex)"
            @dragend="handleDragEnd"
          >
            <template v-if="item.type === 'card'">
              <div class="discipline-label" :title="item.label">
                {{ item.label }}
              </div>
              <div class="discipline-code">{{ item.code }}</div>
              <div v-if="item.tpei" class="discipline-tpei">{{ item.tpei }}</div>
              <div class="discipline-category">
                {{
                item.category === 'obrigatoria' || item.category === 'obrigatoria-bi'
                    ? 'Obrigatória'
                    : item.category === 'limitada'
                        ? 'Limitada'
                        : 'Livre'
                }}
              </div>
              <v-icon
                v-if="getGradeIcon(item.grade)"
                :class="['discipline-grade', getGradeIcon(item.grade)?.className]"
                :icon="getGradeIcon(item.grade)?.icon"
              />
            </template>
          </div>
        </div>
      </div>
    </PaperCard>
  </div>
</template>

<script setup lang="ts">
import type { Discipline, Enrollment } from '@ufabc-next/types';
import { computed, ref, watch } from 'vue';

import { PaperCard } from '@/components/PaperCard';
import { enrollmentsCronos as cronosEnrollments } from '@/mocks/cronosEnrollments';
import { cronosSubjects } from '@/mocks/cronosSubjects';
import { enrollments } from '@/mocks/enrollments';


type RenderItem =
  | {
      type: 'card';
      key: string;
      label: string;
      category: DisciplineCategory;
      grade: DisciplineGrade;
      code: string | undefined;
      isEnrolled: boolean;
      originalIndex: number;
      tpei?: string;
      hasValidGrade?: boolean;
    }
  | { type: 'placeholder'; key: string };

type DisciplineCategory = 'obrigatoria' | 'limitada' | 'livre' | 'obrigatoria-bi';
type DisciplineGrade = 'A' | 'B' | 'C' | 'D' | 'F' | '0' | undefined;

type DisciplineCard = {
  label: string;
  category: DisciplineCategory;
  grade: DisciplineGrade;
  code: string | undefined;
  isEnrolled: boolean;
  tpei?: string;
  hasValidGrade?: boolean;
};

type Quad = {
  label: string;
  cards: DisciplineCard[];
};

const selectedCourse = ref<string | null>(null);
const idealGrade = ref(false);
const showPendencies = ref(true);

const courseOptions = computed(() =>
  cronosEnrollments.map((course) => ({
    id: course.id,
    name: course.name,
  })),
);

const selectedCourseData = computed(() =>
  selectedCourse.value
    ? cronosEnrollments.find((c) => c.id === selectedCourse.value)
    : null,
);

const selectedCourseCategories = computed<string[]>(() =>
  selectedCourseData.value?.courseCategory ?? [],
);

const courseCategoryOBR = computed(() =>
  selectedCourseCategories.value.filter((cat) => cat.includes('OBR')),
);

const courseCategoryOL = computed(() =>
  selectedCourseCategories.value.filter((cat) => cat.includes('OL')),
);

// const filtered = computed(() =>
//   cronosSubjects.filter((d) =>
//     d.disciplineCategory?.some((cat) =>
//       selectedCourseCategories.value.includes(cat.name),
//     ),
//   ),
// );

const filteredOBR = computed(() =>
  courseCategoryOBR.value.length
    ? cronosSubjects.filter((d) =>
        d.disciplineCategory?.some((cat) =>
          courseCategoryOBR.value.includes(cat.name),
        ),
      )
    : [],
);

watch(filteredOBR, (list: typeof filteredOBR.value) => {
  console.log('Disciplinas obrigatórias encontradas:', list);
  console.log(courseCategoryOBR.value);
  console.log(courseCategoryOL.value);
});

const selectedCourseCategoryNameOL = computed(() =>
  selectedCourse.value ? `${selectedCourseData.value?.name} (OL)` : null,
);

const filteredOL = computed(() =>
  selectedCourseCategoryNameOL.value
    ? cronosSubjects.filter((d) =>
        d.disciplineCategory?.some((cat) =>
          cat.name.includes(selectedCourseCategoryNameOL.value as string),
        ),
      )
    : [],
);

watch(filteredOL, (list: typeof filteredOL.value) => {
  console.log('Disciplinas limitadas encontradas:', list);
});

const conceptToGrade = (conceito?: string | null): DisciplineGrade => {
  if (!conceito) return undefined;
  if (conceito === '0' || conceito === 'F') return conceito;
  if (conceito === 'A' || conceito === 'B' || conceito === 'C' || conceito === 'D') {
    return conceito;
  }
  return undefined;
};

const isEnrollment = (item: Enrollment | Discipline): item is Enrollment =>
  'disciplina' in item && 'conceito' in item;

const getCategoryFromEnrollmentCode = (code: string | undefined): DisciplineCategory => {
  if (!code || !selectedCourseData.value) return 'livre';

  const discipline = cronosSubjects.find((d) => d.code === code);
  if (!discipline) return 'livre';

  const courseCategories = selectedCourseData.value?.courseCategory ?? [];
  const obrCategories = courseCategories.filter((cat) => cat.includes('(OBR)'));

  const isGenericBase = (cat: string) => {
    const prefix = cat.split('-')[0].trim();
    return ['BC&T', 'BC&H', 'LCNE', 'LCH'].includes(prefix);
  };

  const specificOBRCategory = obrCategories.find((cat) => !isGenericBase(cat));

  const matchedOBRCategory = discipline.disciplineCategory?.find((cat) =>
    courseCategoryOBR.value.includes(cat.name),
  );

  if (matchedOBRCategory) {
    const isSpecificCategory = specificOBRCategory && matchedOBRCategory.name === specificOBRCategory;
    return isSpecificCategory ? 'obrigatoria-bi' : 'obrigatoria';
  }

  const matchedOLCategory = discipline.disciplineCategory?.find((cat) =>
    courseCategoryOL.value.includes(cat.name),
  );

  if (matchedOLCategory) {
    return 'limitada';
  }

  return 'livre';
};

const buildQuads = (items: Enrollment[] | Discipline[], showGradeIdeal: boolean, filterPendencies: boolean): Quad[] => {
  const groups = new Map<string, { year: number; quad: number; cards: DisciplineCard[] }>();
  
  const enrollmentCodes = new Set(enrollments.map((e: any) => e.code));

  items.forEach((item) => {
    if (isEnrollment(item)) {
      if (filterPendencies && (item.conceito === 'F' || item.conceito === 'O')) {
        return;
      }
      
      const quad = Number(item.quad);
      const year = Number(item.year);
      if (!Number.isFinite(quad) || !Number.isFinite(year)) return;
      const key = `${year}-${quad}`;
      if (!groups.has(key)) {
        groups.set(key, { year, quad, cards: [] });
      }
      const group = groups.get(key);
      if (!group) return;
      const category = getCategoryFromEnrollmentCode(item.code);

      const disciplineFromCronos = cronosSubjects.find((d) => d.code === item.code);
      
      group.cards.push({
        label: item.disciplina,
        category,
        grade: conceptToGrade(item.conceito),
        code: item.code,
        isEnrolled: true,
        tpei: disciplineFromCronos?.tpei
      });
      return;
    }

    const matchedCategory = item.disciplineCategory?.find((cat) =>
      courseCategoryOBR.value.includes(cat.name),
    );
    console.log('Verificando categoria:',matchedCategory?.name);
    const quad = Number(matchedCategory?.quarter);
    if (!Number.isFinite(quad)) return;
    const key = `0-${quad}`;
    if (!groups.has(key)) {
      groups.set(key, { year: 0, quad, cards: [] });
    }
    const group = groups.get(key);
    if (!group) return;

    const courseCategories = selectedCourseData.value?.courseCategory ?? [];
    const obrCategories = courseCategories.filter((cat) => cat.includes('(OBR)'));
    
    const isGenericBase = (cat: string) => {
      const prefix = cat.split('-')[0].trim();
      return ['BC&T', 'BC&H', 'LCNE', 'LCH'].includes(prefix);
    };
    
    const specificOBRCategory = obrCategories.find((cat) => !isGenericBase(cat));
    const isSpecificCategory = specificOBRCategory && matchedCategory && matchedCategory.name === specificOBRCategory;

    const isEnrolled = showGradeIdeal ? enrollmentCodes.has(item.code) : true;

    let hasValidGrade = false;
    if (showGradeIdeal && isEnrolled) {
      const enrollment = (enrollments as any).find((e: any) => e.code === item.code);
      hasValidGrade = enrollment && (enrollment.conceito === 'A' || enrollment.conceito === 'B' || enrollment.conceito === 'C' || enrollment.conceito === 'D');
    }
    
    group.cards.push({
      label: item.name,
      category: isSpecificCategory ? 'obrigatoria-bi' : 'obrigatoria',
      grade: undefined,
      code: item.code,
      isEnrolled,
      tpei: item.tpei,
      hasValidGrade
    });
  });

  const categoryOrder: Record<DisciplineCategory, number> = {
    'obrigatoria': 0,
    'obrigatoria-bi': 1,
    'limitada': 2,
    'livre': 3,
  };

  return Array.from(groups.values())
    .filter((group) => group.quad !== 0)
    .sort((a, b) => (a.year !== b.year ? a.year - b.year : a.quad - b.quad))
    .map((group) => ({
      label: group.year ? `${group.quad}° Quad ${group.year}` : `${group.quad}° Quad`,
      cards: group.cards.sort((a, b) => categoryOrder[a.category] - categoryOrder[b.category]),
    }));
};

const quads = computed<Quad[]>(() => {
  selectedCourse.value;
  showPendencies.value;
  
  const items = idealGrade.value ? (filteredOBR.value as Discipline[]) : (enrollments as any);
  return buildQuads(items ?? [], idealGrade.value, !showPendencies.value);
});

const draggingItem = ref<string | null>(null);
const draggingOriginalIndex = ref<number | null>(null);
const draggingQuadIndex = ref<number | null>(null);
const draggingTargetQuadIndex = ref<number | null>(null);
const draggingGrade = ref<DisciplineGrade>(undefined);
const placeholderIndex = ref<number | null>(null);
const hiddenIndex = ref<number | null>(null);
const dragGhost = ref<HTMLElement | null>(null);

const getCardsWithoutDragging = (quadIndex: number) => {
  const idx = hiddenIndex.value;
  const isDraggingQuad = draggingQuadIndex.value === quadIndex;
  return quads.value[quadIndex].cards
    .map((item, originalIndex) => ({
      type: 'card' as const,
      key: `${item.label}-${quadIndex}-${originalIndex}`,
      label: item.label,
      category: item.category,
      grade: item.grade,
      code: item.code,
      isEnrolled: item.isEnrolled,
      originalIndex,
      tpei: item.tpei,
      hasValidGrade: item.hasValidGrade,
    }))
    .filter((x) => (isDraggingQuad && idx !== null ? x.originalIndex !== idx : true));
};

const getRenderItems = (quadIndex: number): RenderItem[] => {
  const base = getCardsWithoutDragging(quadIndex);
  if (
    draggingItem.value === null ||
    placeholderIndex.value === null ||
    hiddenIndex.value === null ||
    draggingTargetQuadIndex.value !== quadIndex
  ) {
    return base;
  }

  const idx = Math.max(0, Math.min(placeholderIndex.value, base.length));
  return [
    ...base.slice(0, idx),
    { type: 'placeholder', key: `__placeholder__-${quadIndex}-${idx}` },
    ...base.slice(idx),
  ];
};

const handleDragStart = (
  quadIndex: number,
  originalIndex: number,
  event: DragEvent,
) => {
  const item = quads.value[quadIndex].cards[originalIndex] ?? null;
  draggingOriginalIndex.value = originalIndex;
  draggingQuadIndex.value = quadIndex;
  draggingTargetQuadIndex.value = quadIndex;
  draggingItem.value = item?.label ?? null;
  draggingGrade.value = item?.grade;
  placeholderIndex.value = originalIndex;
  hiddenIndex.value = null;

  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', item?.label ?? '');
  }

  if (event.dataTransfer && event.currentTarget instanceof HTMLElement) {
    const ghost = event.currentTarget.cloneNode(true) as HTMLElement;
    ghost.style.position = 'absolute';
    ghost.style.top = '-1000px';
    ghost.style.left = '-1000px';
    ghost.style.margin = '0';
    ghost.style.outline = 'none';
    ghost.style.boxShadow = 'none';
    ghost.style.border = 'none';
    ghost.style.background = getComputedStyle(event.currentTarget).backgroundColor;
    ghost.style.borderRadius = getComputedStyle(event.currentTarget).borderRadius;
    ghost.style.padding = getComputedStyle(event.currentTarget).padding;
    ghost.style.width = getComputedStyle(event.currentTarget).width;
    ghost.style.height = getComputedStyle(event.currentTarget).height;

    document.body.appendChild(ghost);
    event.dataTransfer.setDragImage(ghost, 20, 20);
    dragGhost.value = ghost;
  }

  setTimeout(() => {
    if (draggingItem.value !== null) {
      hiddenIndex.value = originalIndex;
    }
  }, 0);
};

const handleDragOverItem = (
  quadIndex: number,
  originalIndex: number,
  event: DragEvent,
) => {
  const canMoveAcrossQuads = draggingGrade.value === undefined;
  if (draggingItem.value === null) return;
  if (draggingQuadIndex.value !== quadIndex && !canMoveAcrossQuads) return;
  const el = event.currentTarget as HTMLElement | null;
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const x = event.clientX;
  const insertAfter = x > rect.left + rect.width / 2;
  const targetIndex = getCardsWithoutDragging(quadIndex).findIndex(
    (card) => card.originalIndex === originalIndex,
  );

  if (targetIndex === -1) return;
  draggingTargetQuadIndex.value = quadIndex;
  placeholderIndex.value = targetIndex + (insertAfter ? 1 : 0);
};

const handleDragOverContainer = (quadIndex: number) => {
  const canMoveAcrossQuads = draggingGrade.value === undefined;
  if (draggingItem.value === null) return;
  if (draggingQuadIndex.value !== quadIndex && !canMoveAcrossQuads) return;
  draggingTargetQuadIndex.value = quadIndex;
  placeholderIndex.value = getCardsWithoutDragging(quadIndex).length;
};

const handleDrop = (quadIndex: number) => {
  if (
    draggingItem.value === null ||
    draggingOriginalIndex.value === null ||
    draggingQuadIndex.value === null
  ) {
    handleDragEnd();
    return;
  }

  if (draggingTargetQuadIndex.value !== quadIndex) {
    handleDragEnd();
    return;
  }

  const sourceQuadIndex = draggingQuadIndex.value;
  const targetQuadIndex = quadIndex;
  const from = draggingOriginalIndex.value;
  const target =
    placeholderIndex.value ?? getCardsWithoutDragging(quadIndex).length;

  if (sourceQuadIndex === targetQuadIndex) {
    const next = [...quads.value[targetQuadIndex].cards];
    const [moved] = next.splice(from, 1);
    next.splice(target, 0, moved);
    quads.value[targetQuadIndex].cards = next;
    handleDragEnd();
    return;
  }

  const sourceCards = [...quads.value[sourceQuadIndex].cards];
  const [moved] = sourceCards.splice(from, 1);
  const targetCards = [...quads.value[targetQuadIndex].cards];
  targetCards.splice(target, 0, moved);

  quads.value[sourceQuadIndex].cards = sourceCards;
  quads.value[targetQuadIndex].cards = targetCards;
  handleDragEnd();
};

const handleDragEnd = () => {
  if (dragGhost.value) {
    dragGhost.value.remove();
    dragGhost.value = null;
  }
  draggingItem.value = null;
  draggingOriginalIndex.value = null;
  draggingQuadIndex.value = null;
  draggingTargetQuadIndex.value = null;
  draggingGrade.value = undefined;
  placeholderIndex.value = null;
  hiddenIndex.value = null;
};

const shouldPushRight = (
  quadIndex: number,
  renderIndex: number,
  type: RenderItem['type'],
) =>
  type === 'card' &&
  draggingItem.value !== null &&
  placeholderIndex.value !== null &&
  hiddenIndex.value !== null &&
  draggingTargetQuadIndex.value === quadIndex &&
  renderIndex > placeholderIndex.value;

const getGradeIcon = (grade: DisciplineGrade) => {
  if (grade === 'F' || grade === '0') {
    return { icon: 'mdi-close', className: 'grade-fail' };
  }
  if (grade === 'A' || grade === 'B' || grade === 'C' || grade === 'D') {
    return { icon: 'mdi-check', className: 'grade-pass' };
  }
  return null;
};

const getTotalCreditsForQuad = (quadIndex: number): number => {
  return quads.value[quadIndex].cards.reduce((total, card) => {
    if (!card.tpei) return total;
    const parts = card.tpei.split('-');
    const credits = (parseInt(parts[0]) || 0) + (parseInt(parts[1]) || 0);
    return total + credits;
  }, 0);
};
</script>

<style scoped lang="scss">
.discipline-cards {
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  flex: 1;
}

.discipline-board {
  display: flex;
  gap: 16px;
  align-items: stretch;
}

.discipline-board + .discipline-board {
  margin-top: 24px;
}

.quad-card {
  width: 120px;
  background-color: #6d28d9;
  color: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  padding: 16px;
  gap: 8px;
}

.quad-credits {
  font-size: 12px;
  font-weight: 700;
}

.discipline-card {
  box-sizing: border-box;
  width: 232px;
  height: 120px;
  background-color: rgb(150, 155, 155);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
  cursor: grab;
  transition: transform 160ms ease, box-shadow 160ms ease, opacity 160ms ease;
  outline: none;
  flex-direction: column;
  gap: 4px;
  position: relative;
}

.discipline-card:hover {
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.18);
}

.discipline-card.placeholder {
  background-color: transparent;
  border: 2px dashed rgba(55, 187, 163, 0.8);
  cursor: default;
}

.discipline-card.push-right {
  transform: translateX(0px);
}

.discipline-card.not-enrolled {
  background-color: #c7c7c7 !important;
  opacity: 0.6;
}

.discipline-category {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  color: #1f2937;
}

.discipline-card--obrigatoria {
  background-color: #E8DA5E;
}

.discipline-card--obrigatoria-bi {
  background-color: #90cdf4;
}

.discipline-card--limitada {
  background-color: #ff9f46;
}

.discipline-card--livre {
  background-color: #12c46b;
}

.discipline-card.no-valid-grade {
  background-color: #d1d5db !important;
  opacity: 0.8;
}

.discipline-label {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;  /* duas linhas */
  line-clamp: 2;
  line-height: 1.2;
  min-height: calc(2 * 1.2em);
}

.discipline-code {
  font-size: 14px;
  color: rgb(var(--v-theme-on-surface), 0.7);
}

.discipline-tpei {
  font-size: 12px;
  font-weight: 500;
  color: #4b5563;
}

.discipline-grade {
  position: absolute;
  right: 8px;
  bottom: 8px;
  font-size: 16px;
}

.discipline-grade.grade-pass {
  color: #16a34a;
}

.discipline-grade.grade-fail {
  color: #dc2626;
}
.course-controls {
  display: flex;
  gap: 16px;
  align-items: center;
}

.controls-row {
  display: flex;
  gap: 16px;
  align-items: center;
}

.pendencies-toggle {
  cursor: pointer;
  transition: color 200ms ease;
}

.pendencies-toggle:hover {
  color: #6d28d9;
}
</style>
