let carrito = [];

// Mostrar / ocultar carrito
function toggleCarrito() {
  const carritoEl = document.getElementById("carrito");
  carritoEl.classList.toggle("open");
}

// Agregar producto al carrito
function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

// Eliminar producto del carrito
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

// Actualizar vista del carrito
function actualizarCarrito() {
  const contenedor = document.getElementById("carrito-items");
  const totalSpan = document.getElementById("total-carrito");
  const contador = document.getElementById("contador-carrito");

  contenedor.innerHTML = "";

  let total = 0;
  carrito.forEach((item, index) => {
    total += item.precio;
    contenedor.innerHTML += `
      <div class="d-flex justify-content-between align-items-center mb-2">
        <span>${item.nombre} - S/. ${item.precio.toFixed(2)}</span>
        <button class="btn btn-sm btn-danger" onclick="eliminarDelCarrito(${index})">❌</button>
      </div>
    `;
  });

  if (carrito.length === 0) {
    contenedor.innerHTML = `<p class="text-muted">Tu carrito está vacío</p>`;
  }

  totalSpan.textContent = total.toFixed(2);
  contador.textContent = carrito.length;
}

// Simular compra
function checkout() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío 😅");
  } else {
    alert("Gracias por tu compra en HAZZZN 🖤 Total: S/. " + carrito.reduce((sum, i) => sum + i.precio, 0).toFixed(2));
    carrito = [];
    actualizarCarrito();
    toggleCarrito();
  }
}
