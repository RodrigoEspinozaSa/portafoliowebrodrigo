let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(500)
  .typeString('Programador y Diseñador')
  .pauseFor(500)
  .deleteChars(25)
  .typeString('<strong><span style="color: purple;"> ¡Bienvenidas y bienvenidos a mi portafolio web! </span></strong>')
  .deleteChars(50)
  .start();

 