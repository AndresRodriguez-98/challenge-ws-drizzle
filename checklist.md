
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
- [ ] Configurar un mecanismo para reiniciar el contador si pasaron 20 minutos sin cambios (puede usarse una funcion programada (CRON job o Edge Function)).
- [ ] Agregarle al next.config el ppr incremental para el streaming del counter

## Interfaz de usuario
- [X] Mostrar el valor del contador en pantalla desde el backend
- [X] Agregar botones para incrementar y disminuir el contador
- [X] Asegurarse de que haya respuesta visual durante la carga o actualización
- [X] Aplicar un disenio basico con estilos claros

## Publicacion
- [X] Conectar el proyecto a Vercel para hacer el deploy
- [X] Configurar las variables de entorno en la plataforma de deploy
- [ ] Verificar que funcione correctamente en produccion

## Documentacion del proyecto
- [ ] Escribir un README con instrucciones para levantar el proyecto localmente
- [ ] Explicar como esta estructurado el proyecto y como funciona la logica del reinicio
- [ ] Mencionar cualquier extra agregado o decision tecnica tomada

## Mejoras opcionales
- [ ] Implementar historial de acciones sobre el contador
- [ ] Mostrar tiempo restante hasta el reinicio automatico
- [ ] Agregar animaciones suaves
- [ ] Crear tests para las acciones del servidor