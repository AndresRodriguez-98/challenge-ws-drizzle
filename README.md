# Propósito del proyecto

Aplicación web construida con **Next.js** + **Server Actions**, que implementa un contador interactivo persistido en una base de datos online.  
Cada 20 minutos de inactividad, el contador se reinicia automáticamente y guarda los valores anteriores en un registro histórico que tambien es mostrado en la aplicación.

---

# Instrucciones para ejecutar la aplicacion (How to use)
Para la version deployada:
- Ingresar al sitio https://challenge-ws-drizzle.vercel.app/
Para hostearlo localmente:
- Ejecutar en la terminal los siguientes comandos:
1) git clone https://github.com/AndresRodriguez-98/challenge-ws-drizzle.git
2) npm install
3) npm run dev

- Utilizar los botones "+" / "-" para incrementar o decrementar el contador respectivamente.
- Pasados los 20 minutos al intentar modificar el valor actual del contador o refrescar la pagina, automáticamente se reiniciará a 0 y aparecerá el ultimo valor antes del reinicio en un listado que podras observar en la parte inferior de la pagina.

---

## Tecnologías Usadas
- Next.js (con Typescript y TailwindCSS)
- Server Actions (sin rutas API tradicionales, para la lógica de negocios del lado del servidor)
- Supabase (PostgreSQL)
- Drizzle ORM
- Zod (para declaración y validación de esquemas de datos)

---

# Decisiones técnicas tomadas
- Arranqué la aplicación con un proyecto vacío (estilo template "cookiecutter") para ahorrarme tiempo.
- Tomé ciertas estructuras de diseño como separar la logica de renderizado de la logica de negocios.
- Utilicé solo server actions para el lado del servidor, sin utilizar api routes, intentando llevar a cabo las buenas practicas para el framework Next.js.
- Separé lo que son queries a la db de mis actions para tener todo un poco mas modularizado.
- Separé los dos componentes principales de mi aplicación en una carpeta UI, que se encargan UNICAMENTE del renderizado de la aplicación.

---

# Funcionalidades adicionales
- Decidi mostrar una lista con los valores de los contadores ya utilizados (contadores cada 20 minutos), para tener un feedback de en que valor quedó el contador previamente al reinicio. Para eso implementé un action que agarre todos los contadores que hay en la db y luego los mapié del lado del front para mostrarlos.

- Busqué aplicar estilos a los client components que sean acordes a un contador, buscando un estilo digital o futurista.

- Apliqué diseños responsivos para poder utilizar la página tambien en otros dispositivos.
