$(document).ready(function() {

    // Agregar producto al carrito
    $(".btnAgregar").click(function() {

        let producto = {
            nombre: $(this).data("nombre"),
            precio: parseInt($(this).data("precio")),
            img: $(this).data("img")
        };

        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        carrito.push(producto);

        localStorage.setItem("carrito", JSON.stringify(carrito));

        alert("Producto agregado al carrito");
    });


    // Mostrar carrito en carrito.html
    if ($("#tablaCarrito").length) {

        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        let total = 0;

        carrito.forEach(item => {
            $("#tablaCarrito").append(`
                <tr>
                    <td>${item.nombre}</td>
                    <td>$${item.precio}</td>
                    <td><img src="${item.img}" width="80"></td>
                </tr>
            `);
            total += item.precio;
        });

        $("#total").text(total);
    }


    // Vaciar carrito
    $("#vaciarCarrito").click(function() {
        localStorage.removeItem("carrito");
        location.reload();
    });

});
