/* Datos de planta — recuperación de merma */
const PRODUCTS = {

  despedradora: {
    key: 'despedradora',
    accent: '#00897B',
    tag: 'Etapa 01 · Despedradora',
    name: 'Nibs raw de despedradora',
    tile: {
      num: '01',
      title: 'Nibs raw de despedradora',
      desc: 'Muestreo en caída de despedradora 1 y 2. Recuperación mediante limpieza programada en Bühler.',
      stat1: { val: '736 kg', lbl: 'Merma / 7 días' },
      stat2: { val: '$42.4K', lbl: 'Impacto anual' }
    },
    slides: [
      {
        kind: 'hero',
        kicker: 'Punto de muestreo',
        title: 'Recuperación de nibs en la etapa de despedradora',
        sub: 'Muestreo de la caída en ductos de despedradora 1 y 2. Se evalúa la pérdida de nibs por turno y la viabilidad de recuperarlos mediante limpieza programada en el equipo Bühler.',
        chips: [
          { txt: 'Caída despedradora 1 y 2 (ducto)' },
          { txt: '26 feb – 01 mar 2026' },
          { txt: '2 turnos de proceso' }
        ]
      },
      {
        kind: 'kpis',
        title: 'Resumen del proyecto',
        kicker: 'Cifras clave',
        imageKey: 'despedradora',
        imageCaption: 'Registro de muestreo — Nibs raw de despedradora',
        items: [
          { label: 'Pérdida estimada por día', val: 90, unit: 'kg / 24h', foot: 'Turno 1 (50 kg) + Turno 2 (40 kg) · 26 feb 2026' },
          { label: 'Merma total acumulada', val: 736, unit: 'kg', foot: 'Periodo de acumulación: 7 días' },
          { label: 'Recuperación proyectada', val: 8832, unit: 'kg / año', foot: 'A precio de nibs estándar $4.8/kg' },
          { label: 'Impacto económico anual', val: 42393.6, prefix: '$', unit: '', foot: 'Proyección con base en la merma de 7 días' }
        ]
      },
      {
        kind: 'chart',
        title: 'Muestreo de pérdida por turno',
        kicker: 'Evolución',
        sub: 'Kilogramos de nibs perdidos en la caída de despedradora, por turno de proceso.',
        chartType: 'grouped-bar',
        labels: ['26 feb', '27 feb', '28 feb', '01 mar'],
        datasets: [
          { label: 'Turno 1 (kg)', data: [50, 34, 25, 35], color: '#00897B' },
          { label: 'Turno 2 (kg)', data: [40, 45, 48, 43], color: '#F9A825' }
        ]
      },
      {
        kind: 'twocol',
        title: 'Ideas y hallazgos',
        kicker: 'Detalle técnico',
        left: {
          title: 'Ideas planteadas',
          sub: 'Para reprocesar los nibs',
          items: [
            { text: 'Limpieza programada en Bühler', status: 'Idea aprobada · ejecución 26-02-2026' },
            { text: 'Incorporar la caída a la descascarilladora', status: 'Alternativa evaluada, sin fecha de ejecución' }
          ]
        },
        right: {
          title: 'Condiciones del muestreo',
          sub: 'Precio y proyección',
          items: [
            { text: 'Precio de referencia del kg de nibs', status: '$9.00 durante el muestreo de febrero' },
            { text: 'Monto recuperado en los 2 turnos', status: '$810 + $711 = $1,521' },
            { text: 'Segundo bloque (28 feb – 01 mar)', status: 'T1: 25 y 35 kg · T2: 48 y 43 kg' }
          ]
        }
      },
      {
        kind: 'table',
        title: 'Registro de muestreo',
        kicker: 'Historial',
        sub: 'Kilogramos de nibs perdidos por turno, fecha por fecha.',
        headers: ['Fecha', 'Turno 1 (kg)', 'Turno 2 (kg)', 'Total día (kg)', 'Observación'],
        rows: [
          ['26 feb 2026', '50', '40', '90', 'Estimado · limpieza Bühler'],
          ['27 feb 2026', '34', '45', '79', 'Estimado · descascarilladora'],
          ['28 feb 2026', '25', '48', '73', '—'],
          ['01 mar 2026', '35', '43', '78', '—']
        ],
        totals: ['7 días', '—', '—', '736 kg', 'Merma total obtenida']
      },
      {
        kind: 'triad',
        title: 'Impacto en el proceso',
        kicker: 'Evaluación',
        sub: 'La merma generada en la despedradora contiene un volumen significativo de nibs recuperables, con alto impacto económico anual.',
        cols: [
          {
            title: 'Eficiencia productiva',
            items: [
              'Recuperación de nibs que antes se gestionaban como pérdida.',
              'Incremento del rendimiento global sin modificar capacidad instalada.',
              'Mejor aprovechamiento de la materia prima procesada.'
            ]
          },
          {
            title: 'Operación continua',
            items: [
              'La recuperación se realiza dentro del flujo operativo normal.',
              'No genera paradas de línea ni afecta la productividad.',
              'Uso controlado de recursos sin equipos adicionales complejos.'
            ]
          },
          {
            title: 'Calidad e inocuidad',
            items: [
              'Los nibs provienen de una etapa crítica de separación.',
              'Se mantiene la trazabilidad y segregación del material.',
              'Pasa por etapa posterior de reducción de carga microbiológica.'
            ]
          }
        ]
      },
      {
        kind: 'conclusion',
        tag: 'Conclusión',
        text: 'El piloto de laboratorio confirma que la merma del tamizador de licor es recuperable: 30% de pasta de cacao, con 35% de grasa y baja acidez (1.69%). El proyecto queda a la espera de la entrega del derretidor y del traslado de la concha de piedra para pasar de piloto a operación en planta.',
        chips: [
          { lbl: 'Merma promedio', val: '200 kg/día' },
          { lbl: 'Recuperación piloto', val: '30%' },
          { lbl: 'Proyección anual (real)', val: '$23,506' }
        ]
      }
    ]
  },

  tostador: {
    key: 'tostador',
    accent: '#F9A825',
    tag: 'Etapa 02 · Tostador',
    name: 'Reducción merma NIBS',
    tile: {
      num: '02',
      title: 'Reducción merma NIBS',
      desc: 'Acopio semanal de merma de limpieza del tostador. Recuperación en Bühler con 9 ciclos evaluados y propuestas de mejora.',
      stat1: { val: '46.3%', lbl: 'Recuperación global' },
      stat2: { val: '$100.8K', lbl: 'Proyección anual' }
    },
    slides: [
      {
        kind: 'hero',
        kicker: 'Punto de recuperación',
        title: 'Reducción merma NIBS',
        sub: 'Evaluación de la merma generada durante la limpieza del tostador. Se cuantifica el impacto económico y se proponen mejoras al método actual (Bühler).',
        chips: [
          { txt: 'Limpieza de tostador' },
          { txt: 'Nov 2025 – May 2026' },
          { txt: '9 ciclos evaluados' }
        ]
      },
      {
        kind: 'kpis',
        title: 'Resumen del proyecto',
        kicker: 'Cifras clave',
        imageKey: 'tostador',
        imageCaption: 'Ciclos de recuperación — Reducción merma NIBS',
        items: [
          { label: 'Ciclos de recuperación', val: 9, unit: '', foot: 'Desde nov 2025 hasta may 2026' },
          { label: 'Merma total procesada', val: 9396, unit: 'kg', foot: 'Suma de los 9 ciclos registrados' },
          { label: 'Nibs recuperados (global)', val: 4345.5, unit: 'kg', foot: 'Eficiencia global 46.3%' },
          { label: 'Proyección anual', val: 100800, prefix: '$', unit: '', foot: 'Con base en el ciclo de mayo 2026' }
        ]
      },
      {
        kind: 'chart',
        title: 'Evolución de recuperación por ciclo',
        kicker: 'Historial',
        sub: 'Kilogramos de merma vs. nibs recuperados y % de recuperación en cada ciclo.',
        chartType: 'combo',
        labels: ['07-10 nov', '16 nov', '23 nov', '29 nov', '10 dic', '18 dic', '29 dic', '27 feb', '04 may'],
        datasets: [
          { label: 'Merma (kg)', data: [622.5, 480.3, 611.8, 576.8, 1206.7, 896.8, 894.9, 1026.6, 3080], color: '#BDBDBD', type: 'bar' },
          { label: 'Nibs recuperados (kg)', data: [75.9, 170.2, 251.5, 168.5, 443.6, 474, 405.8, 606, 1750], color: '#00897B', type: 'bar' },
          { label: '% Recuperación', data: [12.2, 35.4, 41.1, 29.2, 36.7, 52.9, 45.3, 59.0, 56.8], color: '#F9A825', type: 'line' }
        ]
      },
      {
        kind: 'table',
        title: 'Registro de ciclos de recuperación',
        kicker: 'Detalle',
        sub: 'Datos de cada ciclo de limpieza y recuperación en Bühler.',
        headers: ['Fecha', 'Merma (kg)', 'Nibs (kg)', '% Recup.', 'Precio $/kg', 'Monto $', 'Operarios'],
        rows: [
          ['07-10 nov 2025', '622.5', '75.9', '12.2%', '14', '1,062.6', '2'],
          ['16 nov 2025', '480.3', '170.2', '35.4%', '14', '2,382.8', '2'],
          ['23 nov 2025', '611.8', '251.5', '41.1%', '14', '3,521.0', '2'],
          ['29 nov 2025', '576.8', '168.5', '29.2%', '14', '2,359.0', '2'],
          ['10 dic 2025', '1,206.7', '443.6', '36.7%', '14', '6,210.4', '2'],
          ['18 dic 2025', '896.8', '474.0', '52.9%', '14', '6,636.0', '2'],
          ['29 dic 2025', '894.9', '405.8', '45.3%', '14', '5,681.2', '2'],
          ['27 feb 2026', '1,026.6', '606.0', '59.0%', '9', '5,454.0', '2'],
          ['04 may 2026', '3,080.0', '1,750.0', '56.8%', '4.8', '8,400.0', '2']
        ],
        totals: ['9 ciclos', '9,396.4', '4,345.5', '46.3%', '—', '41,707', '—']
      },
      {
        kind: 'conclusion',
        tag: 'Conclusión',
        text: 'La recuperación de la merma de limpieza del tostador es una oportunidad significativa. Integrar el proceso a la descascarilladora maximizaría el beneficio económico y la eficiencia global de la planta.',
        chips: [
          { lbl: 'Ciclos evaluados', val: '9' },
          { lbl: 'Recuperación global', val: '46.3%' },
          { lbl: 'Proyección anual', val: '$100,800' }
        ]
      }
    ]
  },

  licor: {
    key: 'licor',
    accent: '#6D4C41',
    tag: 'Etapa 03 · Molienda',
    name: 'Merma de tamizador de licor',
    tile: {
      num: '03',
      title: 'Merma de tamizador de licor',
      desc: 'Reprocesamiento de pasta de cacao vía derretidor. Piloto de laboratorio realizado con 30% de recuperación.',
      stat1: { val: '200 kg', lbl: 'Merma promedio / día' },
      stat2: { val: '30%', lbl: 'Recuperación piloto' }
    },
    slides: [
      {
        kind: 'hero',
        kicker: 'Punto de recuperación',
        title: 'Merma de tamizador de licor',
        sub: 'Seguimiento de la merma diaria generada en el molino de pines (tamizador de licor) y evaluación de alternativas para recuperar la pasta de cacao.',
        chips: [
          { txt: 'Molino de pines · línea de licor' },
          { txt: '01 de junio de 2026' },
          { txt: 'Turnos 1 y 2' }
        ]
      },
      {
        kind: 'kpis',
        title: 'Resumen del proyecto',
        kicker: 'Cifras clave',
        items: [
          { label: 'Merma promedio por día', val: 200, unit: 'kg', foot: 'Molino de pines · 01 de junio de 2026' },
          { label: 'Recuperación en piloto de laboratorio', val: 30, unit: '%', foot: '35% de grasa de cacao · 1.69% de acidez' },
          { label: 'Monto recuperado en el piloto', val: 1120, prefix: '$', unit: '', foot: 'Refinado en refinadora de laboratorio' },
          { label: 'Proyección anual (resultado real)', val: 23506, prefix: '$', unit: '', foot: 'A partir del resultado de laboratorio' }
        ]
      },
      {
        kind: 'conclusion',
        tag: 'Conclusión',
        text: 'El piloto de laboratorio confirma que la merma del tamizador de licor es recuperable: 30% de pasta de cacao, con 35% de grasa y baja acidez (1.69%). El proyecto queda a la espera de la entrega del derretidor y del traslado de la concha de piedra.',
        chips: [
          { lbl: 'Merma promedio', val: '200 kg/día' },
          { lbl: 'Recuperación piloto', val: '30%' },
          { lbl: 'Proyección anual (real)', val: '$23,506' }
        ]
      }
    ]
  },

  filtroPrensa: {
    key: 'filtroPrensa',
    accent: '#1565C0',
    tag: 'Etapa 04 · Filtro prensa',
    name: 'Licor de filtro prensa',
    tile: {
      num: '04',
      title: 'Licor de filtro prensa',
      desc: 'Recuperación acumulada de licor de filtro prensa. Resultados 2025 y 2026 valorizados a $8.7 por kg.',
      stat1: { val: '2,415.2 kg', lbl: 'Total recuperado' },
      stat2: { val: '$21.0K', lbl: 'Valor total' }
    },
    slides: [
      {
        kind: 'hero',
        kicker: 'Punto de recuperación',
        title: 'Licor de filtro prensa',
        sub: 'Consolidado de recuperación de licor de filtro prensa correspondiente a los periodos 2025 y 2026, valorizado a $8.7 por kilogramo.',
        chips: [
          { txt: 'Filtro prensa' },
          { txt: '2025 – 2026' },
          { txt: 'Precio $8.7 / kg' }
        ]
      },
      {
        kind: 'kpis',
        title: 'Resumen del proyecto',
        kicker: 'Cifras clave',
        items: [
          { label: 'Resultado 2025', val: 1002.8, unit: 'kg', foot: 'Recuperación del periodo 2025' },
          { label: 'Resultado 2026', val: 1412.4, unit: 'kg', foot: 'Recuperación del periodo 2026' },
          { label: 'Total general', val: 2415.2, unit: 'kg', foot: '1002.8 + 1412.4 kg' },
          { label: 'Valor total', val: 21012.24, prefix: '$', unit: '', foot: '2,415.2 kg × $8.7 / kg' }
        ]
      },
      {
        kind: 'chart',
        title: 'Recuperación por periodo',
        kicker: 'Comparativo',
        sub: 'Kilogramos de licor de filtro prensa recuperados en 2025 y 2026.',
        chartType: 'bar',
        labels: ['2025', '2026', 'Total'],
        datasets: [
          { label: 'Kg recuperados', data: [1002.8, 1412.4, 2415.2], color: '#1565C0' }
        ]
      },
      {
        kind: 'table',
        title: 'Detalle de recuperación',
        kicker: 'Historial',
        sub: 'Resultados por periodo y valorización.',
        headers: ['Periodo', 'Kg recuperados', 'Precio $/kg', 'Valor $'],
        rows: [
          ['2025', '1,002.8', '8.7', '8,724.36'],
          ['2026', '1,412.4', '8.7', '12,287.88']
        ],
        totals: ['Total general', '2,415.2', '8.7', '21,012.24']
      },
      {
        kind: 'conclusion',
        tag: 'Conclusión',
        text: 'La recuperación de licor de filtro prensa suma 2,415.2 kg entre 2025 y 2026, con un valor total de $21,012.24 a razón de $8.7 por kilogramo.',
        chips: [
          { lbl: 'Total kg', val: '2,415.2' },
          { lbl: 'Precio unitario', val: '$8.7 / kg' },
          { lbl: 'Valor total', val: '$21,012.24' }
        ]
      }
    ]
  },

  polvillo: {
    key: 'polvillo',
    accent: '#6A1B9A',
    tag: 'Etapa 05 · Polvillo de cocoa',
    name: 'Polvillo de cocoa',
    tile: {
      num: '05',
      title: 'Polvillo de cocoa',
      desc: 'Recuperación de merma de cocoa y torta trozada en proceso alcalino. Valorizado a $8.00 por kg.',
      stat1: { val: '425 kg', lbl: 'Ya recuperado' },
      stat2: { val: '4,300 kg', lbl: 'Pendiente' }
    },
    slides: [
      {
        kind: 'hero',
        kicker: 'Punto de recuperación',
        title: 'Polvillo de cocoa y torta trozada',
        sub: 'Recuperación de merma de cocoa y torta en proceso alcalino tipo 2. Resultados de proceso y proyección de material pendiente valorizado a $8.00 por kilogramo.',
        chips: [
          { txt: 'Proceso alcalino tipo 2' },
          { txt: 'Cocoa y torta trozada' },
          { txt: 'Precio $8.00 / kg' }
        ]
      },
      {
        kind: 'kpis',
        title: 'Resumen del proyecto',
        kicker: 'Cifras clave',
        imageKey: 'polvillo',
        imageCaption: 'Registro — Polvillo de cocoa y torta',
        items: [
          { label: 'Merma ya recuperada', val: 425, unit: 'kg', foot: 'Cocoa y torta — valor $3,400' },
          { label: 'Pendiente por recuperar', val: 4300, unit: 'kg', foot: '172 sacos × 25 kg — al 01/09/2026' },
          { label: 'Valor ya recuperado', val: 3400, prefix: '$', unit: '', foot: '425 kg × $8.00 / kg' },
          { label: 'Valor proyectado pendiente', val: 34400, prefix: '$', unit: '', foot: '4,300 kg × $8.00 / kg' }
        ]
      },
      {
        kind: 'conclusion',
        tag: 'Conclusión',
        text: 'Se han recuperado 425 kg de polvillo de cocoa y torta ($3,400). Quedan pendientes 4,300 kg (172 sacos) con un valor proyectado de $34,400 a $8.00 por kilogramo.',
        chips: [
          { lbl: 'Recuperado', val: '425 kg · $3,400' },
          { lbl: 'Pendiente', val: '4,300 kg · $34,400' },
          { lbl: 'Precio', val: '$8.00 / kg' }
        ]
      }
    ]
  },

  fajasPrensa: {
    key: 'fajasPrensa',
    accent: '#BF360C',
    tag: 'Etapa · Fajas de prensa',
    name: 'Licor de cacao prensa',
    tile: {
      num: '06',
      title: 'Licor de cacao prensa',
      desc: 'Recuperación de licor en fajas de prensa 1, 2 y 3. Idea: bandejas de acero inoxidable (pendiente de aprobación).',
      stat1: { val: '42 kg', lbl: 'Licor recuperado' },
      stat2: { val: '$386.4', lbl: 'Monto recuperado' }
    },
    slides: [
      {
        kind: 'hero',
        kicker: 'Punto de recuperación',
        title: 'Licor de cacao prensa',
        sub: 'Recuperación de licor de cacao en fajas de prensa 1, 2 y 3. Se evalúa colocar bandejas de acero inoxidable; por el momento se usan bolsas amarillas.',
        chips: [
          { txt: 'Fajas de prensa 1, 2 y 3' },
          { txt: '22 – 27 mar 2026' },
          { txt: 'Turnos 1 y 2 · 6 días' }
        ]
      },
      {
        kind: 'kpis',
        title: 'Resumen del proyecto',
        kicker: 'Cifras clave',
        imageKey: 'fajasPrensa',
        imageCaption: 'Licor recuperado en fajas de prensa — registro fotográfico',
        items: [
          { label: 'Kg de licor recuperado', val: 42, unit: 'kg', foot: 'Periodo 22–27 mar 2026 · 6 días' },
          { label: 'Precio licor de cacao', val: 9.2, prefix: '$', unit: '/ kg', foot: 'Precio de referencia del periodo' },
          { label: 'Monto recuperado', val: 386.4, prefix: '$', unit: '', foot: '42 kg × $9.2 / kg' },
          { label: 'Proyección recuperación anual', val: 23506, prefix: '$', unit: '', foot: 'Proyección con base en el resultado del periodo' }
        ]
      },
      {
        kind: 'table',
        title: 'Registro de recuperación',
        kicker: 'Detalle',
        sub: 'Datos de planta: fajas de prensa 1, 2 y 3.',
        headers: ['Punto', 'Fecha', 'Turno', 'Días', 'Kg licor', 'Precio $/kg', 'Monto $', 'Proy. anual $'],
        rows: [
          ['Fajas de prensa 1, 2 y 3', '22–27 mar 2026', '1 y 2', '6', '42', '9.2', '386.4', '23,506']
        ],
        totals: ['Total periodo', '—', '—', '6', '42', '9.2', '386.4', '23,506']
      },
      {
        kind: 'twocol',
        title: 'Ideas y estado',
        kicker: 'Detalle técnico',
        left: {
          title: 'Ideas planteadas',
          sub: 'Para reprocesar el licor',
          items: [
            { text: 'Colocar bandejas de acero inoxidable', status: 'Cantidad propuesta: 5' },
            { text: 'Uso actual de bolsas amarillas', status: 'Solución temporal en planta' }
          ]
        },
        right: {
          title: 'Estado de la idea',
          sub: 'Aprobación y ejecución',
          items: [
            { text: 'Estado de aprobación', status: 'Pendiente de aprobación' },
            { text: 'Fecha a ejecutar (referencial)', status: '22–27 mar 2026' },
            { text: 'Precio de referencia del licor', status: '$9.2 / kg' }
          ]
        }
      },
      {
        kind: 'evidence',
        title: 'Evidencia fotográfica',
        kicker: 'Soporte documental',
        sub: 'Registro del licor recuperado en fajas de prensa (bolsas amarillas).',
        imageKey: 'fajasPrensa',
        imageKey2: 'fajasPrensa2',
        caption: 'Licor de cacao recuperado — fajas de prensa 1, 2 y 3'
      },
      {
        kind: 'conclusion',
        tag: 'Conclusión',
        text: 'En 6 días se recuperaron 42 kg de licor de cacao en fajas de prensa 1, 2 y 3, por un monto de $386.4 ($9.2/kg). La proyección anual asciende a $23,506. Queda pendiente la aprobación de las bandejas de acero inoxidable.',
        chips: [
          { lbl: 'Kg recuperados', val: '42 kg' },
          { lbl: 'Monto', val: '$386.4' },
          { lbl: 'Proyección anual', val: '$23,506' }
        ]
      }
    ]
  }

};

const LINE_ORDER = ['despedradora', 'tostador', 'licor', 'filtroPrensa', 'polvillo', 'fajasPrensa'];
