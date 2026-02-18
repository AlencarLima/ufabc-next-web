interface cronosEnrollment {
    id: string;
    name: string;
    campus: string[];
    type: string;
    disabled: boolean;
    courseCategory: string[];
    isOptativaLivre: boolean;
    course_color: Array<{
        id: number;
        name: string;
        bgColor: string;
        textColor?: string;
    }>;
    quarter_categories: {
        OPTATIVES_QUARTERS: number[];
        LIVRES_QUARTERS: number[];
        HUMANITIES_QUARTERS: number[];
        OPTATIVAS_LIVRES_QUARTERS: number[];
    };
}

export const enrollmentsCronos: cronosEnrollment[] = [
    {
        "id": "BCT",
        "name": "Bacharelado em Ciência e Tecnologia",
        "campus": [
            "São Bernardo do Campo",
            "Santo André"
        ],
        "type": "Interdisciplinares",
        "disabled": false,
        "courseCategory": [
            "BC&T - Bacharelado em Ciência e Tecnologia (OBR)",
            "BC&T - Bacharelado em Ciência e Tecnologia (OL)"
        ],
        "isOptativaLivre": true,
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-blue-100",
                "textColor": "text-black-900"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-gray-200",
                "textColor": "text-gray-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-red-200",
                "textColor": "text-red-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-red-200",
                "textColor": "text-red-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [],
            "LIVRES_QUARTERS": [],
            "HUMANITIES_QUARTERS": [
                1,
                5,
                6
            ],
            "OPTATIVAS_LIVRES_QUARTERS": [3, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9]
        }
    },
    {
        "id": "BCH",
        "name": "Bacharelado em Ciências e Humanidades",
        "campus": [
            "São Bernardo do Campo"
        ],
        "type": "Interdisciplinares",
        "disabled": false,
        "courseCategory": [
            "BC&H - Bacharelado em Ciências e Humanidades (OBR)",
            "BC&H - Bacharelado em Ciências e Humanidades (OL)"
        ],
        "isOptativaLivre": true,
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-blue-100",
                "textColor": "text-black-900"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-gray-200",
                "textColor": "text-gray-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-red-200",
                "textColor": "text-red-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-red-400",
                "textColor": "text-red-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [],
            "LIVRES_QUARTERS": [],
            "HUMANITIES_QUARTERS": [],
            "OPTATIVAS_LIVRES_QUARTERS": [5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9]
        }
    },
    {
        "id": "LCH",
        "name": "Licenciatura em Ciências Humanas",
        "campus": [
            "São Bernardo do Campo"
        ],
        "type": "Interdisciplinares",
        "disabled": false,
        "courseCategory": [
            "LCH - Licenciatura em Ciências Humanas (OBR)",
            "LCH - Licenciatura em Ciências Humanas (OL)"
        ],
        "isOptativaLivre": true,
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-blue-100",
                "textColor": "text-black-900"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-gray-200",
                "textColor": "text-gray-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-yellow-200",
                "textColor": "text-yellow-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-red-200",
                "textColor": "text-red-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [],
            "LIVRES_QUARTERS": [],
            "HUMANITIES_QUARTERS": [],
            "OPTATIVAS_LIVRES_QUARTERS": []
        }
    },
    {
        "id": "LCNE",
        "name": "Licenciatura em Ciências Naturais e Exatas",
        "campus": [
            "Santo André"
        ],
        "type": "Interdisciplinares",
        "disabled": false,
        "courseCategory": [
            "LCNE - Licenciatura em Ciências Naturais e Exatas (OBR)",
            "LCNE - Licenciatura em Ciências Naturais e Exatas (OL)"
        ],
        "isOptativaLivre": true,
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-gray-100",
                "textColor": "text-black-900"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-gray-200",
                "textColor": "text-gray-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-yellow-50",
                "textColor": "text-black"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-yellow-50",
                "textColor": "text-black"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [],
            "LIVRES_QUARTERS": [],
            "HUMANITIES_QUARTERS": [],
            "OPTATIVAS_LIVRES_QUARTERS": [3, 3, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12]
        }
    },
    {
        "isOptativaLivre": false,
        "id": "BCC",
        "name": "Bacharelado em Ciências da Computação",
        "campus": [
            "Santo André"
        ],
        "type": "Bacharelados",
        "disabled": false,
        "courseCategory": [
            "BC&T - Bacharelado em Ciência e Tecnologia (OBR)",
            "BCC - Bacharelado em Ciências da Computação (OBR)",
            "BCC - Bacharelado em Ciências da Computação (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-blue-100",
                "textColor": "text-black-900"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-gray-200",
                "textColor": "text-gray-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-yellow-200",
                "textColor": "text-yellow-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-red-200",
                "textColor": "text-red-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [
                8,
                9,
                10,
                11,
                12,
                13
            ],
            "LIVRES_QUARTERS": [
                5,
                10,
                14,
                15
            ],
            "HUMANITIES_QUARTERS": [
                1,
                5,
                6
            ],
            "OPTATIVAS_LIVRES_QUARTERS": []
        }
    },
    {
        "isOptativaLivre": true,
        "id": "BBT",
        "name": "Bacharelado em Biotecnologia",
        "campus": [
            "Santo André"
        ],
        "type": "Bacharelados",
        "disabled": false,
        "courseCategory": [
            "BC&T - Bacharelado em Ciência e Tecnologia (OBR)",
            "BBT - Bacharelado em Biotecnologia (OBR)",
            "BBT - Bacharelado em Biotecnologia (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-blue-200",
                "textColor": "text-white-800"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-gray-100",
                "textColor": "text-white-900"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-purple-200",
                "textColor": "text-purple-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-purple-200",
                "textColor": "text-purple-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [],
            "LIVRES_QUARTERS": [],
            "HUMANITIES_QUARTERS": [
                1,
                5,
                6
            ],
            "OPTATIVAS_LIVRES_QUARTERS": [
                7,
                8,
                9,
                11,
                11,
                12,
                13,
                13
            ]
        }
    },
    {
        "isOptativaLivre": true,
        "id": "EAU",
        "name": "Engenharia Ambiental e Urbana",
        "campus": [
            "Santo André"
        ],
        "type": "Engenharias",
        "disabled": false,
        "courseCategory": [
            "BC&T - Bacharelado em Ciência e Tecnologia (OBR)",
            "EAU - Engenharia Ambiental e Urbana (OBR)",
            "EAU - Engenharia Ambiental e Urbana (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-orange-200",
                "textColor": "text-orange-800"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-yellow-200",
                "textColor": "text-yellow-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-pink-100",
                "textColor": "text-pink-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-gray-200",
                "textColor": "text-gray-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [],
            "LIVRES_QUARTERS": [],
            "HUMANITIES_QUARTERS": [
                1,
                5,
                6
            ],
            "OPTATIVAS_LIVRES_QUARTERS": [8, 10, 11, 12, 13, 14]
        }
    },
    {
        "isOptativaLivre": false,
        "id": "LM",
        "name": "Licenciatura em Matemática",
        "campus": [
            "Santo André"
        ],
        "type": "Licenciaturas",
        "disabled": false,
        "courseCategory": [
            "LCNE - Licenciatura em Ciências Naturais e Exatas (OBR)",
            "LM - Licenciatura em Matemática (OBR)",
            "LM - Licenciatura em Matemática (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-purple-200",
                "textColor": "text-white-800"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-blue-200",
                "textColor": "text-blue-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-orange-200",
                "textColor": "text-orange-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-gray-100",
                "textColor": "text-green-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [
                3,
                4,
                5,
                6,
                6,
                7,
                8,
                8,
                9,
                10,
                11,
                11,
                12,
                12
            ],
            "LIVRES_QUARTERS": [
                3,
                8,
                10,
                11
            ],
            "HUMANITIES_QUARTERS": [],
            "OPTATIVAS_LIVRES_QUARTERS": []
        }
    },
    {
        "isOptativaLivre": false,
        "id": "BCD",
        "name": "Bacharelado em Ciência de Dados",
        "campus": [
            "Santo André"
        ],
        "type": "Bacharelados",
        "disabled": false,
        "courseCategory": [
            "BC&T - Bacharelado em Ciência e Tecnologia (OBR)",
            "BCD - Bacharelado em Ciência de Dados (OBR)",
            "BCD - Bacharelado em Ciência de Dados (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-blue-100",
                "textColor": "text-white-800"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-gray-200",
                "textColor": "text-gray-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-purple-200",
                "textColor": "text-purple-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-green-200",
                "textColor": "text-green-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [
                10,
                10,
                11,
                11,
                12,
                12
            ],
            "LIVRES_QUARTERS": [
                3,
                7,
                8,
                9
            ],
            "HUMANITIES_QUARTERS": [
                1,
                5,
                6
            ],
            "OPTATIVAS_LIVRES_QUARTERS": []
        }
    },
    {
        "isOptativaLivre": true,
        "id": "EENE",
        "name": "Engenharia de Energia",
        "campus": [
            "Santo André"
        ],
        "type": "Engenharias",
        "disabled": false,
        "courseCategory": [
            "BC&T - Bacharelado em Ciência e Tecnologia (OBR)",
            "EENE - Engenharia de Energia (OBR)",
            "EENE - Engenharia de Energia (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-orange-200",
                "textColor": "text-orange-800"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-yellow-200",
                "textColor": "text-yellow-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-red-100",
                "textColor": "text-red-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-red-100",
                "textColor": "text-red-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [],
            "LIVRES_QUARTERS": [],
            "HUMANITIES_QUARTERS": [
                1,
                5,
                6
            ],
            "OPTATIVAS_LIVRES_QUARTERS": [3, 6, 6, 7, 8, 9, 15, 15, 15]
        }
    },
    {
        "isOptativaLivre": true,
        "id": "BFIS",
        "name": "Bacharelado em Física",
        "campus": [
            "Santo André"
        ],
        "type": "Bacharelados",
        "disabled": false,
        "courseCategory": [
            "BC&T - Bacharelado em Ciência e Tecnologia (OBR)",
            "BFIS - Bacharelado em Física (OBR)",
            "BFIS - Bacharelado em Física (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-green-200",
                "textColor": "text-white-800"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-yellow-200",
                "textColor": "text-white-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-blue-200",
                "textColor": "text-blue-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-blue-200",
                "textColor": "text-blue-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [],
            "LIVRES_QUARTERS": [],
            "HUMANITIES_QUARTERS": [
                1,
                6,
                7
            ],
            "OPTATIVAS_LIVRES_QUARTERS": [
                7,
                8,
                9,
                9,
                10,
                10,
                10,
                11,
                11,
                11,
                12
            ]
        }
    },
    {
        "isOptativaLivre": true,
        "id": "EMAT",
        "name": "Engenharia de Materiais",
        "campus": [
            "Santo André"
        ],
        "type": "Engenharias",
        "disabled": false,
        "courseCategory": [
            "BC&T - Bacharelado em Ciência e Tecnologia (OBR)",
            "EMAT - Engenharia de Materiais (OBR)",
            "EMAT - Engenharia de Materiais (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-orange-200",
                "textColor": "text-orange-800"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-yellow-200",
                "textColor": "text-yellow-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-red-100",
                "textColor": "text-red-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-red-100",
                "textColor": "text-red-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [],
            "LIVRES_QUARTERS": [],
            "HUMANITIES_QUARTERS": [
                1,
                5,
                6
            ],
            "OPTATIVAS_LIVRES_QUARTERS": [4, 6, 7, 9, 12, 12, 13, 14, 14, 14, 15, 15, 15, 15]
        }
    },
    {
        "isOptativaLivre": true,
        "id": "LCB",
        "name": "Licenciatura em Ciências Biológicas",
        "campus": [
            "Santo André"
        ],
        "type": "Licenciaturas",
        "disabled": false,
        "courseCategory": [
            "LCNE - Licenciatura em Ciências Naturais e Exatas (OBR)",
            "LCB - Licenciatura em Ciências Biológicas (OBR)",
            "LCB - Licenciatura em Ciências Biológicas (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-blue-200",
                "textColor": "text-white-800"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-green-100",
                "textColor": "text-white-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-pink-100",
                "textColor": "text-pink-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-pink-100",
                "textColor": "text-pink-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [],
            "LIVRES_QUARTERS": [],
            "HUMANITIES_QUARTERS": [
                1,
                2,
                3
            ],
            "OPTATIVAS_LIVRES_QUARTERS": [
                3,
                3,
                4,
                6,
                7,
                7,
                8,
                9,
                10,
                10,
                11,
                12
            ]
        }
    },
    {
        "isOptativaLivre": false,
        "id": "BCE",
        "name": "Bacharelado em Ciências Econômicas",
        "campus": [
            "São Bernardo do Campo"
        ],
        "type": "Bacharelados",
        "disabled": false,
        "courseCategory": [
            "BC&H - Bacharelado em Ciências e Humanidades (OBR)",
            "BCE - Bacharelado em Ciências Econômicas (OBR)",
            "BCE - Bacharelado em Ciências Econômicas (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-orange-300",
                "textColor": "text-yellow-800"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-blue-200",
                "textColor": "text-white-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-pink-100",
                "textColor": "text-pink-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-gray-200",
                "textColor": "text-gray-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [
                7,
                8,
                11,
                11,
                12
            ],
            "LIVRES_QUARTERS": [
                5,
                5,
                6,
                6
            ],
            "HUMANITIES_QUARTERS": [],
            "OPTATIVAS_LIVRES_QUARTERS": []
        }
    },
    {
        "isOptativaLivre": false,
        "id": "LQ",
        "name": "Licenciatura em Química",
        "campus": [
            "Santo André"
        ],
        "type": "Licenciaturas",
        "disabled": false,
        "courseCategory": [
            "LCNE - Licenciatura em Ciências Naturais e Exatas (OBR)",
            "LQ - Licenciatura em Química (OBR)",
            "LQ - Licenciatura em Química (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-blue-200",
                "textColor": "text-white-800"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-gray-200",
                "textColor": "text-gray-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-yellow-200",
                "textColor": "text-yellow-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-red-200",
                "textColor": "text-red-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [],
            "LIVRES_QUARTERS": [],
            "HUMANITIES_QUARTERS": [],
            "OPTATIVAS_LIVRES_QUARTERS": []
        }
    },
    {
        "isOptativaLivre": true,
        "id": "BCB",
        "name": "Bacharelado em Ciências Biológicas",
        "campus": [
            "Santo André"
        ],
        "type": "Bacharelados",
        "disabled": false,
        "courseCategory": [
            "BC&T - Bacharelado em Ciência e Tecnologia (OBR)",
            "BCB - Bacharelado em Ciências Biológicas (OBR)",
            "BCB - Bacharelado em Ciências Biológicas (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-blue-200",
                "textColor": "text-white-800"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-gray-200",
                "textColor": "text-gray-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-pink-100",
                "textColor": "text-pink-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-pink-100",
                "textColor": "text-pink-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [],
            "LIVRES_QUARTERS": [],
            "HUMANITIES_QUARTERS": [
                1,
                2,
                3
            ],
            "OPTATIVAS_LIVRES_QUARTERS": [
                2,
                3,
                4,
                6,
                7,
                8,
                9,
                10,
                11,
                11,
                12,
                12,
                12,
                13,
                13,
                13,
                13,
                14,
                14,
                14,
                14
            ]
        }
    },
    {
        "isOptativaLivre": false,
        "id": "LH",
        "name": "Licenciatura em História",
        "campus": [
            "São Bernardo do Campo"
        ],
        "type": "Licenciaturas",
        "disabled": false,
        "courseCategory": [
            "LCH - Licenciatura em Ciências Humanas (OBR)",
            "LH - Licenciatura em História (OBR)",
            "LH - Licenciatura em História (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-blue-200",
                "textColor": "text-white-800"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-gray-200",
                "textColor": "text-gray-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-yellow-200",
                "textColor": "text-yellow-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-red-200",
                "textColor": "text-red-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [],
            "LIVRES_QUARTERS": [],
            "HUMANITIES_QUARTERS": [],
            "OPTATIVAS_LIVRES_QUARTERS": []
        }
    },
    {
        "isOptativaLivre": false,
        "id": "BFIL",
        "name": "Bacharelado em Filosofia",
        "campus": [
            "São Bernardo do Campo"
        ],
        "type": "Bacharelados",
        "disabled": false,
        "courseCategory": [
            "BC&H - Bacharelado em Ciências e Humanidades (OBR)",
            "BFIL - Bacharelado em Filosofia (OBR)",
            "BFIL - Bacharelado em Filosofia (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-blue-200",
                "textColor": "text-white-800"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-gray-200",
                "textColor": "text-gray-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-yellow-200",
                "textColor": "text-yellow-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-red-200",
                "textColor": "text-red-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [],
            "LIVRES_QUARTERS": [],
            "HUMANITIES_QUARTERS": [],
            "OPTATIVAS_LIVRES_QUARTERS": []
        }
    },
    {
        "isOptativaLivre": false,
        "id": "BRI",
        "name": "Bacharelado em Relações Internacionais",
        "campus": [
            "São Bernardo do Campo"
        ],
        "type": "Bacharelados",
        "disabled": false,
        "courseCategory": [
            "BC&H - Bacharelado em Ciências e Humanidades (OBR)",
            "BRI - Bacharelado em Relações Internacionais (OBR)",
            "BRI - Bacharelado em Relações Internacionais (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-red-100",
                "textColor": "text-red-800"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-blue-200",
                "textColor": "text-white-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-orange-200",
                "textColor": "text-orange-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-gray-200",
                "textColor": "text-gray-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [
                3,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                14,
                14
            ],
            "LIVRES_QUARTERS": [
                3,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                14,
                14
            ],
            "HUMANITIES_QUARTERS": [],
            "OPTATIVAS_LIVRES_QUARTERS": []
        }
    },
    {
        "isOptativaLivre": true,
        "id": "EAER",
        "name": "Engenharia Aeroespacial",
        "campus": [
            "São Bernardo do Campo"
        ],
        "type": "Engenharias",
        "disabled": false,
        "courseCategory": [
            "BC&T - Bacharelado em Ciência e Tecnologia (OBR)",
            "EAER - Engenharia Aeroespacial (OBR)",
            "EAER - Engenharia Aeroespacial (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-green-500  ",
                "textColor": "text-white-900"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-gray-200",
                "textColor": "text-gray-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-yellow-200",
                "textColor": "text-yellow-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-red-200",
                "textColor": "text-red-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [
                3,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                14,
                14
            ],
            "LIVRES_QUARTERS": [
                3,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                14,
                14
            ],
            "HUMANITIES_QUARTERS": [
                1,
                5,
                6
            ],
            "OPTATIVAS_LIVRES_QUARTERS": []
        }
    },
    {
        "id": "BQ",
        "name": "Bacharelado em Química",
        "campus": [
            "Santo André"
        ],
        "type": "Bacharelados",
        "disabled": false,
        "courseCategory": [
            "BC&T - Bacharelado em Ciência e Tecnologia (OBR)",
            "BQ - Bacharelado em Química (OBR)",
            "BQ - Bacharelado em Química (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-orange-300",
                "textColor": "text-orange-800"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-cyan-100",
                "textColor": "text-cyan-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-yellow-200",
                "textColor": "text-yellow-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-red-200",
                "textColor": "text-cyan-600"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [
                3,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                14,
                14
            ],
            "LIVRES_QUARTERS": [
                3,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                14,
                14
            ],
            "HUMANITIES_QUARTERS": [
                1,
                5,
                6
            ],
            "OPTATIVAS_LIVRES_QUARTERS": []
        },
        "isOptativaLivre": false
    },
    {
        "id": "BPT",
        "name": "Bacharelado em Planejamento Territorial",
        "campus": [
            "São Bernardo do Campo"
        ],
        "type": "Bacharelados",
        "disabled": false,
        "courseCategory": [
            "BC&H - Bacharelado em Ciências e Humanidades (OBR)",
            "BPT - Bacharelado em Planejamento Territorial (OBR)",
            "BPT - Bacharelado em Planejamento Territorial (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-blue-200",
                "textColor": "text-white-800"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-gray-200",
                "textColor": "text-gray-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-yellow-200",
                "textColor": "text-yellow-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-red-200",
                "textColor": "text-red-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [
                3,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                14,
                14
            ],
            "LIVRES_QUARTERS": [
                3,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                14,
                14
            ],
            "HUMANITIES_QUARTERS": [],
            "OPTATIVAS_LIVRES_QUARTERS": []
        },
        "isOptativaLivre": false
    },
    {
        "id": "EBIO",
        "name": "Engenharia Biomédica",
        "campus": [
            "São Bernardo do Campo"
        ],
        "type": "Engenharias",
        "disabled": false,
        "courseCategory": [
            "BC&T - Bacharelado em Ciência e Tecnologia (OBR)",
            "EBIO - Engenharia Biomédica (OBR)",
            "EBIO - Engenharia Biomédica (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-orange-200",
                "textColor": "text-orange-800"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-yellow-200",
                "textColor": "text-yellow-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-red-100",
                "textColor": "text-red-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-red-100",
                "textColor": "text-red-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [
                3,
                7,
                9,
                10,
                11,
                12,
                14,
                14
            ],
            "LIVRES_QUARTERS": [
                4,
                7,
                9,
                10,
                11,
                12,
                14,
                14
            ],
            "HUMANITIES_QUARTERS": [
                1,
                5,
                6
            ],
            "OPTATIVAS_LIVRES_QUARTERS": []
        },
        "isOptativaLivre": false
    },
    {
        "id": "EIAR",
        "name": "Engenharia de Instrumentação, Automação e Robótica",
        "campus": [
            "Santo André"
        ],
        "type": "Engenharias",
        "disabled": false,
        "courseCategory": [
            "BC&T - Bacharelado em Ciência e Tecnologia (OBR)",
            "EIAR - Engenharia de Instrumentação, Automação e Robótica (OBR)",
            "EIAR - Engenharia de Instrumentação, Automação e Robótica (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-orange-200",
                "textColor": "text-orange-800"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-gray-200",
                "textColor": "text-gray-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-yellow-200",
                "textColor": "text-yellow-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-red-200",
                "textColor": "text-red-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [],
            "LIVRES_QUARTERS": [],
            "HUMANITIES_QUARTERS": [
                1,
                5,
                6
            ],
            "OPTATIVAS_LIVRES_QUARTERS": [3, 4, 8, 12, 13, 13, 13, 14, 14, 14]
        },
        "isOptativaLivre": true
    },
    {
        "id": "EGES",
        "name": "Engenharia de Gestão",
        "campus": [
            "São Bernardo do Campo"
        ],
        "type": "Engenharias",
        "disabled": false,
        "courseCategory": [
            "BC&T - Bacharelado em Ciência e Tecnologia (OBR)",
            "EGES - Engenharia de Gestão (OBR)",
            "EGES - Engenharia de Gestão (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-orange-200",
                "textColor": "text-orange-800"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-gray-200",
                "textColor": "text-gray-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-pink-100",
                "textColor": "text-pink-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-gray-200",
                "textColor": "text-gray-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [
                7,
                7,
                8,
                8,
                9,
                10,
                15
            ],
            "LIVRES_QUARTERS": [
                7,
                8,
                9,
                10
            ],
            "HUMANITIES_QUARTERS": [
                1,
                5,
                6
            ],
            "OPTATIVAS_LIVRES_QUARTERS": []
        },
        "isOptativaLivre": false
    },
    {
        "id": "EINF",
        "name": "Engenharia de Informação",
        "campus": [
            "Santo André"
        ],
        "type": "Engenharias",
        "disabled": false,
        "courseCategory": [
            "BC&T - Bacharelado em Ciência e Tecnologia (OBR)",
            "EINF - Engenharia de Informação (OBR)",
            "EINF - Engenharia de Informação (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-orange-200",
                "textColor": "text-orange-800"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-gray-200",
                "textColor": "text-gray-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-pink-200",
                "textColor": "text-pink-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-pink-200",
                "textColor": "text-pink-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [
                3,
                5,
                6,
                7,
                8,
                12,
                13,
                14,
                14,
                14
            ],
            "LIVRES_QUARTERS": [
                3,
                5,
                6,
                7,
                8,
                12,
                13,
                14,
                14,
                14
            ],
            "HUMANITIES_QUARTERS": [
                1,
                5,
                6
            ],
            "OPTATIVAS_LIVRES_QUARTERS": []
        },
        "isOptativaLivre": false
    },
    {
        "id": "LFIL",
        "name": "Licenciatura em Filosofia",
        "campus": [
            "São Bernardo do Campo"
        ],
        "type": "Licenciaturas",
        "disabled": false,
        "courseCategory": [
            "LCH - Licenciatura em Ciências Humanas (OBR)",
            "LFIL - Licenciatura em Filosofia (OBR)",
            "LFIL - Licenciatura em Filosofia (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-purple-200",
                "textColor": "text-white-800"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-blue-200",
                "textColor": "text-white-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-yellow-200",
                "textColor": "text-yellow-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-red-200",
                "textColor": "text-white-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [],
            "LIVRES_QUARTERS": [],
            "HUMANITIES_QUARTERS": [
                1,
                5,
                6
            ],
            "OPTATIVAS_LIVRES_QUARTERS": []
        },
        "isOptativaLivre": false
    },
    {
        "id": "LFIS",
        "name": "Licenciatura em Física",
        "campus": [
            "Santo André"
        ],
        "type": "Licenciaturas",
        "disabled": false,
        "courseCategory": [
            "LCNE - Licenciatura em Ciências Naturais e Exatas (OBR)",
            "LFIS - Licenciatura em Física (OBR)",
            "LFIS - Licenciatura em Física (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-blue-200",
                "textColor": "text-white-800"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-gray-200",
                "textColor": "text-gray-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-yellow-200",
                "textColor": "text-yellow-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-red-200",
                "textColor": "text-red-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "isOptativaLivre": false,
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [],
            "LIVRES_QUARTERS": [],
            "HUMANITIES_QUARTERS": [],
            "OPTATIVAS_LIVRES_QUARTERS": []
        }
    },
    {
        "isOptativaLivre": false,
        "id": "BPP",
        "name": "Bacharelado em Políticas Públicas",
        "campus": [
            "São Bernardo do Campo"
        ],
        "type": "Bacharelados",
        "disabled": false,
        "courseCategory": [
            "BC&H - Bacharelado em Ciências e Humanidades (OBR)",
            "BPP - Bacharelado em Políticas Públicas (OBR)",
            "BPP - Bacharelado em Políticas Públicas (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-blue-200",
                "textColor": "text-white-800"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-red-100",
                "textColor": "text-red-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-yellow-200",
                "textColor": "text-yellow-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-red-200",
                "textColor": "text-red-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12
            ],
            "LIVRES_QUARTERS": [
                3,
                4,
                6,
                7,
                8,
                12,
                13,
                14,
                14,
                14
            ],
            "HUMANITIES_QUARTERS": [],
            "OPTATIVAS_LIVRES_QUARTERS": []
        }
    },
    {
        "id": "BN",
        "name": "Bacharelado em Neurociência",
        "campus": [
            "São Bernardo do Campo"
        ],
        "type": "Bacharelados",
        "disabled": false,
        "courseCategory": [
            "BC&T - Bacharelado em Ciência e Tecnologia (OBR)",
            "BN - Bacharelado em Neurociência (OBR)",
            "BN - Bacharelado em Neurociência (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-green-400",
                "textColor": "text-white-900"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-yellow-200",
                "textColor": "text-yellow-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-blue-200",
                "textColor": "text-white-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-blue-200",
                "textColor": "text-white-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [
                3,
                4,
                6,
                7,
                8,
                12,
                13,
                14,
                14,
                14
            ],
            "LIVRES_QUARTERS": [
                3,
                4,
                6,
                7,
                8,
                12,
                13,
                14,
                14,
                14
            ],
            "HUMANITIES_QUARTERS": [
                1,
                5,
                6
            ],
            "OPTATIVAS_LIVRES_QUARTERS": []
        },
        "isOptativaLivre": false
    },
    {
        "isOptativaLivre": false,
        "id": "BM",
        "name": "Bacharelado em Matemática",
        "campus": [
            "Santo André"
        ],
        "type": "Bacharelados",
        "disabled": false,
        "courseCategory": [
            "BC&T - Bacharelado em Ciência e Tecnologia (OBR)",
            "BM - Bacharelado em Matemática (OBR)",
            "BM - Bacharelado em Matemática (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-blue-200",
                "textColor": "text-white-800"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-gray-200",
                "textColor": "text-gray-800"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-purple-200",
                "textColor": "text-purple-800"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-green-200",
                "textColor": "text-green-800"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500",
                "textColor": "text-white-900"
            }
        ],
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [
                10,
                10,
                11,
                11,
                12
            ],
            "LIVRES_QUARTERS": [
                7,
                9,
                12
            ],
            "HUMANITIES_QUARTERS": [
                1,
                5,
                6
            ],
            "OPTATIVAS_LIVRES_QUARTERS": []
        }
    },
    {
        "id": "LEC",
        "name": "Licenciatura em Educação do Campo",
        "campus": [
            "São Bernardo do Campo"
        ],
        "type": "Licenciaturas",
        "disabled": true,
        "courseCategory": [
            "BC&T - Bacharelado em Ciência e Tecnologia (OBR)",
            "LEC - Licenciatura em Educação do Campo (OBR)",
            "LEC - Licenciatura em Educação do Campo (OL)"
        ],
        "course_color": [
            {
                "id": 1,
                "name": "Obrigatória",
                "bgColor": "bg-blue-200"
            },
            {
                "id": 2,
                "name": "Obrigatórias Ingresso",
                "bgColor": "bg-gray-200"
            },
            {
                "id": 3,
                "name": "Optativa",
                "bgColor": "bg-yellow-200"
            },
            {
                "id": 4,
                "name": "Livre",
                "bgColor": "bg-red-200"
            },
            {
                "id": 5,
                "name": "Concluída",
                "bgColor": "bg-green-500"
            }
        ],
        "isOptativaLivre": false,
        "quarter_categories": {
            "OPTATIVES_QUARTERS": [],
            "LIVRES_QUARTERS": [],
            "HUMANITIES_QUARTERS": [],
            "OPTATIVAS_LIVRES_QUARTERS": []
        }
    }
]