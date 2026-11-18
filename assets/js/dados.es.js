/* ==========================================================================
   Versión en español de dados.js. Mantener sincronizada con dados.js (portugués).
   Las tags siguen en portugués (son claves); main.js traduce la etiqueta.
   tags: decisão, dados, resultado, ferramentas, entrega, ética
   situación: feito, andamento, planejado
   ========================================================================== */

window.ATUALIZADO = "17/11/2026";

window.SEMESTRE = { inicio: "2026-08-17", fim: "2026-12-18" };

window.MARCOS = [
  { data: "23/08", titulo: "Empieza el proyecto",
    texto: "Primer clasificador de fotos de inspección en seis categorías (chasis, odómetro, marca, motor y patentes), con interfaz en Streamlit. El primer experimento con YOLO acertó el 92,0 %.",
    tags: ["decisão"] },
  { data: "25/08", titulo: "Nueva dirección: modelo y color",
    texto: "El grupo decide enfocarse en dos clasificadores independientes: el modelo del vehículo y el color.",
    tags: ["decisão"] },
  { data: "29 a 30/08", titulo: "Importación y etiquetado asistido",
    texto: "Importación de lotes de fotos, recorte del vehículo con YOLO, sugerencia de modelo con CLIP, color por HSV y revisión humana. Patente y chasis pasan a mostrarse ocultos.",
    tags: ["dados", "ética"] },
  { data: "08/09", titulo: "Propuesta y primera presentación",
    texto: "Propuesta del proyecto y diapositivas presentadas en la materia.",
    tags: ["entrega"] },
  { data: "09/09", titulo: "Gobernanza de los datos",
    texto: "Análisis de quién controla los datos y del procedimiento de autorización para el uso académico.",
    tags: ["ética"] },
  { data: "17/09", titulo: "La etiqueta viene del registro",
    texto: "Marca y modelo del registro de la inspección cubren el 100 % de las fotos. La IA pasa a verificar, en vez de adivinar. La unificación de los nombres de marca reduce 57 grafías a 46 marcas.",
    tags: ["decisão", "dados"] },
  { data: "20/09", titulo: "El vehículo como unidad",
    texto: "Una muestra indica cerca del 15 % de fotos con el capó abierto. La división entrenamiento/prueba pasa a ser por vehículo, para que el frente y la parte trasera del mismo auto no se filtren entre los grupos.",
    tags: ["dados", "decisão"] },
  { data: "06/10", titulo: "Acervo organizado por modelo",
    texto: "Lotes por modelo de auto, con vista, año y color. En el primer lote, el 99,5 % de las fotos de frente encuentran la parte trasera del mismo vehículo.",
    tags: ["dados"] },
  { data: "07 a 09/10", titulo: "Preselección con IA de visión y lenguaje",
    texto: "60.042 fotos evaluadas por un modelo de lenguaje con visión: 37.780 con el capó cerrado, cerca de 94 fotos por minuto.",
    tags: ["dados", "resultado"] },
  { data: "24 a 27/10", titulo: "Herramientas de anotación",
    texto: "CVAT, Label Studio y Roboflow comparados en una grilla de 15 criterios.",
    tags: ["ferramentas"] },
  { data: "02/11", titulo: "Calidad de los datos",
    texto: "Fotos de fotos, personas sin el auto y color del registro equivocado en un modelo entero: lo que la curaduría necesita mirar.",
    tags: ["dados"] },
  { data: "07/11", titulo: "Entrenamiento en GPU H100",
    texto: "Modelo: 95,1 % de acierto en la prueba (F1 macro 0,951), 500 épocas en 3,2 horas. Color: 93,6 % (F1 macro 0,882).",
    tags: ["resultado"] },
  { data: "08/11", titulo: "El modelo en el celular",
    texto: "Propuesta de uso en campo: Android como aplicación web con ONNX, iPhone con Core ML.",
    tags: ["decisão"] },
  { data: "09/11", titulo: "Prueba de las herramientas",
    texto: "Las mismas 92 fotos públicas anotadas en CVAT y en Label Studio: concordancia del 81,5 % en el modelo, kappa 0,80.",
    tags: ["ferramentas", "resultado"] },
  { data: "11 a 12/11", titulo: "Devolución del profesor",
    texto: "49 observaciones se convirtieron en una planilla con 37 actividades y en las versiones 6 a 10 de la presentación.",
    tags: ["entrega"] },
  { data: "13/11", titulo: "Guías de registro fotográfico",
    texto: "Guía de buenas prácticas para el inspector y versiones para inspección edilicia, agricultura, documentos y salud.",
    tags: ["ferramentas"] },
  { data: "15/11", titulo: "Comparativo técnico de las herramientas",
    texto: "La tabla comparativa rehecha en seis partes, con un documento de apoyo para no especialistas y operadores.",
    tags: ["ferramentas", "entrega"] },
  { data: "17/11", titulo: "Sitio del proyecto",
    texto: "Este sitio, para seguir el proyecto y apoyar la presentación final.",
    tags: ["entrega"] },
  { data: "17/11", titulo: "Videos con IA",
    texto: "Retrospectiva de 2 minutos y video resumen animado de 3 minutos en tres idiomas, generados por código: pantallas y animación dibujadas en Python, voz neuronal y montaje con ffmpeg.",
    tags: ["entrega"] },
];

window.FUNIL = [
  { rotulo: "Fotos en los archivos de origen", valor: 188164 },
  { rotulo: "Evaluadas en la preselección", valor: 60042 },
  { rotulo: "Con el capó cerrado", valor: 37780 },
  { rotulo: "Importadas (frente y trasera)", valor: 74891 },
  { rotulo: "Conjunto de entrenamiento", valor: 74149 },
];

window.PASSOS = [
  { titulo: "Entrenar modelo y color", texto: "Primera ronda completa en GPU.", situacao: "feito" },
  { titulo: "Comparar herramientas de anotación", texto: "Grilla técnica y prueba con 92 fotos.", situacao: "feito" },
  { titulo: "Registrar las rondas y las predicciones por foto", texto: "Base para todas las mediciones siguientes.", situacao: "andamento" },
  { titulo: "Verificar el registro", texto: "Medir falsas alarmas y detección de divergencias en el punto de operación elegido.", situacao: "planejado" },
  { titulo: "Auditar etiquetas", texto: "Juzgar 100 errores del modelo: ¿error de la red o error del registro?", situacao: "planejado" },
  { titulo: "Calibrar la confianza", texto: "Guardar las salidas de la red y medir si el 90 % de confianza acierta el 90 % de las veces.", situacao: "planejado" },
  { titulo: "Verificar filtraciones entre inspecciones", texto: "Buscar el mismo auto en inspecciones distintas en entrenamiento y prueba.", situacao: "planejado" },
  { titulo: "Decidir los colores raros", texto: "Con los orientadores: unir, recolectar más o dejar afuera.", situacao: "planejado" },
  { titulo: "Llevarlo al celular", texto: "Aplicación en modo campo, con el modelo corriendo en el dispositivo.", situacao: "planejado" },
  { titulo: "Presentación final", texto: "Resultados, aprendizajes y lo que queda para la tesis.", situacao: "planejado" },
];
