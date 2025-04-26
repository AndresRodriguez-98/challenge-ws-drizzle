
## Preparacion del entorno
- [X] Crear un nuevo repositorio en GitHub o GitLab
- [X] Iniciar el proyecto con next
- [X] Instalar dependencias
- [X] Cliente de Supabase
- [X] Prisma o Drizzle para manejar la base de datos
- [X] Configurar el .env con las variables de Supabase
- [X] Iniciar un proyecto en Supabase y definir la base de datos


## Base de datos y logica de backend
- [X] Crear una tabla para guardar el valor del contador y su última actualización
- [X] Generar el esquema con Prisma o Drizzle y aplicar las migraciones
- [X] Programar acciones del servidor (Server Actions) para:
  - [X] Leer el valor actual del contador
  - [X] Aumentar o disminuir el valor
  - [X] Guardar la fecha/hora del ultimo cambio
- [X] Crear una funcion para reiniciar el contador si pasaron 20 minutos sin cambios.

## Interfaz de usuario
- [X] Mostrar el valor del contador en pantalla desde el backend
- [X] Agregar botones para incrementar y disminuir el contador
- [X] Asegurarse de que haya respuesta visual durante la carga o actualización
- [X] Aplicar algún diseño, pensar en algo digital se me ocurre, como tipo futurista

## Publicacion
- [X] Conectar el proyecto a Vercel para hacer el deploy
- [X] Configurar las variables de entorno en la plataforma de deploy
- [X] Verificar que funcione correctamente en produccion

## Documentacion del proyecto
- [X] Escribir un README con instrucciones para levantar el proyecto localmente
- [X] Explicar como esta estructurado el proyecto y como funciona la lógica
- [X] Mencionar cualquier extra agregado o decision tecnica tomada

## Mejoras opcionales
- [X] Implementar historial de acciones sobre el contador
- [X] Agregar loading para mejorar la experiencia de usuario
- [X] Mostrar tiempo restante hasta el reinicio automatico