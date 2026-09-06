/* Datos extraidos de los Excel */
const PRODUCTS = {
  despedradora: {
    key: 'despedradora',
    accent: '#00897B',
    tag: 'Etapa 01 \u00b7 Despedradora',
    name: 'Recuperacion de nibs \u2014 Despedradora',
    tile: {
      num: '01',
      title: 'Nibs raw en ductos de caida',
      desc: 'Muestreo en caida de despedradora 1 y 2. Recuperacion mediante limpieza programada en Buhler.',
      stat1: { val: '736 kg', lbl: 'Merma / 7 dias' },
      stat2: { val: '$42.4K', lbl: 'Impacto anual' }
    },
    slides: [
      {
        kind: 'hero',
        kicker: 'Punto de muestreo',
        title: 'Recuperacion de nibs en la etapa de despedradora',
        sub: 'Muestreo de la caida en ductos de despedradora 1 y 2. Se evalua la perdida de nibs por turno y la viabilidad de recuperarlos mediante limpieza programada en el equipo Buhler.',
        chips: [
          { txt: 'Caida despedradora 1 y 2 (ducto)' },
          { txt: '26 feb \u2013 01 mar 2026' },
          { txt: '2 turnos de proceso' }
        ]
      },
      {
        kind: 'kpis',
        title: 'Resumen del proyecto',
        kicker: 'Cifras clave',
        items: [
          { label: 'Perdida estimada por dia', val: 90, unit: 'kg / 24h', foot: 'Turno 1 (50 kg) + Turno 2 (40 kg) \u00b7 26 feb 2026' },
          { label: 'Merma total acumulada', val: 736, unit: 'kg', foot: 'Periodo de acumulacion: 7 dias' },
          { label: 'Recuperacion proyectada', val: 8832, unit: 'kg / ano', foot: 'A precio de nibs estandar $4.8/kg' },
          { label: 'Impacto economico anual', val: 42393.6, prefix: '$', unit: '', foot: 'Proyeccion con base en la merma de 7 dias' }
        ]
      },
      {
        kind: 'chart',
        title: 'Muestreo de perdida por turno',
        kicker: 'Evolucion',
        sub: 'Kilogramos de nibs perdidos en la caida de despedradora, por turno de proceso.',
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
        kicker: 'Detalle tecnico',
        left: {
          title: 'Ideas planteadas',
          sub: 'Para reprocesar los nibs',
          items: [
            { text: 'Limpieza programada en Buhler', status: 'Idea aprobada \u00b7 ejecucion 26-02-2026' },
            { text: 'Incorporar la caida a la descascarilladora', status: 'Alternativa evaluada, sin fecha de ejecucion' }
          ]
        },
        right: {
          title: 'Condiciones del muestreo',
          sub: 'Precio y proyeccion',
          items: [
            { text: 'Precio de referencia del kg de nibs', status: '$9.00 durante el muestreo de febrero' },
            { text: 'Monto recuperado en los 2 turnos', status: '$810 + $711 = $1,521' },
            { text: 'Segundo bloque (28 feb \u2013 01 mar)', status: 'T1: 25 y 35 kg \u00b7 T2: 48 y 43 kg' }
          ]
        }
      },
      {
        kind: 'table',
        title: 'Registro de muestreo',
        kicker: 'Historial',
        sub: 'Kilogramos de nibs perdidos por turno, fecha por fecha.',
        headers: ['Fecha', 'Turno 1 (kg)', 'Turno 2 (kg)', 'Total dia (kg)', 'Observacion'],
        rows: [
          ['26 feb 2026', '50', '40', '90', 'Estimado \u00b7 limpieza Buhler'],
          ['27 feb 2026', '34', '45', '79', 'Estimado \u00b7 descascarilladora'],
          ['28 feb 2026', '25', '48', '73', '\u2014'],
          ['01 mar 2026', '35', '43', '78', '\u2014']
        ],
        totals: ['7 dias', '\u2014', '\u2014', '736 kg', 'Merma total obtenida']
      },
      {
        kind: 'triad',
        title: 'Impacto en el proceso',
        kicker: 'Evaluacion',
        sub: 'La merma generada en la despedradora contiene un volumen significativo de nibs recuperables, con alto impacto economico anual.',
        cols: [
          {
            title: 'Eficiencia productiva',
            items: [
              'Recuperacion de nibs que antes se gestionaban como perdida.',
              'Incremento del rendimiento global sin modificar capacidad instalada.',
              'Mejor aprovechamiento de la materia prima procesada.'
            ]
          },
          {
            title: 'Operacion continua',
            items: [
              'La recuperacion se realiza dentro del flujo operativo normal.',
              'No genera paradas de linea ni afecta la productividad.',
              'Uso controlado de recursos sin equipos adicionales complejos.'
            ]
          },
          {
            title: 'Calidad e inocuidad',
            items: [
              'Los nibs provienen de una etapa critica de separacion.',
              'Se mantiene la trazabilidad y segregacion del material.',
              'Pasa por etapa posterior de reduccion de carga microbiologica.'
            ]
          }
        ]
      },
      {
        kind: 'conclusion',
        tag: 'Conclusion',
        text: 'La recuperacion de nibs en la despedradora es tecnicamente viable, operativamente estable y economicamente rentable, con un impacto anual superior a los $42 mil.',
        chips: [
          { lbl: 'Merma evaluada', val: '736 kg / 7 dias' },
          { lbl: 'Recuperacion proyectada', val: '8,832 kg/ano' },
          { lbl: 'Impacto anual', val: '$42,393.6' }
        ]
      }
    ]
  },
  tostador: {
    key: 'tostador',
    accent: '#F9A825',
    tag: 'Etapa 02 \u00b7 Tostador',
    name: 'Reduccion de merma NIBS \u2014 Limpieza de tostador',
    tile: {
      num: '02',
      title: 'Merma de limpieza del tostador',
      desc: 'Acopio semanal de merma de limpieza. Recuperacion en Buhler con 9 ciclos evaluados y propuestas de mejora.',
      stat1: { val: '46.3%', lbl: 'Recuperacion global' },
      stat2: { val: '$100.8K', lbl: 'Proyeccion anual' }
    },
    slides: [
      {
        kind: 'hero',
        kicker: 'Punto de recuperacion',
        title: 'Recuperacion de merma de limpieza del tostador',
        sub: 'Evaluacion de la merma generada durante la limpieza del tostador (controladores de temperatura y tolva de descarga). Se cuantifica el impacto economico y se proponen mejoras al metodo actual (Buhler).',
        chips: [
          { txt: 'Limpieza de tostador' },
          { txt: 'Nov 2025 \u2013 May 2026' },
          { txt: '9 ciclos evaluados' }
        ]
      },
      {
        kind: 'kpis',
        title: 'Resumen del proyecto',
        kicker: 'Cifras clave',
        items: [
          { label: 'Ciclos de recuperacion', val: 9, unit: '', foot: 'Desde nov 2025 hasta may 2026' },
          { label: 'Merma total procesada', val: 9396, unit: 'kg', foot: 'Suma de los 9 ciclos registrados' },
          { label: 'Nibs recuperados (global)', val: 4345.5, unit: 'kg', foot: 'Eficiencia global 46.3%' },
          { label: 'Proyeccion anual', val: 100800, prefix: '$', unit: '', foot: 'Con base en el ciclo de mayo 2026' }
        ]
      },
      {
        kind: 'chart',
        title: 'Evolucion de recuperacion por ciclo',
        kicker: 'Historial',
        sub: 'Kilogramos de merma vs. nibs recuperados y % de recuperacion en cada ciclo.',
        chartType: 'combo',
        labels: ['07-10 nov', '16 nov', '23 nov', '29 nov', '10 dic', '18 dic', '29 dic', '27 feb', '04 may'],
        datasets: [
          { label: 'Merma (kg)', data: [622.5, 480.3, 611.8, 576.8, 1206.7, 896.8, 894.9, 1026.6, 3080], color: '#BDBDBD', type: 'bar' },
          { label: 'Nibs recuperados (kg)', data: [75.9, 170.2, 251.5, 168.5, 443.6, 474, 405.8, 606, 1750], color: '#00897B', type: 'bar' },
          { label: '% Recuperacion', data: [12.2, 35.4, 41.1, 29.2, 36.7, 52.9, 45.3, 59.0, 56.8], color: '#F9A825', type: 'line' }
        ]
      },
      {
        kind: 'table',
        title: 'Registro de ciclos de recuperacion',
        kicker: 'Detalle',
        sub: 'Datos de cada ciclo de limpieza y recuperacion en Buhler.',
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
        totals: ['9 ciclos', '9,396.4', '4,345.5', '46.3%', '\u2014', '41,707', '\u2014']
      },
      {
        kind: 'triad',
        title: 'Impactos negativos del metodo actual',
        kicker: 'Riesgos operativos',
        sub: 'El uso del equipo Buhler para recuperar la merma genera tres tipos de impacto identificados por el equipo.',
        cols: [
          {
            title: 'Parada de linea productiva',
            items: [
              'Se detiene la linea de torta de cacao reducida en grasa.',
              'Perdida de produccion estimada: 20 TM.',
              'Impacto economico: \u2248 $80,000 (20,000 kg \u00d7 $4/kg).'
            ]
          },
          {
            title: 'Uso de equipo Buhler',
            items: [
              'Requiere operacion dedicada de 2 operarios.',
              'Pago regular de 8 horas + horas extra diurnas.',
              'Incremento del costo operativo no planificado.'
            ]
          },
          {
            title: 'Perdida de material',
            items: [
              'Parte de la granilla aun se pierde en el Buhler.',
              'La eficiencia real queda limitada por el metodo.',
              'Margen de mejora identificado por el equipo.'
            ]
          }
        ]
      },
      {
        kind: 'triad',
        title: 'Propuestas de mejora',
        kicker: 'Siguiente paso',
        sub: 'Tres lineas de mejora planteadas por mantenimiento, produccion y calidad.',
        cols: [
          {
            title: 'Integracion del proceso',
            items: [
              'Incorporar la limpieza del tostador directamente a la descascarilladora.',
              'Eliminar traslados y reprocesos innecesarios.'
            ]
          },
          {
            title: 'Eliminacion de paradas',
            items: [
              'No utilizar el equipo Buhler para esta recuperacion.',
              'Evitar detencion de la linea de torta reducida en grasa.',
              'Reduccion inmediata de perdidas por produccion no realizada.'
            ]
          },
          {
            title: 'Optimizacion del rendimiento',
            items: [
              'Mejor aprovechamiento de la granilla presente en la merma.',
              'Incremento del % de recuperacion respecto al metodo actual.',
              'Proceso mas continuo y controlado.'
            ]
          }
        ]
      },
      {
        kind: 'conclusion',
        tag: 'Conclusion',
        text: 'La recuperacion de la merma de limpieza del tostador es una oportunidad significativa. El metodo actual (Buhler) genera paradas de linea y costos adicionales; integrar el proceso a la descascarilladora maximizaria el beneficio economico y la eficiencia global de la planta.',
        chips: [
          { lbl: 'Ciclos evaluados', val: '9' },
          { lbl: 'Recuperacion global', val: '46.3%' },
          { lbl: 'Proyeccion anual', val: '$100,800' }
        ]
      }
    ]
  },
  licor: {
    key: 'licor',
    accent: '#6D4C41',
    tag: 'Etapa 03 \u00b7 Molienda',
    name: 'Merma de tamizador de licor de cacao',
    tile: {
      num: '03',
      title: 'Merma del molino de pines',
      desc: 'Reprocesamiento de pasta de cacao via derretidor. Piloto de laboratorio ya realizado con 30% de recuperacion.',
      stat1: { val: '200 kg', lbl: 'Merma promedio / dia' },
      stat2: { val: '30%', lbl: 'Recuperacion piloto' }
    },
    slides: [
      {
        kind: 'hero',
        kicker: 'Punto de recuperacion',
        title: 'Merma del tamizador de licor de cacao',
        sub: 'Seguimiento de la merma diaria generada en el molino de pines (tamizador de licor) y evaluacion de dos alternativas para recuperar la pasta de cacao contenida en ella.',
        chips: [
          { txt: 'Molino de pines \u00b7 linea de licor' },
          { txt: '01 de junio de 2026' },
          { txt: 'Turnos 1 y 2' }
        ]
      },
      {
        kind: 'kpis',
        title: 'Resumen del proyecto',
        kicker: 'Cifras clave',
        items: [
          { label: 'Merma promedio por dia', val: 200, unit: 'kg', foot: 'Molino de pines \u00b7 01 de junio de 2026' },
          { label: 'Recuperacion en piloto de laboratorio', val: 30, unit: '%', foot: '35% de grasa de cacao \u00b7 1.69% de acidez' },
          { label: 'Monto recuperado en el piloto', val: 1120, prefix: '$', unit: '', foot: 'Refinado en refinadora de laboratorio' },
          { label: 'Proyeccion anual (resultado real)', val: 23506, prefix: '$', unit: '', foot: 'A partir del resultado de laboratorio' }
        ]
      },
      {
        kind: 'chart',
        title: 'Escenario inicial vs. resultado de piloto',
        kicker: 'Comparativo',
        sub: 'La proyeccion inicial asumia 60 kg de pasta recuperada cada 24 horas; el piloto de laboratorio midio un resultado real.',
        chartType: 'bar',
        labels: ['Escenario inicial (proyectado)', 'Piloto de laboratorio (real)'],
        datasets: [
          { label: 'Proyeccion de recuperacion anual ($)', data: [122640, 23506], color: '#6D4C41' }
        ]
      },
      {
        kind: 'twocol',
        title: 'Ideas y resultado del piloto',
        kicker: 'Detalle tecnico',
        left: {
          title: 'Ideas planteadas',
          sub: 'Para reprocesar la merma',
          items: [
            { text: '1. Usar el derretidor y verter en tamizador de molino de licor', status: 'Pendiente entrega del equipo' },
            { text: '2. Refinar en concha de piedra \u2192 derretidor \u2192 tamizador', status: 'Pendiente mantenimiento \u2014 traslado de Lima a Chincha' }
          ]
        },
        right: {
          title: 'Resultado del piloto de laboratorio',
          sub: 'Refinado en refinadora de laboratorio',
          items: [
            { text: 'Recuperacion de pasta de cacao', status: '30%' },
            { text: 'Grasa de cacao en lo recuperado', status: '35%' },
            { text: 'Acidez de la pasta recuperada', status: '1.69%' },
            { text: 'Precio de referencia del licor', status: '$5.6 / kg' }
          ]
        }
      },
      {
        kind: 'conclusion',
        tag: 'Conclusion',
        text: 'El piloto de laboratorio confirma que la merma del tamizador de licor es recuperable: 30% de pasta de cacao, con 35% de grasa y baja acidez (1.69%). El proyecto queda a la espera de la entrega del derretidor y del traslado de la concha de piedra para pasar de piloto a operacion en planta.',
        chips: [
          { lbl: 'Merma promedio', val: '200 kg/dia' },
          { lbl: 'Recuperacion piloto', val: '30%' },
          { lbl: 'Proyeccion anual (real)', val: '$23,506' }
        ]
      }
    ]
  }
};

const LINE_ORDER = ['despedradora', 'tostador', 'licor'];
