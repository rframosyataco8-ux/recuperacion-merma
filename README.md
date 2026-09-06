# Recuperación de Merma — Presentación interactiva

Presentación profesional de tres proyectos de recuperación de merma en planta de cacao (Chincha).

## Estructura

```
recuperacion-merma/
├── index.html          # Entrada principal
├── css/styles.css      # Estilos Material Design
├── js/
│   ├── data.js         # Datos extraídos de los Excel
│   └── app.js          # Lógica de presentación y animaciones
└── README.md
```

## Cómo verlo localmente

Abre `index.html` en el navegador, o sirve la carpeta:

```bash
npx serve .
# o
python3 -m http.server 8080
```

## Despliegue en Render (estático)

1. Sube esta carpeta a un repositorio de GitHub.
2. En [Render](https://dashboard.render.com):
   - **New → Static Site**
   - Conecta el repo
   - **Root Directory**: deja vacío (o indica la carpeta si está en un subdirectorio)
   - **Build Command**: (vacío)
   - **Publish Directory**: `.` (o la carpeta raíz del sitio)
3. Deploy.

No requiere Node, Python ni base de datos. Es HTML/CSS/JS puro + Chart.js desde CDN.

## Controles de la presentación

- Clic en una de las 3 tarjetas → abre la presentación
- Flechas ← → o botones laterales: navegar slides
- Espacio: pausar / reanudar autoplay
- Escape: volver al selector
- Barra de progreso superior: saltar a cualquier slide
- Autoplay avanza automáticamente (excepto la diapositiva de conclusión)
