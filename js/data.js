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
        kind: 'conclusion',
        tag: 'Conclusión',
        text: 'La recuperación de nibs en la despedradora es técnicamente viable y económicamente rentable, con un impacto anual superior a los $42 mil.',
        chips: [
          { lbl: 'Merma evaluada', val: '736 kg / 7 días' },
          { lbl: 'Recuperación proyectada', val: '8,832 kg/año' },
          { lbl: 'Impacto anual', val: '$42,393.6' }
        ]
      }
    ]
  },

  tostador: {
    key: 'tostador',
    accent: '#F9A825',
    tag: 'Etapa 02 · Tostador',
    name: 'Limpieza de tostador',
    tile: {
      num: '02',
      title: 'Limpieza de tostador',
      desc: 'Acopio de 6 días de merma de limpieza del tostador. 474 kg de nibs recuperados a $8.7/kg. Proyección anual $49,485.6.',
      stat1: { val: '474 kg', lbl: 'Nibs / 6 días' },
      stat2: { val: '$49.5K', lbl: 'Proyección 12 meses' }
    },
    slides: [
      {
        kind: 'hero',
        kicker: 'Punto de recuperación',
        title: 'Limpieza de tostador',
        sub: 'Registro de 6 días de juntado de merma de limpieza del tostador. Se recuperaron 474 kg de nibs a partir de 896.8 kg de merma (53% de recuperación), valorizados a $8.7 por kilogramo.',
        chips: [
          { txt: 'Limpieza de tostador' },
          { txt: '6 días de juntado' },
          { txt: 'Precio $8.7 / kg' }
        ]
      },
      {
        kind: 'kpis',
        title: 'Resumen del periodo (6 días)',
        kicker: 'Cifras clave',
        imageKey: 'tostador',
        imageCaption: 'Registro — Limpieza de tostador (6 días)',
        items: [
          { label: 'Merma acumulada (6 días)', val: 896.8, unit: 'kg', foot: 'Total de merma juntada en el periodo' },
          { label: 'Nibs recuperados', val: 474, unit: 'kg', foot: 'Eficiencia de recuperación: 53%' },
          { label: 'Monto del periodo', val: 4123.8, prefix: '$', unit: '', foot: '474 kg × $8.7 / kg' },
          { label: 'Proyección 12 meses', val: 49485.6, prefix: '$', unit: '', foot: 'Monto 6 días × 12 meses' }
        ]
      },
      {
        kind: 'chart',
        title: 'Merma vs. nibs recuperados',
        kicker: 'Comparativo del periodo',
        sub: 'Kilogramos de merma procesada y nibs recuperados en los 6 días de juntado.',
        chartType: 'bar',
        labels: ['Merma (kg)', 'Nibs recuperados (kg)'],
        datasets: [
          { label: 'Kg', data: [896.8, 474], color: '#F9A825' }
        ]
      },
      {
        kind: 'table',
        title: 'Detalle del periodo y proyección',
        kicker: 'Valorización',
        sub: 'Resultado de 6 días de juntado y proyección a 12 meses a $8.7 por kg.',
        headers: ['Concepto', 'Días', 'Merma (kg)', 'Nibs (kg)', '%', 'Precio $/kg', 'Monto $'],
        rows: [
          ['6 días de juntar — Limpieza de tostador', '6', '896.8', '474', '53%', '8.7', '4,123.8']
        ],
        totals: ['Proyección 12 meses', '—', '—', '—', '—', '8.7', '49,485.6']
      },
      {
        kind: 'twocol',
        title: 'Análisis del resultado',
        kicker: 'Detalle técnico',
        left: {
          title: 'Resultado del periodo',
          sub: '6 días de juntado',
          items: [
            { text: 'Merma total juntada', status: '896.8 kg' },
            { text: 'Nibs recuperados', status: '474 kg (53%)' },
            { text: 'Precio de referencia', status: '$8.7 / kg' },
            { text: 'Monto recuperado (6 días)', status: '$4,123.8' }
          ]
        },
        right: {
          title: 'Proyección anual',
          sub: 'Base: resultado de 6 días × 12',
          items: [
            { text: 'Factor de proyección', status: '× 12 meses' },
            { text: 'Proyección de valor anual', status: '$49,485.6' },
            { text: 'Base de cálculo', status: '474 kg × $8.7 × 12' },
            { text: 'Oportunidad identificada', status: 'Recuperación continua de merma de limpieza' }
          ]
        }
      },
      {
        kind: 'conclusion',
        tag: 'Conclusión',
        text: 'En 6 días de juntado de merma de limpieza de tostador se recuperaron 474 kg de nibs (53% de 896.8 kg de merma), por un monto de $4,123.8 a $8.7/kg. La proyección a 12 meses asciende a $49,485.6.',
        chips: [
          { lbl: 'Nibs (6 días)', val: '474 kg' },
          { lbl: 'Monto periodo', val: '$4,123.8' },
          { lbl: 'Proyección 12 meses', val: '$49,485.6' }
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
      desc: 'Promedio mensual de recuperación de licor de filtro prensa. 185.9 kg/mes a $8.7 por kg. Proyección anual $19,407.96.',
      stat1: { val: '185.9 kg', lbl: 'Promedio / mes' },
      stat2: { val: '$19,407.96', lbl: 'Proyección anual' }
    },
    slides: [
      {
        kind: 'hero',
        kicker: 'Punto de recuperación',
        title: 'Licor de filtro prensa',
        sub: 'Recuperación de licor de filtro prensa con un promedio mensual de 185.9 kg, valorizado a $8.7 por kilogramo (S/ 1,617.3 por mes).',
        chips: [
          { txt: 'Filtro prensa' },
          { txt: 'Promedio mensual' },
          { txt: 'Precio $8.7 / kg' }
        ]
      },
      {
        kind: 'kpis',
        title: 'Resumen del proyecto',
        kicker: 'Cifras clave',
        items: [
          { label: 'Promedio mensual', val: 185.9, unit: 'kg', foot: 'Kilogramos de licor recuperados por mes' },
          { label: 'Precio por kilogramo', val: 8.7, prefix: '$', unit: '/ kg', foot: 'Precio de referencia en dólares' },
          { label: 'Valor mensual', val: 1617.3, prefix: 'S/ ', unit: '', foot: '185.9 kg × $8.7 / kg' },
          { label: 'Proyección anual', val: 19407.96, prefix: '$', unit: '', foot: '185.9 kg × 12 meses × $8.7 / kg' }
        ]
      },
      {
        kind: 'chart',
        title: 'Proyección mensual vs. anual',
        kicker: 'Comparativo',
        sub: 'Kilogramos y valor del promedio mensual frente a la proyección de 12 meses.',
        chartType: 'bar',
        labels: ['Kg / mes', 'Kg / año', 'Valor mes ($)', 'Valor año ($)'],
        datasets: [
          { label: 'Cantidad', data: [185.9, 2230.8, 1617.3, 19407.96], color: '#1565C0' }
        ]
      },
      {
        kind: 'table',
        title: 'Detalle de proyección',
        kicker: 'Valorización',
        sub: 'Promedio mensual y proyección anual a $8.7 por kilogramo.',
        headers: ['Concepto', 'Kg', 'Precio $/kg', 'Valor $', 'Valor S/'],
        rows: [
          ['Promedio mensual', '185.9', '8.7', '1,617.3', '1,617.3'],
          ['Proyección anual (×12)', '2,230.8', '8.7', '19,407.96', '—']
        ],
        totals: ['Total proyectado año', '2,230.8', '8.7', '19,407.96', '—']
      },
      {
        kind: 'conclusion',
        tag: 'Conclusión',
        text: 'El promedio mensual de recuperación de licor de filtro prensa es de 185.9 kg, equivalentes a S/ 1,617.3 por mes a $8.7 por kilogramo. La proyección anual asciende a $19,407.96.',
        chips: [
          { lbl: 'Promedio / mes', val: '185.9 kg' },
          { lbl: 'Valor mensual', val: 'S/ 1,617.3' },
          { lbl: 'Proyección anual', val: '$19,407.96' }
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
      desc: 'Recuperación de merma de cocoa y torta trozada en proceso alcalino tipo 2. 425 kg ya recuperados · 4,300 kg pendientes.',
      stat1: { val: '425 kg', lbl: 'Ya recuperado' },
      stat2: { val: '4,300 kg', lbl: 'Pendiente' }
    },
    slides: [
      {
        kind: 'hero',
        kicker: 'Reporte de recuperación',
        title: 'Merma de cocoa y torta trozada',
        sub: 'Resultados de recuperación de merma en proceso alcalino de tipo 2 (5 horas de trabajo). Incluye carga microbiana, capacidad operativa y proyección del material pendiente al 01/09/2026.',
        chips: [
          { txt: 'Proceso alcalino tipo 2' },
          { txt: 'Cocoa y torta trozada' },
          { txt: 'S/ 17.00 por kg' }
        ]
      },
      {
        kind: 'kpis',
        title: 'Resultados de recuperación',
        kicker: 'Cifras clave',
        imageKey: 'polvillo',
        imageCaption: 'Registro — Polvillo de cocoa y torta',
        items: [
          { label: 'Merma recuperada (cocoa y torta)', val: 425, unit: 'kg', foot: 'Ya recuperado en proceso' },
          { label: 'Valor ya recuperado', val: 7225, prefix: 'S/ ', unit: '', foot: '425 kg × S/ 17.00 / kg' },
          { label: 'Carga inicial de aerobios', val: 90000, unit: ' UFC/g', foot: 'Antes del reproceso de merma' },
          { label: 'Promedio aerobios post-proceso', val: 4133, unit: ' UFC/g', foot: 'Reducción significativa de carga' }
        ]
      },
      {
        kind: 'chart',
        title: 'Capacidad de recuperación — 1 persona',
        kicker: 'Promedio operativo',
        sub: 'Recuperación de merma de cocoa y torta entre 8 a 10 horas. Capacidad promedio y variación por suciedad extrema.',
        chartType: 'bar',
        labels: ['Promedio (80 kg)', 'Variación alta (70 kg)', 'Mayor contaminación (45 kg)'],
        datasets: [
          { label: 'Kg por jornada', data: [80, 70, 45], color: '#6A1B9A' }
        ]
      },
      {
        kind: 'twocol',
        title: 'Detalle de recuperación y valor diario',
        kicker: 'Capacidad operativa',
        left: {
          title: 'Capacidad por jornada',
          sub: '1 persona · 8 a 10 horas',
          items: [
            { text: 'Promedio de recuperación', status: '70 – 80 kg' },
            { text: 'Variación por suciedad extrema', status: 'Mínimo 45 kg' },
            { text: 'Precio de referencia', status: 'S/ 17.00 / kg' }
          ]
        },
        right: {
          title: 'Valor diario estimado',
          sub: 'Según kilogramos recuperados',
          items: [
            { text: '80 kg × S/ 17', status: 'S/ 1,360 valor diario' },
            { text: '70 kg × S/ 17', status: 'S/ 1,190 valor diario' },
            { text: '45 kg × S/ 17', status: 'S/ 765 valor diario' }
          ]
        }
      },
      {
        kind: 'chart',
        title: 'Reducción de carga microbiana',
        kicker: 'Comportamiento / tendencia',
        sub: 'Evolución de la carga de aerobios (UFC/g) desde la carga inicial hasta los ensayos de proceso.',
        chartType: 'bar',
        labels: ['Carga inicial', 'Ensayo 1 (6.85%H)', 'Ensayo 2 (6.98%H)', 'Ensayo 3 (12%H)'],
        datasets: [
          { label: 'Aerobios UFC/g', data: [90000, 5900, 3900, 2600], color: '#D97706' }
        ]
      },
      {
        kind: 'table',
        title: 'Pruebas de proceso (carga microbiana)',
        kicker: 'Detalle / casos',
        sub: 'Ensayos de reducción de carga de aerobios en el proceso de recuperación.',
        headers: ['Ensayo', 'Humedad', 'Tiempo', 'Temp.', 'Aerobios UFC/g', 'Coliformes', 'Resultado'],
        rows: [
          ['Prueba 1 (Alta carga)', '6.85%', '2 h', '100 °C', '5,900', '0', 'Exitoso'],
          ['Prueba 2', '6.98%', '2 h', '100 °C', '3,900', '0', 'Exitoso'],
          ['Prueba 3', '12.00%', '—', '100 °C', '2,600', '0', 'Exitoso']
        ],
        totals: ['Promedio', '8.61%', '—', '100 °C', '4,133', '0', 'Exitoso']
      },
      {
        kind: 'kpis',
        title: 'Proyección pendiente al 01/09/2026',
        kicker: 'Material por recuperar',
        items: [
          { label: 'Bolsas / sacos pendientes', val: 172, unit: ' sacos', foot: '25 kg por cada saco' },
          { label: 'Total kilos pendientes', val: 4300, unit: 'kg', foot: 'Cocoa + torta trozada' },
          { label: 'Valor unitario', val: 17, prefix: 'S/ ', unit: ' / kg', foot: 'Precio por kilogramo' },
          { label: 'Valor total proyectado', val: 73100, prefix: 'S/ ', unit: '', foot: '4,300 kg × S/ 17.00' }
        ]
      },
      {
        kind: 'chart',
        title: 'Merma ya recuperada vs. pendiente',
        kicker: 'Distribución física',
        sub: 'Comparativa de kilogramos ya recuperados y material pendiente de recuperación.',
        chartType: 'bar',
        labels: ['Ya recuperada', 'Pendiente (172 sacos)', 'Total'],
        datasets: [
          { label: 'Kg', data: [425, 4300, 4725], color: '#6A1B9A' }
        ]
      },
      {
        kind: 'conclusion',
        tag: 'Conclusión',
        text: 'Se han recuperado 425 kg de polvillo de cocoa y torta (S/ 7,225). Quedan pendientes 4,300 kg (172 sacos) con un valor proyectado de S/ 73,100 a S/ 17.00 por kilogramo. El proceso reduce la carga de aerobios de 90,000 a un promedio de 4,133 UFC/g.',
        chips: [
          { lbl: 'Recuperado', val: '425 kg · S/ 7,225' },
          { lbl: 'Pendiente', val: '4,300 kg · S/ 73,100' },
          { lbl: 'Precio', val: 'S/ 17.00 / kg' }
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
