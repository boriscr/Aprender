  // Obtener todos los elementos con los IDs deseados
var elementosHistoria = document.querySelectorAll('#historia');
var elementosGeografia = document.querySelectorAll('#geografia');
var elementosTecnologia = document.querySelectorAll('#tecnologia');

// Función para agregar las imágenes y los títulos
function agregarImagenesYTitulos(elementos, imgSrc, titulo) {
  elementos.forEach(function(elemento) {
    var img = document.createElement('img');
    img.src = imgSrc;

    var tituloElement = document.createElement('h4');
    tituloElement.textContent = titulo;

    elemento.appendChild(img);
    elemento.appendChild(tituloElement);
  });
}

agregarImagenesYTitulos(elementosHistoria, 'https://images.vexels.com/media/users/3/229283/isolated/preview/87873e42be96ba70956c0ebe370c1d10-logotipo-lateral-del-libro-a-lapiz.png', 'Historia');

// Aplicar el código a los elementos de geografía
agregarImagenesYTitulos(elementosGeografia, 'https://images.vexels.com/media/users/3/157970/isolated/preview/c156b4270aea292b9b335dd463ea17eb-icono-de-planeta-tierra-icono-de-tierra.png', 'Geografía');

// Aplicar el código a los elementos de tecnología
agregarImagenesYTitulos(elementosTecnologia, 'https://cdn-icons-png.flaticon.com/512/4257/4257812.png', 'Tecnología');
