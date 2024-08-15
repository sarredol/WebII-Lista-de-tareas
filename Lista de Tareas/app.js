const input = document.getElementById ('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTarea = document.getElementById('lista-de-tareas');



function agregarTarea(){
    if (input.value){
      // Crear tarea  
      let tareaNueva = document.createElement('div');
      tareaNueva.classList.add('tarea');
      
      // Texto ingresado por el usuario
      let texto = document.createElement('p');
      texto.innerText = input.value;
      tareaNueva.appendChild(texto)

      // Crear y agregar contenedor de iconos
      let iconos = document.createElement('div');
      iconos.classList.add('iconos');
      tareaNueva.appendChild(iconos);

      // Iconos

      let completar = document.createElement('i');
      completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
      completar.addEventListener('click', completarTarea);

      let eliminar = document.createElement('i');
      eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
      eliminar.addEventListener('click', eliminarTarea);

      let editar = document.createElement('i');
      editar.classList.add('bi', 'bi-pencil-square', 'icono-editar');
      editar.addEventListener('click', editarTarea);

      iconos.append(completar,eliminar,editar);

      // Agregar tarea a la lista
      listaDeTarea.appendChild(tareaNueva);
      
    } else {
      alert('Por favor ingresa una tarea')  
    }
}

function completarTarea (e){
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');
}

function eliminarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}

function editarTarea(e) {
    // Obtener el elemento de tarea desde el evento
    let tarea = e.target.parentNode.parentNode;
    let textoActual = tarea.querySelector('p').innerText;

    // Solicitar al usuario que edite el texto de la tarea
    let nuevoTexto = prompt("Edita la tarea:", textoActual);

    // Verificar que se haya ingresado un nuevo texto
    if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
        tarea.querySelector('p').innerText = nuevoTexto;
    } else if (nuevoTexto !== null) {
        alert("Debes escribir una tarea");
    }
}

boton.addEventListener('click', agregarTarea);

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){
        agregarTarea();
    }
})