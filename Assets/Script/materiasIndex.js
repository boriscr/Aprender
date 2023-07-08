// Agrega Imagen icono de las Materias y los titulos de ellas

// Obtener los elementos por su identificador
var divHistoria = document.getElementById('historia');
var divGeografia = document.getElementById('geografia');
var divTecnologia = document.getElementById('tecnologia');

// Crear las etiquetas <img> y <h4> dinámicamente
var imgHistoria = document.createElement('img');
imgHistoria.src = 'https://images.vexels.com/media/users/3/229283/isolated/preview/87873e42be96ba70956c0ebe370c1d10-logotipo-lateral-del-libro-a-lapiz.png';

var tituloHistoria = document.createElement('h4');
tituloHistoria.textContent = 'Historia';


var imgGeografia = document.createElement('img');
imgGeografia.src = 'https://images.vexels.com/media/users/3/157970/isolated/preview/c156b4270aea292b9b335dd463ea17eb-icono-de-planeta-tierra-icono-de-tierra.png';

var tituloGeografia = document.createElement('h4');
tituloGeografia.textContent = 'Geografia';

var imgTecnologia = document.createElement('img');
imgTecnologia.src = 'https://cdn-icons-png.flaticon.com/512/4257/4257812.png';

var tituloTecnologia = document.createElement('h4');
tituloTecnologia.textContent = 'Tecnologia';

// Agregar las etiquetas al div correspondiente
divHistoria.appendChild(imgHistoria);
divHistoria.appendChild(tituloHistoria);

divGeografia.appendChild(imgGeografia);
divGeografia.appendChild(tituloGeografia);

divTecnologia.appendChild(imgTecnologia);
divTecnologia.appendChild(tituloTecnologia);
