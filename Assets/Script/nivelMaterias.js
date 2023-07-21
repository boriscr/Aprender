  // Obtener todos los elementos con los IDs deseados
var elementosHistoria = document.querySelectorAll('#historia');
var elementosGeografia = document.querySelectorAll('#geografia');
var elementosBiologia = document.querySelectorAll('#biologia');
var elementosLengua = document.querySelectorAll('#lengua');
var elementosMatematica = document.querySelectorAll('#matematica');
var elementosDownload = document.querySelectorAll('#download');

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
agregarImagenesYTitulos(elementosBiologia, 'https://img.freepik.com/iconos-gratis/hoja_318-541564.jpg?w=2000', 'Biologia');

// Aplicar el código a los elementos de tecnología
agregarImagenesYTitulos(elementosLengua, 'https://i0.wp.com/www.cristic.com/wp-content/uploads/2022/07/castellano.png?fit=500%2C500&ssl=1', 'Lengua');

// Aplicar el código a los elementos de tecnología
agregarImagenesYTitulos(elementosMatematica, 'https://cdn-icons-png.flaticon.com/512/2490/2490315.png', 'Matematicas');
// Aplicar el código a los elementos de tecnología
agregarImagenesYTitulos(elementosDownload, 'https://cdn.icon-icons.com/icons2/2235/PNG/512/android_os_logo_icon_134673.png', 'Descargar Apk');