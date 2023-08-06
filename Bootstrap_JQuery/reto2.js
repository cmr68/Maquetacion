let pantalonGris = {type: "Pantalón suelto gris", price: 20};
let vestidoTunico = {type: "Vestido Túnico", price: 18}
let array = [];


jQuery(() => {
    
    //Añade en el array el pantalon gris cuando haga click en "Añadir al carrito"
    $("#pantalonGris").on("click",() => {
        array.push(pantalonGris);
    });

    //Añade en el array el vestido tunico cuando haga click en "Añadir al carrito"
    $("#vestidoTunico").on("click",() => {
        array.push(vestidoTunico);
    });
    //Darle un id a CARRITO 
    //recorrer array en CARRITO para mostrar lista de 
    //prendas y sume el total de los precios y lo muestre(.apped)
    $("#carrito").on("click",() => {
        $("#carrito-contenido").empty();
        let total = 0;
        for(prenda of array){
            total += prenda.price;

            //Elemento <p> con nombre y precio
            let item = $("<p>").text("PRENDA: " + prenda.type + prenda.price + "€");
            //Agregar elemento al contenedor
            $("#carrito-contenido").append(item);
        }
        $("#carrito-contenido").append($("<p>").text("TOTAL COMPRA: " + total + "€"))
        $("#carrito-contenido").toggle();
    })
});