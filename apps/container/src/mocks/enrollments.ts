type EnrollmentConcept = "A" | "B" | "C" | "D" | "F" | "O" | "R" | "I" | string;

interface EnrollmentSubject {
  _id: string;
  name: string;
  search: string;
  creditos: number;
}

interface EnrollmentTeacher {
  _id: string;
  name: string;
  alias: string[];
}

interface Enrollment {
  _id: string;
  disciplina: string;
  code: string;
  quad: number;
  year: number;
  conceito: EnrollmentConcept;
  ca_acumulado?: number | null;
  cr_acumulado?: number | null;
  cp_acumulado?: number | null;
  createdAt: string;
  updatedAt: string;
  creditos: number;
  identifier?: string;
  season: string;
  subject?: EnrollmentSubject;
  comments?: string[];
  teoria?: EnrollmentTeacher | null;
  pratica?: EnrollmentTeacher | null;
}

export const enrollments: Enrollment[] = [
  {
    "_id": "6005b8f1c4941ebd70f977ef",
    "disciplina": "Evolução e Diversificação da Vida na Terra",
    "code": "BIL0304-15",
    "quad": 3,
    "year": 2020,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": null,
    "cp_acumulado": null,
    "createdAt": "2021-01-18T16:36:01.775Z",
    "updatedAt": "2024-03-23T16:40:33.627Z",
    "creditos": 3,
    "identifier": "46caf8fc7f3fadb51c37a9a1c9b9ea51",
    "season": "2020:2",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8f06f",
      "name": "evolução e diversificação da vida na terra",
      "search": "Evolucao E Diversificacao Da Vida Na Terra",
      "creditos": 3
    }
  },
  {
    "_id": "6005b8f1c4941ebd70f977f1",
    "disciplina": "Bases Computacionais da Ciência",
    "code": "BIS0005-15",
    "quad": 3,
    "year": 2020,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": null,
    "cp_acumulado": null,
    "createdAt": "2021-01-18T16:36:01.784Z",
    "updatedAt": "2024-03-23T16:40:33.632Z",
    "creditos": 2,
    "identifier": "86fd9a193b3e03fc84987284c172c59a",
    "season": "2020:2",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8ef81",
      "name": "bases computacionais da ciência",
      "search": "Bases Computacionais Da Ciencia",
      "creditos": 2
    }
  },
  {
    "_id": "609b5358244147d60c50854d",
    "disciplina": "Biodiversidade: Interações Entre Organismos e Ambiente",
    "code": "BCL0306-15",
    "quad": 1,
    "year": 2021,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 4,
    "cp_acumulado": null,
    "comments": [
      "teoria"
    ],
    "createdAt": "2021-05-12T04:02:32.700Z",
    "updatedAt": "2026-02-15T13:38:30.930Z",
    "creditos": 3,
    "identifier": "a108093fbaadbbe3206e2d5d19c1d671",
    "season": "2021:1",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8ef87",
      "name": "biodiversidade: interações entre organismos e ambiente",
      "search": "Biodiversidade Interacoes Entre Organismos E Ambiente",
      "creditos": 3
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c9091",
      "name": "Carlos Suetoshi Miyazawa",
      "alias": [
        "carlos suetoshi miyazawa"
      ]
    },
    "pratica": null
  },
  {
    "_id": "609b5358244147d60c50854f",
    "disciplina": "Natureza da Informação",
    "code": "BCM0504-15",
    "quad": 1,
    "year": 2021,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 4,
    "cp_acumulado": null,
    "createdAt": "2021-05-12T04:02:32.711Z",
    "updatedAt": "2026-02-15T13:38:30.944Z",
    "creditos": 3,
    "identifier": "ab80ca6d9365b9bfb21472c8cd400731",
    "season": "2021:1",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f1b8",
      "name": "natureza da informação",
      "search": "Natureza Da Informacao",
      "creditos": 3
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c90b7",
      "name": "Cristiane Maria Sato",
      "alias": [
        "cristiane maria sato"
      ]
    },
    "pratica": null
  },
  {
    "_id": "609b5358244147d60c508551",
    "disciplina": "Geometria Analítica",
    "code": "BCN0404-15",
    "quad": 1,
    "year": 2021,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 4,
    "cp_acumulado": null,
    "comments": [
      "teoria"
    ],
    "createdAt": "2021-05-12T04:02:32.723Z",
    "updatedAt": "2026-02-15T13:38:30.943Z",
    "creditos": 3,
    "identifier": "073547479cf5352830a90ed9086fa673",
    "season": "2021:1",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8f0ca",
      "name": "geometria analítica",
      "search": "Geometria Analitica",
      "creditos": 3
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c92d6",
      "name": "Roldao Da Rocha Junior",
      "alias": [
        "roldao da rocha junior"
      ]
    },
    "pratica": null
  },
  {
    "_id": "60a95a535c16f60395486372",
    "disciplina": "Fenômenos Mecânicos",
    "code": "BCJ0204-15",
    "quad": 1,
    "year": 2021,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 4,
    "cp_acumulado": null,
    "comments": [
      "teoria"
    ],
    "createdAt": "2021-05-22T19:24:03.639Z",
    "updatedAt": "2026-02-15T13:38:30.941Z",
    "creditos": 5,
    "identifier": "53c6744090b56d9e17e8e2ae9691b394",
    "season": "2021:1",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8f077",
      "name": "fenômenos mecânicos",
      "search": "Fenomenos Mecanicos",
      "creditos": 5
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c903e",
      "name": "Ana Melva Champi Farfan",
      "alias": [
        "ana melva champi farfan"
      ]
    },
    "pratica": {
      "_id": "62349c7c8b34400018b0d8b3",
      "name": "Niravkumar Jitendrabhai Joshi",
      "alias": []
    }
  },
  {
    "_id": "60a95a535c16f60395486377",
    "disciplina": "Bases Matemáticas",
    "code": "BIS0003-15",
    "quad": 1,
    "year": 2021,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 4,
    "cp_acumulado": null,
    "comments": [
      "teoria"
    ],
    "createdAt": "2021-05-22T19:24:03.692Z",
    "updatedAt": "2026-02-15T13:38:30.929Z",
    "creditos": 4,
    "identifier": "40a5457af90875c0d1fde291037b1dd9",
    "season": "2021:1",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8ef84",
      "name": "bases matemáticas",
      "search": "Bases Matematicas",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c9268",
      "name": "Norberto Anibal Maidana",
      "alias": [
        "norberto anibal maidana"
      ]
    },
    "pratica": null
  },
  {
    "_id": "612fbd3711242d9652db82e5",
    "disciplina": "Fenômenos Térmicos",
    "code": "BCJ0205-15",
    "quad": 2,
    "year": 2021,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 4,
    "cp_acumulado": null,
    "createdAt": "2021-09-01T17:49:43.960Z",
    "updatedAt": "2026-02-15T13:38:30.935Z",
    "creditos": 4,
    "identifier": "af21ac6f14ddf81b09e97f3f30a2c323",
    "season": "2021:2",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8f079",
      "name": "fenômenos térmicos",
      "search": "Fenomenos Termicos",
      "creditos": 4
    },
    "teoria": {
      "_id": "5dd884b46c2bed0010702c6f",
      "name": "Fagner Muruci De Paula",
      "alias": [
        "fagner muruci de paula"
      ]
    },
    "pratica": {
      "_id": "5dd884b46c2bed0010702c6f",
      "name": "Fagner Muruci De Paula",
      "alias": [
        "fagner muruci de paula"
      ]
    }
  },
  {
    "_id": "612fbd3711242d9652db82e7",
    "disciplina": "Transformações Químicas",
    "code": "BCL0307-15",
    "quad": 2,
    "year": 2021,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 4,
    "cp_acumulado": null,
    "createdAt": "2021-09-01T17:49:43.984Z",
    "updatedAt": "2026-02-15T13:38:30.940Z",
    "creditos": 5,
    "identifier": "ca59c348da499bb3dc3288852ff2a449",
    "season": "2021:2",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f322",
      "name": "transformações químicas",
      "search": "Transformacoes Quimicas",
      "creditos": 5
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c9320",
      "name": "Vani Xavier De Oliveira Junior",
      "alias": [
        "vani xavier de oliveira junior"
      ]
    },
    "pratica": {
      "_id": "5bf5fb65d741524f090c9084",
      "name": "Camilo Andrea Angelucci",
      "alias": [
        "camilo andrea angelucci"
      ]
    }
  },
  {
    "_id": "612fbd3711242d9652db82e9",
    "disciplina": "Processamento da Informação",
    "code": "BCM0505-22",
    "quad": 2,
    "year": 2021,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 4,
    "cp_acumulado": null,
    "createdAt": "2021-09-01T17:49:43.993Z",
    "updatedAt": "2026-02-15T13:38:31.046Z",
    "creditos": 5,
    "identifier": "e955e50e9e860448b5b27c8735d80ca7",
    "season": "2021:2",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f211",
      "name": "processamento da informação",
      "search": "Processamento Da Informacao",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c909d",
      "name": "Celso Setsuo Kurashima",
      "alias": [
        "celso setsuo kurashima"
      ]
    },
    "pratica": {
      "_id": "5bf5fb65d741524f090c909d",
      "name": "Celso Setsuo Kurashima",
      "alias": [
        "celso setsuo kurashima"
      ]
    }
  },
  {
    "_id": "612fbd3811242d9652db82eb",
    "disciplina": "Funções de uma Variável",
    "code": "BCN0402-15",
    "quad": 2,
    "year": 2021,
    "conceito": "B",
    "ca_acumulado": null,
    "cr_acumulado": 4,
    "cp_acumulado": null,
    "createdAt": "2021-09-01T17:49:44.006Z",
    "updatedAt": "2026-02-15T13:38:31.044Z",
    "creditos": 4,
    "identifier": "d7c50455c5dc821338efe86a695313fc",
    "season": "2021:2",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8f0b3",
      "name": "funções de uma variável",
      "search": "Funcoes De Uma Variavel",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c9115",
      "name": "Fedor Pisnitchenko",
      "alias": [
        "fedor pisnitchenko"
      ]
    },
    "pratica": null
  },
  {
    "_id": "61c60d777d346ecbdf7800e9",
    "disciplina": "Fenômenos Eletromagnéticos",
    "code": "BCJ0203-15",
    "quad": 3,
    "year": 2021,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.9130434782608696,
    "cp_acumulado": null,
    "createdAt": "2021-12-24T18:12:07.131Z",
    "updatedAt": "2026-02-15T13:38:31.049Z",
    "creditos": 5,
    "identifier": "9954bd5329f2e819d9a09af125c67c53",
    "season": "2021:3",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8f076",
      "name": "fenômenos eletromagnéticos",
      "search": "Fenomenos Eletromagneticos",
      "creditos": 5
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c92a5",
      "name": "Regina Keiko Murakami",
      "alias": [
        "regina keiko murakami"
      ]
    },
    "pratica": {
      "_id": "5bf5fb65d741524f090c92a5",
      "name": "Regina Keiko Murakami",
      "alias": [
        "regina keiko murakami"
      ]
    }
  },
  {
    "_id": "61c60d777d346ecbdf7800eb",
    "disciplina": "Comunicação e Redes",
    "code": "BCM0506-15",
    "quad": 3,
    "year": 2021,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.9130434782608696,
    "cp_acumulado": null,
    "createdAt": "2021-12-24T18:12:07.142Z",
    "updatedAt": "2026-02-15T13:38:31.049Z",
    "creditos": 3,
    "identifier": "b558d7a9bc622f50b519eb308d7a0c1b",
    "season": "2021:3",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8efc4",
      "name": "comunicação e redes",
      "search": "Comunicacao E Redes",
      "creditos": 3
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c9022",
      "name": "Alexandre Donizeti Alves",
      "alias": [
        "alexandre donizeti alves"
      ]
    },
    "pratica": null
  },
  {
    "_id": "61c60d777d346ecbdf7800ed",
    "disciplina": "Bases Epistemológicas da Ciência Moderna",
    "code": "BIR0004-15",
    "quad": 3,
    "year": 2021,
    "conceito": "B",
    "ca_acumulado": null,
    "cr_acumulado": 3.9130434782608696,
    "cp_acumulado": null,
    "createdAt": "2021-12-24T18:12:07.154Z",
    "updatedAt": "2026-02-15T13:38:31.066Z",
    "creditos": 3,
    "identifier": "6e4acaa7e820bd15c0a5ac9dc3fe636e",
    "season": "2021:3",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8ef83",
      "name": "bases epistemológicas da ciência moderna",
      "search": "Bases Epistemologicas Da Ciencia Moderna",
      "creditos": 3
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c91e0",
      "name": "Luciana Zaterka",
      "alias": [
        "luciana zaterka"
      ]
    },
    "pratica": null
  },
  {
    "_id": "61c60d777d346ecbdf7800ef",
    "disciplina": "Programação Estruturada",
    "code": "MCTA028-15",
    "quad": 3,
    "year": 2021,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.9130434782608696,
    "cp_acumulado": null,
    "comments": [
      "teoria"
    ],
    "createdAt": "2021-12-24T18:12:07.165Z",
    "updatedAt": "2026-02-15T13:38:31.071Z",
    "creditos": 4,
    "identifier": "b7743648c060adcd0e7a253c17cd1574",
    "season": "2021:3",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f226",
      "name": "programação estruturada",
      "search": "Programacao Estruturada",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c9286",
      "name": "Paulo Henrique Pisani",
      "alias": [
        "paulo henrique pisani"
      ]
    },
    "pratica": {
      "_id": "5bf5fb65d741524f090c9286",
      "name": "Paulo Henrique Pisani",
      "alias": [
        "paulo henrique pisani"
      ]
    }
  },
  {
    "_id": "61d8baf7475aff2e64d9d554",
    "disciplina": "Funções de Várias Variáveis",
    "code": "BCN0407-15",
    "quad": 3,
    "year": 2021,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.9130434782608696,
    "cp_acumulado": null,
    "createdAt": "2022-01-07T22:13:11.985Z",
    "updatedAt": "2026-02-15T13:38:31.065Z",
    "creditos": 4,
    "identifier": "ac57943b431f8789eeecad8f47f51d0d",
    "season": "2021:3",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8f0b6",
      "name": "funções de várias variáveis",
      "search": "Funcoes De Varias Variaveis",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c9115",
      "name": "Fedor Pisnitchenko",
      "alias": [
        "fedor pisnitchenko"
      ]
    },
    "pratica": null
  },
  {
    "_id": "62995731fb3b95f8fc0b0a5b",
    "disciplina": "Física Quântica",
    "code": "BCK0103-15",
    "quad": 1,
    "year": 2022,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.8923076923076922,
    "cp_acumulado": null,
    "createdAt": "2022-06-03T00:34:57.301Z",
    "updatedAt": "2026-02-15T13:38:31.082Z",
    "creditos": 3,
    "identifier": "5b46708dea1444a6e2c47392e74de448",
    "season": "2022:1",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8f0bc",
      "name": "física quântica",
      "search": "Fisica Quantica",
      "creditos": 3
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c920b",
      "name": "Marcelo Oliveira Da Costa Pires",
      "alias": [
        "marcelo oliveira da costa pires",
        "marcelo oliveira costa pires"
      ]
    },
    "pratica": null
  },
  {
    "_id": "62995731fb3b95f8fc0b0a5d",
    "disciplina": "Bioquímica: Estrutura, Propriedade e Funções de Biomoléculas",
    "code": "BCL0308-15",
    "quad": 1,
    "year": 2022,
    "conceito": "A",
    "ca_acumulado": 3.8923076923076922,
    "cr_acumulado": 3.8923076923076922,
    "cp_acumulado": 0.342,
    "createdAt": "2022-06-03T00:34:57.314Z",
    "updatedAt": "2024-03-23T16:40:33.810Z",
    "creditos": 5,
    "identifier": "fbb1a7ce40989c5c3b47e4dbc933e434",
    "season": "2022:1",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8ef9b",
      "name": "bioquímica: estrutura, propriedade e funções de biomoléculas",
      "search": "Bioquimica Estrutura Propriedade E Funcoes De Biomoleculas",
      "creditos": 5
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c91e2",
      "name": "Luciano Puzer",
      "alias": [
        "luciano puzer"
      ]
    },
    "pratica": {
      "_id": "5bf5fb65d741524f090c9084",
      "name": "Camilo Andrea Angelucci",
      "alias": [
        "camilo andrea angelucci"
      ]
    }
  },
  {
    "_id": "62995731fb3b95f8fc0b0a5f",
    "disciplina": "Introdução à Probabilidade e à Estatística",
    "code": "BIN0406-15",
    "quad": 1,
    "year": 2022,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.8923076923076922,
    "cp_acumulado": null,
    "comments": [
      "teoria"
    ],
    "createdAt": "2022-06-03T00:34:57.338Z",
    "updatedAt": "2026-02-15T13:38:31.087Z",
    "creditos": 3,
    "identifier": "026f3f3f6f2f5cd772e8f6b6523ffe85",
    "season": "2022:1",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f141",
      "name": "introdução à probabilidade e à estatística",
      "search": "Introducao A Probabilidade EA Estatistica",
      "creditos": 3
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c908d",
      "name": "Carlos Da Silva Dos Santos",
      "alias": [
        "carlos da silva dos santos"
      ]
    },
    "pratica": null
  },
  {
    "_id": "62995731fb3b95f8fc0b0a61",
    "disciplina": "Segurança de Redes",
    "code": "ESZI031-17",
    "quad": 1,
    "year": 2022,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.8923076923076922,
    "cp_acumulado": null,
    "comments": [
      "teoria"
    ],
    "createdAt": "2022-06-03T00:34:57.350Z",
    "updatedAt": "2026-02-15T13:38:31.159Z",
    "creditos": 4,
    "identifier": "6dd0599fd9fb19572d19c7709909f2ad",
    "season": "2022:1",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f29c",
      "name": "segurança de redes",
      "search": "Seguranca De Redes",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c918e",
      "name": "Joao Henrique Kleinschmidt",
      "alias": [
        "joao henrique kleinschmidt",
        "joao henrique kleinschimidt"
      ]
    },
    "pratica": null
  },
  {
    "_id": "62995731fb3b95f8fc0b0a63",
    "disciplina": "Algoritmos e Estruturas de Dados I",
    "code": "MCCC001-23",
    "quad": 1,
    "year": 2022,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.8923076923076922,
    "cp_acumulado": null,
    "createdAt": "2022-06-03T00:34:57.364Z",
    "updatedAt": "2026-02-15T13:38:31.169Z",
    "creditos": 4,
    "identifier": "a514374d813ff07a292e232ed1bcd8fe",
    "season": "2022:1",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8ef4e",
      "name": "algoritmos e estruturas de dados i",
      "search": "Algoritmos E Estruturas De Dados I",
      "creditos": 4
    }
  },
  {
    "_id": "63233a397a974e2b06242c39",
    "disciplina": "Interações Atômicas e Moleculares",
    "code": "BCK0104-15",
    "quad": 2,
    "year": 2022,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.9166666666666665,
    "cp_acumulado": null,
    "createdAt": "2022-09-15T14:44:09.496Z",
    "updatedAt": "2026-02-15T13:38:31.167Z",
    "creditos": 3,
    "identifier": "607f5573eb3c5869fb55f17741f24258",
    "season": "2022:2",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f11d",
      "name": "interações atômicas e moleculares",
      "search": "Interacoes Atomicas E Moleculares",
      "creditos": 3
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c916f",
      "name": "Hueder Paulo Moises De Oliveira",
      "alias": [
        "hueder paulo moises de oliveira"
      ]
    },
    "pratica": null
  },
  {
    "_id": "63233a397a974e2b06242c3b",
    "disciplina": "Introdução às Equações Diferenciais Ordinárias",
    "code": "BCN0405-15",
    "quad": 2,
    "year": 2022,
    "conceito": "B",
    "ca_acumulado": null,
    "cr_acumulado": 3.9166666666666665,
    "cp_acumulado": null,
    "comments": [
      "teoria"
    ],
    "createdAt": "2022-09-15T14:44:09.512Z",
    "updatedAt": "2026-02-15T13:38:31.168Z",
    "creditos": 4,
    "identifier": "19501555b8685e1eb5a2c7ace36134f7",
    "season": "2022:2",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f146",
      "name": "introdução às equações diferenciais ordinárias",
      "search": "Introducao As Equacoes Diferenciais Ordinarias",
      "creditos": 4
    },
    "teoria": {
      "_id": "62c415ff8059c2001800d698",
      "name": "Giliard Souza Dos Anjos",
      "alias": [
        "giliard souza dos anjos"
      ]
    },
    "pratica": null
  },
  {
    "_id": "63233a397a974e2b06242c3d",
    "disciplina": "Base Experimental das Ciências Naturais",
    "code": "BCS0001-25",
    "quad": 2,
    "year": 2022,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.9166666666666665,
    "cp_acumulado": null,
    "createdAt": "2022-09-15T14:44:09.526Z",
    "updatedAt": "2026-02-15T13:38:31.172Z",
    "creditos": 3,
    "identifier": "e3a02ba0ae9944b5cb11e25882623cfc",
    "season": "2022:2",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8ef7e",
      "name": "base experimental das ciências naturais",
      "search": "Base Experimental Das Ciencias Naturais",
      "creditos": 3
    },
    "teoria": null,
    "pratica": {
      "_id": "5bf5fb65d741524f090c91cd",
      "name": "Leonardo Jose Steil",
      "alias": [
        "leonardo jose steil"
      ]
    }
  },
  {
    "_id": "63233a397a974e2b06242c3f",
    "disciplina": "Estrutura e Dinâmica Social",
    "code": "BIQ0602-15",
    "quad": 2,
    "year": 2022,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.9166666666666665,
    "cp_acumulado": null,
    "createdAt": "2022-09-15T14:44:09.543Z",
    "updatedAt": "2026-02-15T13:38:31.174Z",
    "creditos": 3,
    "identifier": "20f17bcefc4d58215e6e8151b0798ade",
    "season": "2022:2",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8f063",
      "name": "estrutura e dinâmica social",
      "search": "Estrutura E Dinamica Social",
      "creditos": 3
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c906c",
      "name": "Antonio Marcos Roseira",
      "alias": [
        "antonio marcos roseira"
      ]
    },
    "pratica": null
  },
  {
    "_id": "6473fd5af02a9ad401c3651b",
    "disciplina": "Circuitos Digitais",
    "code": "MCTA006-17",
    "quad": 1,
    "year": 2023,
    "conceito": "B",
    "ca_acumulado": null,
    "cr_acumulado": 3.7711864406779663,
    "cp_acumulado": null,
    "comments": [
      "teoria",
      "pratica"
    ],
    "createdAt": "2023-05-29T01:18:18.864Z",
    "updatedAt": "2026-02-15T13:38:31.281Z",
    "creditos": 4,
    "identifier": "fea37d93dce944be15d59f890d37ff59",
    "season": "2023:1",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8efad",
      "name": "circuitos digitais",
      "search": "Circuitos Digitais",
      "creditos": 4
    },
    "teoria": {
      "_id": "63726e217b18ad001887ef2c",
      "name": "Hugo Puertas De Araujo",
      "alias": [
        "hugo puertas de araújo",
        "hugo puertas de araujo",
        "hugo puertas de araújo"
      ]
    },
    "pratica": {
      "_id": "5bf5fb65d741524f090c919e",
      "name": "Jose Artur Quilici Gonzalez",
      "alias": [
        "jose artur quilici gonzalez"
      ]
    }
  },
  {
    "_id": "6473fd5af02a9ad401c3651d",
    "disciplina": "Linguagens Formais e Automata",
    "code": "MCCC009-23",
    "quad": 1,
    "year": 2023,
    "conceito": "D",
    "ca_acumulado": 3.7711864406779663,
    "cr_acumulado": 3.7711864406779663,
    "cp_acumulado": 0.621,
    "comments": [],
    "createdAt": "2023-05-29T01:18:18.870Z",
    "updatedAt": "2024-03-23T16:40:34.033Z",
    "creditos": 4,
    "identifier": "d91195701b2bd994a5f8f8ed09aca3a5",
    "season": "2023:1",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f15c",
      "name": "linguagens formais e automata",
      "search": "Linguagens Formais E Automata",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c9022",
      "name": "Alexandre Donizeti Alves",
      "alias": [
        "alexandre donizeti alves"
      ]
    },
    "pratica": null
  },
  {
    "_id": "6473fd5af02a9ad401c36522",
    "disciplina": "Redes de Computadores",
    "code": "MCTA022-17",
    "quad": 1,
    "year": 2023,
    "conceito": "C",
    "ca_acumulado": null,
    "cr_acumulado": 3.7711864406779663,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2023-05-29T01:18:18.897Z",
    "updatedAt": "2026-02-15T13:38:31.290Z",
    "creditos": 4,
    "identifier": "75ad345a06f87a97b50115e4b2b2ab5a",
    "season": "2023:1",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f27f",
      "name": "redes de computadores",
      "search": "Redes De Computadores",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c9166",
      "name": "Gustavo Sousa Pavani",
      "alias": [
        "gustavo sousa pavani"
      ]
    },
    "pratica": {
      "_id": "63726e507b18ad001887f0a9",
      "name": "Rodrigo Augusto Cardoso Da Silva",
      "alias": [
        "rodrigo augusto cardoso da silva"
      ]
    }
  },
  {
    "_id": "6473fd5af02a9ad401c36524",
    "disciplina": "Engenharia de Software",
    "code": "MCTA033-15",
    "quad": 1,
    "year": 2023,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.7711864406779663,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2023-05-29T01:18:18.902Z",
    "updatedAt": "2026-02-15T13:38:31.285Z",
    "creditos": 4,
    "identifier": "c3fd97579d2ae1de20c82ff3065b1330",
    "season": "2023:1",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8f04f",
      "name": "engenharia de software",
      "search": "Engenharia De Software",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c91b1",
      "name": "Juliana Cristina Braga",
      "alias": [
        "juliana cristina braga"
      ]
    },
    "pratica": null
  },
  {
    "_id": "6502a405216580ff36a9e745",
    "disciplina": "Fundamentos de Desenho Técnico",
    "code": "ESTO011-17",
    "quad": 2,
    "year": 2023,
    "conceito": "B",
    "ca_acumulado": null,
    "cr_acumulado": 3.6194029850746268,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2023-09-14T06:11:17.770Z",
    "updatedAt": "2026-02-15T13:38:31.310Z",
    "creditos": 2,
    "identifier": "e77f239cb0590385a9d9af08fa1edcbb",
    "season": "2023:2",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8f0a2",
      "name": "fundamentos de desenho técnico",
      "search": "Fundamentos De Desenho Tecnico",
      "creditos": 2
    },
    "teoria": {
      "_id": "62c4169f8059c2001800da78",
      "name": "Fernanda Borges Monteiro Alves",
      "alias": [
        "fernanda borges monteiro alves"
      ]
    },
    "pratica": null
  },
  {
    "_id": "6502a405216580ff36a9e747",
    "disciplina": "Análise de Algoritmos",
    "code": "MCCC004-23",
    "quad": 2,
    "year": 2023,
    "conceito": "C",
    "ca_acumulado": null,
    "cr_acumulado": 3.6194029850746268,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2023-09-14T06:11:17.777Z",
    "updatedAt": "2026-02-15T13:38:31.306Z",
    "creditos": 4,
    "identifier": "eec408e116ca73ffca4c98d9b5f2cf38",
    "season": "2023:2",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8ef5e",
      "name": "análise de algoritmos",
      "search": "Analise De Algoritmos",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c9086",
      "name": "Carla Negri Lintzmayer",
      "alias": [
        "carla negri lintzmayer"
      ]
    },
    "pratica": null
  },
  {
    "_id": "6502a405216580ff36a9e749",
    "disciplina": "Compiladores e Interpretadores", // compiladores
    "code": "MCCC006-23",
    "quad": 2,
    "year": 2023,
    "conceito": "B",
    "ca_acumulado": null,
    "cr_acumulado": 3.6194029850746268,
    "cp_acumulado": null,
    "comments": [
      "teoria"
    ],
    "createdAt": "2023-09-14T06:11:17.801Z",
    "updatedAt": "2026-02-15T13:38:31.309Z",
    "creditos": 4,
    "identifier": "0daf3cc9fcf0bca417541fa34cf365dc",
    "season": "2023:2",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8efbd",
      "name": "compiladores",
      "search": "Compiladores",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c913a",
      "name": "Francisco Isidro Massetto",
      "alias": [
        "francisco isidro massetto"
      ]
    },
    "pratica": {
      "_id": "5bf5fb65d741524f090c913a",
      "name": "Francisco Isidro Massetto",
      "alias": [
        "francisco isidro massetto"
      ]
    }
  },
  {
    "_id": "6502a406216580ff36a9e76e",
    "disciplina": "Computadores, Ética e Sociedade",
    "code": "MCTA009-13",
    "quad": 2,
    "year": 2023,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.6194029850746268,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2023-09-14T06:11:18.083Z",
    "updatedAt": "2026-02-15T13:38:31.309Z",
    "creditos": 2,
    "identifier": "34cfa99da0643d26859c27df332a3239",
    "season": "2023:2",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8efbf",
      "name": "computadores, Ética e sociedade",
      "search": "Computadores Etica E Sociedade",
      "creditos": 2
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c9186",
      "name": "Jeronimo Cordoni Pellegrini",
      "alias": [
        "jeronimo cordoni pellegrini"
      ]
    },
    "pratica": null
  },
  {
    "_id": "6502a406216580ff36a9e770",
    "disciplina": "Programação Orientada a Objetos",
    "code": "MCTA018-13",
    "quad": 2,
    "year": 2023,
    "conceito": "B",
    "ca_acumulado": null,
    "cr_acumulado": 3.6194029850746268,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2023-09-14T06:11:18.088Z",
    "updatedAt": "2026-02-15T13:38:31.380Z",
    "creditos": 4,
    "identifier": "ea4faa6a87515b51c00a9676fa3ad730",
    "season": "2023:2",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f228",
      "name": "programação orientada a objetos",
      "search": "Programacao Orientada A Objetos",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c9286",
      "name": "Paulo Henrique Pisani",
      "alias": [
        "paulo henrique pisani"
      ]
    },
    "pratica": {
      "_id": "5bf5fb65d741524f090c9286",
      "name": "Paulo Henrique Pisani",
      "alias": [
        "paulo henrique pisani"
      ]
    }
  },
  {
    "_id": "659f2c9691a8824fda6ef0e2",
    "disciplina": "Arquitetura de Computadores",
    "code": "MCTA004-17",
    "quad": 3,
    "year": 2023,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.54,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2024-01-10T23:47:34.914Z",
    "updatedAt": "2026-02-15T13:38:31.392Z",
    "creditos": 4,
    "identifier": "42f2ff8153dd0569e47c939994c55678",
    "season": "2023:3",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8ef6e",
      "name": "arquitetura de computadores",
      "search": "Arquitetura De Computadores",
      "creditos": 4
    },
    "teoria": {
      "_id": "63726e627b18ad001887f1a3",
      "name": "Rodrigo Izidoro Tinini",
      "alias": [
        "rodrigo izidoro tinini"
      ]
    },
    "pratica": null
  },
  {
    "_id": "659f2c9691a8824fda6ef0e4",
    "disciplina": "Inteligência Artificial",
    "code": "MCCC008-23",
    "quad": 3,
    "year": 2023,
    "conceito": "C",
    "ca_acumulado": null,
    "cr_acumulado": 3.54,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2024-01-10T23:47:34.920Z",
    "updatedAt": "2026-02-15T13:38:31.407Z",
    "creditos": 4,
    "identifier": "599302270a7e3c5cf2c967f6f4a76c80",
    "season": "2023:3",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f119",
      "name": "inteligência artificial",
      "search": "Inteligencia Artificial",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c9112",
      "name": "Fabricio Olivetti De Franca",
      "alias": [
        "fabricio olivetti de franca",
        "fabricio olivetti de frança",
        "fabricio olivetti de frança"
      ]
    },
    "pratica": null
  },
  {
    "_id": "659f2c9691a8824fda6ef0e6",
    "disciplina": "Teoria dos Grafos",
    "code": "MCCC003-23",
    "quad": 3,
    "year": 2023,
    "conceito": "D",
    "ca_acumulado": null,
    "cr_acumulado": 3.54,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2024-01-10T23:47:34.926Z",
    "updatedAt": "2026-02-15T13:38:31.409Z",
    "creditos": 4,
    "identifier": "80efcc2a78de6087b81e4071c6a075f2",
    "season": "2023:3",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f2fd",
      "name": "teoria dos grafos",
      "search": "Teoria Dos Grafos",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c9086",
      "name": "Carla Negri Lintzmayer",
      "alias": [
        "carla negri lintzmayer"
      ]
    },
    "pratica": null
  },
  {
    "_id": "659f2c9691a8824fda6ef0e8",
    "disciplina": "Banco de Dados",
    "code": "MCCC012-23",
    "quad": 3,
    "year": 2023,
    "conceito": "B",
    "ca_acumulado": null,
    "cr_acumulado": 3.54,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2024-01-10T23:47:34.932Z",
    "updatedAt": "2026-02-15T13:38:31.395Z",
    "creditos": 4,
    "identifier": "b0334402570945cdef8649cf57705533",
    "season": "2023:3",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8ef7c",
      "name": "banco de dados",
      "search": "Banco De Dados",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c9192",
      "name": "Joao Marcelo Borovina Josko",
      "alias": [
        "joao marcelo borovina josko",
        "joão marcelo borovina josko",
        "joão marcelo borovina josko"
      ]
    },
    "pratica": {
      "_id": "5bf5fb65d741524f090c9192",
      "name": "Joao Marcelo Borovina Josko",
      "alias": [
        "joao marcelo borovina josko",
        "joão marcelo borovina josko",
        "joão marcelo borovina josko"
      ]
    }
  },
  {
    "_id": "659f2c9691a8824fda6ef0ea",
    "disciplina": "Processamento de Linguagem Natural",
    "code": "MCZA017-13",
    "quad": 3,
    "year": 2023,
    "conceito": "B",
    "ca_acumulado": null,
    "cr_acumulado": 3.54,
    "cp_acumulado": null,
    "comments": [
      "teoria"
    ],
    "createdAt": "2024-01-10T23:47:34.938Z",
    "updatedAt": "2026-02-15T13:38:31.408Z",
    "creditos": 4,
    "identifier": "260b33abcb920e992a4a6e30e1aba1cf",
    "season": "2023:3",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f216",
      "name": "processamento de linguagem natural",
      "search": "Processamento De Linguagem Natural",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c9022",
      "name": "Alexandre Donizeti Alves",
      "alias": [
        "alexandre donizeti alves"
      ]
    },
    "pratica": null
  },
  {
    "_id": "65f60a182aa8cdc69adab7f2",
    "disciplina": "Lógica Básica",
    "code": "NHI2049-13",
    "quad": 3,
    "year": 2022,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.88659793814433,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2024-03-16T21:07:36.530Z",
    "updatedAt": "2026-02-15T13:38:31.280Z",
    "creditos": 4,
    "identifier": "697664a9f60336dd6d2412f549fdead3",
    "season": "2022:3",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f15f",
      "name": "lógica básica",
      "search": "Logica Basica",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c922e",
      "name": "Maria Das Gracas Bruno Marietto",
      "alias": [
        "maria das gracas bruno marietto",
        "maria das graças bruno marietto",
        "maria das graças bruno marietto"
      ]
    },
    "pratica": null
  },
  {
    "_id": "65f60a232aa8cdc69adaf0de",
    "disciplina": "Algoritmos e Estruturas de Dados II",
    "code": "MCCC002-23",
    "quad": 3,
    "year": 2022,
    "conceito": "B",
    "ca_acumulado": null,
    "cr_acumulado": 3.88659793814433,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2024-03-16T21:07:47.153Z",
    "updatedAt": "2026-02-15T13:38:31.196Z",
    "creditos": 4,
    "identifier": "099ae0c608c9aaee6f4a4b9b144cd596",
    "season": "2022:3",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8ef4f",
      "name": "algoritmos e estruturas de dados ii",
      "search": "Algoritmos E Estruturas De Dados Ii",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c9087",
      "name": "Carlo Kleber Da Silva Rodrigues",
      "alias": [
        "carlo kleber da silva rodrigues"
      ]
    },
    "pratica": {
      "_id": "5bf5fb65d741524f090c9087",
      "name": "Carlo Kleber Da Silva Rodrigues",
      "alias": [
        "carlo kleber da silva rodrigues"
      ]
    }
  },
  {
    "_id": "65f60a232aa8cdc69adaf0e0",
    "disciplina": "Ciência, Tecnologia e Sociedade",
    "code": "BIR0603-15",
    "quad": 3,
    "year": 2022,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.88659793814433,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2024-03-16T21:07:47.154Z",
    "updatedAt": "2026-02-15T13:38:31.197Z",
    "creditos": 3,
    "identifier": "541d206544110182748e869b3bd9a0c5",
    "season": "2022:3",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8efb5",
      "name": "ciência, tecnologia e sociedade",
      "search": "Ciencia Tecnologia E Sociedade",
      "creditos": 3
    },
    "teoria": {
      "_id": "60d9e86e6fed7a001000ed4f",
      "name": "Jesse Jose Freire De Souza",
      "alias": [
        "jesse jose freire de souza"
      ]
    },
    "pratica": null
  },
  {
    "_id": "65f60a232aa8cdc69adaf0e2",
    "disciplina": "Modelagem e Controle",
    "code": "ESTA020-17",
    "quad": 3,
    "year": 2022,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.88659793814433,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2024-03-16T21:07:47.155Z",
    "updatedAt": "2026-02-15T13:38:31.199Z",
    "creditos": 2,
    "identifier": "ec229db68ceda82c7b0a390957571e99",
    "season": "2022:3",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f198",
      "name": "modelagem e controle",
      "search": "Modelagem E Controle",
      "creditos": 2
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c92c6",
      "name": "Roberto Luiz Da Cunha Barroso Ramos",
      "alias": [
        "Roberto Ramos",
        "roberto luiz da cunha barroso ramos"
      ]
    },
    "pratica": null
  },
  {
    "_id": "65f60a232aa8cdc69adaf0e4",
    "disciplina": "Princípios de Administração",
    "code": "ESTO012-17",
    "quad": 3,
    "year": 2022,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.88659793814433,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2024-03-16T21:07:47.156Z",
    "updatedAt": "2026-02-15T13:38:31.200Z",
    "creditos": 2,
    "identifier": "da573d5663a7cc5a9fc745b04d5ca752",
    "season": "2022:3",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f204",
      "name": "princípios de administração",
      "search": "Principios De Administracao",
      "creditos": 2
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c92f7",
      "name": "Silvia Novaes Zilber Turri",
      "alias": [
        "silvia novaes zilber turri"
      ]
    },
    "pratica": null
  },
  {
    "_id": "65f60a232aa8cdc69adaf0e6",
    "disciplina": "Álgebra Linear",
    "code": "MCTB001-17",
    "quad": 3,
    "year": 2022,
    "conceito": "C",
    "ca_acumulado": null,
    "cr_acumulado": 3.88659793814433,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2024-03-16T21:07:47.152Z",
    "updatedAt": "2026-02-15T13:38:31.270Z",
    "creditos": 6,
    "identifier": "0b02ac5fa9574763646bde1059571897",
    "season": "2022:3",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f34b",
      "name": "álgebra linear",
      "search": "Algebra Linear",
      "creditos": 6
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c90b6",
      "name": "Cristian Favio Coletti",
      "alias": [
        "cristian favio coletti"
      ]
    },
    "pratica": null
  },
  {
    "_id": "672763b25d9383109b66ad44",
    "disciplina": "Projeto de Graduação em Computação I",
    "code": "MCCC017-23",
    "quad": 2,
    "year": 2024,
    "conceito": "A",
    "ca_acumulado": 3.4293478260869565,
    "cr_acumulado": 3.4293478260869565,
    "cp_acumulado": 0.968,
    "comments": [],
    "createdAt": "2024-11-03T11:51:14.496Z",
    "updatedAt": "2025-09-14T16:15:20.019Z",
    "creditos": 8,
    "identifier": "c995fb6254ffb9618e6aed12d07a985c",
    "season": "2024:2",
    "subject": {
      "_id": "643b1bc2eabd910010a94dfa",
      "name": "projeto de graduação em computação i",
      "search": "Projeto De Graduacao Em Computacao I",
      "creditos": 8
    }
  },
  {
    "_id": "672763b25d9383109b66ad46",
    "disciplina": "Programação Funcional",
    "code": "MCCC015-23",
    "quad": 2,
    "year": 2024,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.4293478260869565,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2024-11-03T11:51:14.497Z",
    "updatedAt": "2026-02-15T13:38:31.513Z",
    "creditos": 4,
    "identifier": "badf2e4a39f80ae065cc9f61e9f0ec16",
    "season": "2024:2",
    "subject": {
      "_id": "67275bd2cd2403cd07afc8b9",
      "name": "programação funcional",
      "search": "Programacao Funcional",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c90fc",
      "name": "Emilio De Camargo Francesquini",
      "alias": [
        "emilio de camargo francesquini"
      ]
    },
    "pratica": null
  },
  {
    "_id": "672763b25d9383109b66ad48",
    "disciplina": "Tópicos Computacionais em Materiais",
    "code": "ESTM003-17",
    "quad": 2,
    "year": 2024,
    "conceito": "B",
    "ca_acumulado": null,
    "cr_acumulado": 3.4293478260869565,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2024-11-03T11:51:14.498Z",
    "updatedAt": "2026-02-15T13:38:31.516Z",
    "creditos": 4,
    "identifier": "72eb45b1b182e68c30075c9e5b9fbb8b",
    "season": "2024:2",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f334",
      "name": "tópicos computacionais em materiais",
      "search": "Topicos Computacionais Em Materiais",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c9217",
      "name": "Marcio Gustavo Di Vernieri Cuppari",
      "alias": [
        "marcio gustavo di vernieri cuppari"
      ]
    },
    "pratica": {
      "_id": "5bf5fb65d741524f090c9217",
      "name": "Marcio Gustavo Di Vernieri Cuppari",
      "alias": [
        "marcio gustavo di vernieri cuppari"
      ]
    }
  },
  {
    "_id": "672763b25d9383109b66ad4a",
    "disciplina": "Vida Artificial na Computação",
    "code": "MCZA030-17",
    "quad": 2,
    "year": 2024,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.4293478260869565,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2024-11-03T11:51:14.499Z",
    "updatedAt": "2026-02-15T13:38:31.535Z",
    "creditos": 2,
    "identifier": "f29a71c383a6c9264ad314bbc80a12a0",
    "season": "2024:2",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f343",
      "name": "vida artificial na computação",
      "search": "Vida Artificial Na Computacao",
      "creditos": 2
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c91be",
      "name": "Karla Vittori",
      "alias": [
        "karla vittori"
      ]
    },
    "pratica": null
  },
  {
    "_id": "6770a1705dd43cb4adcec2e4",
    "disciplina": "Aprendizado de Máquina",
    "code": "MCZA002-17",
    "quad": 3,
    "year": 2024,
    "conceito": "B",
    "ca_acumulado": null,
    "cr_acumulado": 3.470873786407767,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2024-12-29T01:10:08.402Z",
    "updatedAt": "2026-02-15T13:38:31.550Z",
    "creditos": 4,
    "identifier": "a45d2880ae4015817bca8d8781b1b5f3",
    "season": "2024:3",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8ef6b",
      "name": "aprendizado de máquina",
      "search": "Aprendizado De Maquina",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c92d8",
      "name": "Ronaldo Cristiano Prati",
      "alias": [
        "ronaldo cristiano prati"
      ]
    },
    "pratica": null
  },
  {
    "_id": "6770a1705dd43cb4adcec2f2",
    "disciplina": "Computação Gráfica",
    "code": "MCCC007-23",
    "quad": 3,
    "year": 2024,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.470873786407767,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2024-12-29T01:10:08.604Z",
    "updatedAt": "2026-02-15T13:38:31.555Z",
    "creditos": 4,
    "identifier": "7ff409c6ada8bf5b545a83db2100b815",
    "season": "2024:3",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8efc2",
      "name": "computação gráfica",
      "search": "Computacao Grafica",
      "creditos": 4
    },
    "teoria": null,
    "pratica": {
      "_id": "5bf5fb65d741524f090c9022",
      "name": "Alexandre Donizeti Alves",
      "alias": [
        "alexandre donizeti alves"
      ]
    }
  },
  {
    "_id": "6770a1705dd43cb4adcec2f7",
    "disciplina": "Projeto de Graduação em Computação II",
    "code": "MCCC017-23",
    "quad": 3,
    "year": 2024,
    "conceito": "A",
    "ca_acumulado": 3.470873786407767,
    "cr_acumulado": 3.470873786407767,
    "cp_acumulado": 1,
    "comments": [],
    "createdAt": "2024-12-29T01:10:08.647Z",
    "updatedAt": "2025-09-14T16:15:20.110Z",
    "creditos": 8,
    "identifier": "9975993f8b949425e2e08a2a430ab3a5",
    "season": "2024:3",
    "subject": {
      "_id": "643b1bc7eabd910010a94dfd",
      "name": "projeto de graduação em computação ii",
      "search": "Projeto De Graduacao Em Computacao Ii",
      "creditos": 8
    }
  },
  {
    "_id": "6770a1705dd43cb4adcec2fb",
    "disciplina": "Otimização Linear",
    "code": "MCCC013-23",
    "quad": 3,
    "year": 2024,
    "conceito": "C",
    "ca_acumulado": null,
    "cr_acumulado": 3.470873786407767,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2024-12-29T01:10:08.656Z",
    "updatedAt": "2026-02-15T13:38:31.558Z",
    "creditos": 4,
    "identifier": "b19cbe28586a20f620305591a8f34b0b",
    "season": "2024:3",
    "subject": {
      "_id": "6554ff5c769e179a2ab97362",
      "name": "otimização linear",
      "search": "Otimizacao Linear",
      "creditos": 4
    },
    "teoria": {
      "_id": "5cafed450a3aac001080406b",
      "name": "Majid Forghani Elahabad",
      "alias": [
        "majid forghani elahabad"
      ]
    },
    "pratica": null
  },
  {
    "_id": "6770a1705dd43cb4adcec30e",
    "disciplina": "Sistemas Distribuídos",
    "code": "MCTA025-13",
    "quad": 2,
    "year": 2024,
    "conceito": "A",
    "ca_acumulado": 3.4293478260869565,
    "cr_acumulado": 3.4293478260869565,
    "cp_acumulado": 0.968,
    "comments": [],
    "createdAt": "2024-12-29T01:10:08.780Z",
    "updatedAt": "2025-09-14T16:15:19.992Z",
    "creditos": 4,
    "identifier": "d202a55904d2be0979c2e455528d380b",
    "season": "2024:2",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f2b5",
      "name": "sistemas distribuídos",
      "search": "Sistemas Distribuidos",
      "creditos": 4
    }
  },
  {
    "_id": "6770a1705dd43cb4adcec31f",
    "disciplina": "Matemática Discreta",
    "code": "MCTB019-17",
    "quad": 1,
    "year": 2024,
    "conceito": "B",
    "ca_acumulado": null,
    "cr_acumulado": 3.429411764705882,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2024-12-29T01:10:08.870Z",
    "updatedAt": "2026-02-15T13:38:31.428Z",
    "creditos": 4,
    "identifier": "b0f3e1370316676180a6a4db712c85a5",
    "season": "2024:1",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f168",
      "name": "matemática discreta",
      "search": "Matematica Discreta",
      "creditos": 4
    },
    "teoria": {
      "_id": "6411d374933f8a001827d9ed",
      "name": "Mituhiro Fukuda",
      "alias": [
        "mituhiro fukuda"
      ]
    },
    "pratica": {
      "_id": "6411d374933f8a001827d9ed",
      "name": "Mituhiro Fukuda",
      "alias": [
        "mituhiro fukuda"
      ]
    }
  },
  {
    "_id": "6770a1705dd43cb4adcec325",
    "disciplina": "Sistemas Operacionais",
    "code": "MCTA026-13",
    "quad": 1,
    "year": 2024,
    "conceito": "B",
    "ca_acumulado": null,
    "cr_acumulado": 3.429411764705882,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2024-12-29T01:10:08.998Z",
    "updatedAt": "2026-02-15T13:38:31.430Z",
    "creditos": 4,
    "identifier": "d80a518209347208438fb7160e8a6519",
    "season": "2024:1",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f2bd",
      "name": "sistemas operacionais",
      "search": "Sistemas Operacionais",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c9319",
      "name": "Valerio Ramos Batista",
      "alias": [
        "valerio ramos batista"
      ]
    },
    "pratica": {
      "_id": "5bf5fb65d741524f090c9319",
      "name": "Valerio Ramos Batista",
      "alias": [
        "valerio ramos batista"
      ]
    }
  },
  {
    "_id": "6770a1715dd43cb4adcec327",
    "disciplina": "Segurança de Dados",
    "code": "MCTA023-17",
    "quad": 1,
    "year": 2024,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.429411764705882,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2024-12-29T01:10:09.006Z",
    "updatedAt": "2026-02-15T13:38:31.433Z",
    "creditos": 4,
    "identifier": "afa3b9f983d96dfc2844833b212f194e",
    "season": "2024:1",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f29a",
      "name": "segurança de dados",
      "search": "Seguranca De Dados",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c90da",
      "name": "Denise Hideko Goya",
      "alias": [
        "denise hideko goya"
      ]
    },
    "pratica": {
      "_id": "5bf5fb65d741524f090c90da",
      "name": "Denise Hideko Goya",
      "alias": [
        "denise hideko goya"
      ]
    }
  },
  {
    "_id": "6770a1715dd43cb4adcec32a",
    "disciplina": "Projeto Dirigido",
    "code": "BCS0002-25",
    "quad": 1,
    "year": 2024,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.429411764705882,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2024-12-29T01:10:09.010Z",
    "updatedAt": "2026-02-15T13:38:31.432Z",
    "creditos": 2,
    "identifier": "26a37d4f294d56a1707e21570a275933",
    "season": "2024:1",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f22f",
      "name": "projeto dirigido",
      "search": "Projeto Dirigido",
      "creditos": 2
    },
    "teoria": null,
    "pratica": {
      "_id": "5bf5fb65d741524f090c90ca",
      "name": "Daniele Ribeiro De Araujo",
      "alias": [
        "daniele ribeiro de araujo"
      ]
    }
  },
  {
    "_id": "6770a1725dd43cb4adcec3f6",
    "disciplina": "Bases Conceituais da Energia",
    "code": "BIJ0207-15",
    "quad": 3,
    "year": 2020,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": null,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2024-12-29T01:10:10.334Z",
    "updatedAt": "2025-05-31T14:11:09.277Z",
    "creditos": 2,
    "identifier": "615296fbbf4c1b4ccd55a5570352a549",
    "season": "2020:3",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8ef82",
      "name": "bases conceituais da energia",
      "search": "Bases Conceituais Da Energia",
      "creditos": 2
    }
  },
  {
    "_id": "67a78f1b455f2b8b3499b56f",
    "disciplina": "Programação para Web",
    "code": "MCZA019-17",
    "quad": 1,
    "year": 2025,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.4646017699115044,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2025-02-08T17:06:35.013Z",
    "updatedAt": "2026-02-15T13:38:31.631Z",
    "creditos": 4,
    "identifier": "13344e2552ccb7e5608356cf694fd742",
    "season": "2025:1",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f22b",
      "name": "programação para web",
      "search": "Programacao Para Web",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c90e3",
      "name": "Diogo Santana Martins",
      "alias": [
        "diogo santana martins"
      ]
    },
    "pratica": {
      "_id": "5bf5fb65d741524f090c90e3",
      "name": "Diogo Santana Martins",
      "alias": [
        "diogo santana martins"
      ]
    }
  },
  {
    "_id": "67a78f1b455f2b8b3499b575",
    "disciplina": "Visão Computacional",
    "code": "ESZA019-17",
    "quad": 1,
    "year": 2025,
    "conceito": "A",
    "ca_acumulado": null,
    "cr_acumulado": 3.4646017699115044,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2025-02-08T17:06:35.059Z",
    "updatedAt": "2026-02-15T13:38:31.556Z",
    "creditos": 4,
    "identifier": "fe8f213a56171f55a75b56f93a0b7042",
    "season": "2025:1",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f346",
      "name": "visão computacional",
      "search": "Visao Computacional",
      "creditos": 4
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c91f0",
      "name": "Luiz Antonio Celiberto Junior",
      "alias": [
        "Luiz Celiberto Jr",
        "luiz antonio celiberto junior"
      ]
    },
    "pratica": {
      "_id": "5bf5fb65d741524f090c91f0",
      "name": "Luiz Antonio Celiberto Junior",
      "alias": [
        "Luiz Celiberto Jr",
        "luiz antonio celiberto junior"
      ]
    }
  },
  {
    "_id": "683b0dfa7671e16142e32ed5",
    "disciplina": "Sistemas Digitais",
    "code": "MCTA024-13",
    "quad": 2,
    "year": 2025,
    "conceito": "C",
    "ca_acumulado": null,
    "cr_acumulado": 3.482905982905983,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2025-05-31T14:11:06.798Z",
    "updatedAt": "2026-02-15T13:38:31.646Z",
    "creditos": 4,
    "identifier": "858ca6ed104b8be2e6f156feb826f0ca",
    "season": "2025:2",
    "subject": {
      "_id": "5bf5fbdc436c414f35a8f2b4",
      "name": "sistemas digitais",
      "search": "Sistemas Digitais",
      "creditos": 4
    },
    "teoria": {
      "_id": "63726e217b18ad001887ef2c",
      "name": "Hugo Puertas De Araujo",
      "alias": [
        "hugo puertas de araújo",
        "hugo puertas de araujo",
        "hugo puertas de araújo"
      ]
    },
    "pratica": {
      "_id": "63726e217b18ad001887ef2c",
      "name": "Hugo Puertas De Araujo",
      "alias": [
        "hugo puertas de araújo",
        "hugo puertas de araujo",
        "hugo puertas de araújo"
      ]
    }
  },
  {
    "_id": "68ba4212defae35cdec1fc97",
    "disciplina": "Estrutura da Matéria",
    "code": "BIK0102-15",
    "quad": 3,
    "year": 2020,
    "conceito": "A",
    "ca_acumulado": null,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2025-09-05T01:51:14.093Z",
    "updatedAt": "2026-02-15T13:38:30.646Z",
    "creditos": 3,
    "season": "2020:2",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8f061",
      "name": "estrutura da matéria",
      "search": "Estrutura Da Materia",
      "creditos": 3
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c904a",
      "name": "Anderson Orzari Ribeiro",
      "alias": [
        "anderson orzari ribeiro"
      ]
    },
    "pratica": null
  },
  {
    "_id": "690bee8241d92779924cf675",
    "disciplina": "Hidráulica de Condutos Livres",
    "code": "ESTU029-17",
    "quad": 3,
    "year": 2025,
    "conceito": "C",
    "ca_acumulado": null,
    "cr_acumulado": 3.457983193277311,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2025-11-06T00:40:34.624Z",
    "updatedAt": "2026-02-15T13:38:31.655Z",
    "creditos": 2,
    "season": "2025:3",
    "subject": {
      "_id": "5bf5fbdb436c414f35a8f0e7",
      "name": "Hidráulica de Condutos Livres",
      "search": "Hidraulica De Condutos Livres",
      "creditos": 3
    },
    "teoria": {
      "_id": "5bf5fb65d741524f090c9083",
      "name": "Camila Clementina Arantes",
      "alias": [
        "camila clementina arantes"
      ]
    },
    "pratica": {
      "_id": "5bf5fb65d741524f090c9083",
      "name": "Camila Clementina Arantes",
      "alias": [
        "camila clementina arantes"
      ]
    }
  },
  {
    "_id": "69768ac012abcedc91bdac7c",
    "disciplina": "Projeto de Graduação em Computação III",
    "code": "MCCC017-23",
    "quad": 3,
    "year": 2025,
    "conceito": "A",
    "ca_acumulado": null,
    "cp_acumulado": null,
    "comments": [],
    "createdAt": "2026-01-25T21:27:28.668Z",
    "updatedAt": "2026-02-15T13:38:31.672Z",
    "creditos": 8,
    "season": "2025:3"
  }
]