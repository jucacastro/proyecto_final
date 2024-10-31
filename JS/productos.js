  const productos = [
    { id: 1, nombre: "Aminoácido de 2 lb", stock: 20, img: "../IMG/aminoacidos-general.jpg", categoria: "suplementos", precio: 80000, proveedor: "sport line" },
    { id: 2, nombre: "Aminoácido de 4 lb", stock: 15, img: "../IMG/aminoacidos-general.jpg", categoria: "suplementos", precio: 120000, proveedor: "sport line" },
    { id: 3, nombre: "Aminoácido de 10 lb", stock: 10, img: "../IMG/aminoacidos-general.jpg", categoria: "suplementos", precio: 200000, proveedor: "sport line" },
    { id: 4, nombre: "Proteína de 1 lb", stock: 25, img: "../IMG/imagen-proteina-general.jpg", categoria: "suplementos", precio: 75000, proveedor: "sport line" },
    { id: 5, nombre: "Proteína de 2 lb", stock: 20, img: "../IMG/imagen-proteina-general.jpg", categoria: "suplementos", precio: 90000, proveedor: "sport line" },
    { id: 6, nombre: "Proteína de 4 lb", stock: 18, img: "../IMG/imagen-proteina-general.jpg", categoria: "suplementos", precio: 160000, proveedor: "sport line" },
    { id: 7, nombre: "Proteína de 10 lb", stock: 8, img: "../IMG/imagen-proteina-general.jpg", categoria: "suplementos", precio: 320000, proveedor: "sport line" },
    { id: 8, nombre: "Creatina 300g", stock: 15, img: "../IMG/imagen-creatina-general.jpg", categoria: "suplementos", precio: 50000, proveedor: "sport line" },
    { id: 9, nombre: "Creatina 500g", stock: 12, img: "../IMG/imagen-creatina-general.jpg", categoria: "suplementos", precio: 80000, proveedor: "sport line" },
    { id: 10, nombre: "Creatina 1 kg", stock: 10, img: "../IMG/imagen-creatina-general.jpg", categoria: "suplementos", precio: 150000, proveedor: "sport line" },
    { id: 11, nombre: "Cafeína 200mg", stock: 30, img: "../IMG/imagen-creatina-general.jpg", categoria: "suplementos", precio: 40000, proveedor: "sport line" },
    { id: 12, nombre: "Cafeína 400mg", stock: 25, img: "../IMG/imagen-creatina-general.jpg", categoria: "suplementos", precio: 60000, proveedor: "sport line" },
    { id: 13, nombre: "Cafeína 600mg", stock: 20, img: "../IMG/imagen-creatina-general.jpg", categoria: "suplementos", precio: 80000, proveedor: "sport line" },
    { id: 14, nombre: "Mancuerna de 5 kg", stock: 20, img: "../IMG/mancuernas-plastico.jpg", categoria: "deportivo", precio: 50000, proveedor: "sport line" },
    { id: 15, nombre: "Mancuerna de 10 kg", stock: 15, img: "../IMG/mancuernas-metal.jpg", categoria: "deportivo", precio: 90000, proveedor: "sport line" },
    { id: 16, nombre: "Mancuerna de 15 kg", stock: 10, img: "../IMG/mancuernas-metal.jpg", categoria: "deportivo", precio: 120000, proveedor: "sport line" },
    { id: 17, nombre: "Cinturón para levantamiento", stock: 25, img: "../IMG/cinturon.jpg", categoria: "deportivo", precio: 60000, proveedor: "sport line" },
    { id: 18, nombre: "Cinturón de cuero", stock: 15, img: "../IMG/cinturon.jpg", categoria: "deportivo", precio: 80000, proveedor: "sport line" },
    { id: 19, nombre: "Cinturón de neopreno", stock: 18, img: "../IMG/cinturon.jpg", categoria: "deportivo", precio: 70000, proveedor: "sport line" },
    { id: 20, nombre: "Guantes de gimnasio S", stock: 20, img: "../IMG/guantes.jpg", categoria: "deportivo", precio: 30000, proveedor: "sport line" },
    { id: 21, nombre: "Guantes de gimnasio M", stock: 18, img: "../IMG/guantes.jpg", categoria: "deportivo", precio: 30000, proveedor: "sport line" },
    { id: 22, nombre: "Guantes de gimnasio L", stock: 15, img: "../IMG/guantes.jpg", categoria: "deportivo", precio: 30000, proveedor: "sport line" },
    { id: 23, nombre: "Guantes de gimnasio XL", stock: 12, img: "../IMG/guantes.jpg", categoria: "deportivo", precio: 30000, proveedor: "sport line" },
    { id: 24, nombre: "Rodillera deportiva", stock: 30, img: "../IMG/rodillera.jpg", categoria: "deportivo", precio: 50000, proveedor: "sport line" },
    { id: 25, nombre: "Muñequera de soporte", stock: 25, img: "../IMG/muñequera.jpg", categoria: "deportivo", precio: 25000, proveedor: "sport line" },
    { id: 26, nombre: "Soporte de codo", stock: 20, img: "../IMG/soporte-codo.jpg", categoria: "deportivo", precio: 20000, proveedor: "sport line" },
    { id: 27, nombre: "Protector de muñeca", stock: 20, img: "../IMG/muñequera.jpg", categoria: "deportivo", precio: 15000, proveedor: "sport line" },
    { id: 28, nombre: "Liga de resistencia baja", stock: 30, img: "../IMG/ligas.jpg", categoria: "deportivo", precio: 20000, proveedor: "sport line" },
    { id: 29, nombre: "Liga de resistencia media", stock: 25, img: "../IMG/ligas.jpg", categoria: "deportivo", precio: 25000, proveedor: "sport line" },
    { id: 30, nombre: "Liga de resistencia alta", stock: 20, img: "../IMG/ligas.jpg", categoria: "deportivo", precio: 30000, proveedor: "sport line" },
    { id: 31, nombre: "Tapete de yoga", stock: 15, img: "../IMG/tapete.jpg", categoria: "deportivo", precio: 45000, proveedor: "sport line" },
    { id: 32, nombre: "Botella de agua 500 ml", stock: 30, img: "../IMG/agua-general.jpg", categoria: "suplementos", precio: 15000, proveedor: "sport line" },
    { id: 33, nombre: "Botella de agua 1 L", stock: 25, img: "../IMG/agua-general.jpg", categoria: "suplementos", precio: 25000, proveedor: "sport line" },
    { id: 34, nombre: "Toalla de microfibra", stock: 20, img: "../IMG/toalla.jpg", categoria: "deportivo", precio: 20000, proveedor: "sport line" },
    { id: 35, nombre: "Banda elástica", stock: 30, img: "../IMG/ligas.jpg", categoria: "deportivo", precio: 12000, proveedor: "sport line" },
    { id: 36, nombre: "Cuerda para saltar", stock: 25, img: "../IMG/cuerda.jpg", categoria: "deportivo", precio: 25000, proveedor: "sport line" },
    { id: 37, nombre: "Rodillo de espuma", stock: 20, img: "../IMG/rodillo.jpg", categoria: "deportivo", precio: 35000, proveedor: "sport line" },
    { id: 38, nombre: "Balón medicinal 5 kg", stock: 10, img: "../IMG/balon.jpg", categoria: "deportivo", precio: 45000, proveedor: "sport line" },
    { id: 39, nombre: "Banda de compresión", stock: 18, img: "../IMG/ligas.jpg", categoria: "deportivo", precio: 30000, proveedor: "sport line" },
    { id: 40, nombre: "Banda de resistencia alta", stock: 15, img: "../IMG/ligas.jpg", categoria: "deportivo", precio: 40000, proveedor: "sport line" },
  ];

  //localStorage.setItem('productos', JSON.stringify(productos));

document.addEventListener('DOMContentLoaded', () => {
  const productosGuardados = JSON.parse(localStorage.getItem('productos'));
  const catalogo = document.querySelector('.catalogo');
  const aside = document.querySelector('aside');
  aside.classList.add('oculto');

  let productosCargados = 0; // Contador de productos cargados
  const productosPorPagina = 15;

  // Función para cargar los productos
  function cargarProductos() {
    const productosParaMostrar = productosGuardados.slice(productosCargados, productosCargados + productosPorPagina);
    
    if (productosParaMostrar.length === 0) {
      alert("No hay más productos para mostrar.");
      window.removeEventListener('scroll', scrollInfinito);
      return; // Detenemos la ejecución si no hay más productos
    }

    productosParaMostrar.forEach(producto => {
      const article = document.createElement('article');
      article.classList.add('producto');

      article.innerHTML = `
          <img src="${producto.img}" alt="${producto.nombre}">
          <p>${producto.nombre}</p>
          <p>Precio: $${producto.precio.toLocaleString('es-CO')}</p>
          <p>Stock: ${producto.stock}</p>
          <button class="ver-detalles" data-id="${producto.id}">Ver más detalles</button>
      `;

      catalogo.appendChild(article);
    });

    productosCargados += productosPorPagina; // Aumentamos el contador
  }

  // Función para manejar el evento de scroll
  function scrollInfinito() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      cargarProductos(); // Cargar más productos al hacer scroll
    }
  }

  // Agregamos el evento de scroll al window
  window.addEventListener('scroll', scrollInfinito);

  // Cargamos los primeros productos
  cargarProductos();

  const botonesDetalles = document.querySelectorAll('.ver-detalles');
  botonesDetalles.forEach(boton => {
    boton.addEventListener('click', (e) => {
      const idProducto = e.target.getAttribute('data-id');
      const productoSeleccionado = productosGuardados.find(p => p.id == idProducto);
      mostrarDetallesProducto(productoSeleccionado);
      aside.classList.remove('oculto'); 
    });
  });
});

function mostrarDetallesProducto(producto) {
  if (producto) { 
    document.getElementById('imagenGrande').src = producto.img;
    document.getElementById('nombreArtGrande').textContent = producto.nombre;
    document.getElementById('proveedor').textContent = `${producto.proveedor}`;
    document.getElementById('stockGrande').textContent = `Stock: ${producto.stock}`;
    document.getElementById('idProducto').textContent = `ID: ${producto.id}`;
    document.getElementById('precioGrande').textContent = `Precio: $${producto.precio.toLocaleString('es-CO')}`;
    document.getElementById('categoria').textContent = `Categoría: ${producto.categoria}`;
  } else {
    console.error('Producto no encontrado');
  }
}