let pantalonGris = {type: "Pantalón suelto gris", price: 20};
let vestidoTunico = {type: "Vestido Túnico", price: 18}
let faldaMid = {type: "Falda Mid Print", price: 12}
let cardigan = {type: "Cardigan Largo Rayas", price: 18}
let faldaMin = {type: "Falda Mini Zebra", price: 15}
let monoOv = {type: "Mono Overol", price: 26}
let vetidoJe = {type: "Vestido Jersey", price: 25}
let pantalonA = {type: "Pantalón Ancho", price: 20}
let array = [];


jQuery(() => {
    
    //Añade en el array las prendas cuando haga click en "Añadir al carrito"
    $("#pantalonGris").on("click",() => {
        array.push(pantalonGris);
    });

    $("#vestidoTunico").on("click",() => {
        array.push(vestidoTunico);
    });

    $("#faldaMid").on("click",() => {
        array.push(faldaMid);
    });
    $("#cardigan").on("click",() => {
        array.push(cardigan);
    });
    $("#faldaMin").on("click",() => {
        array.push(faldaMin);
    });
    $("#monoOv").on("click",() => {
        array.push(monoOv);
    });
    $("#vetidoJe").on("click",() => {
        array.push(vetidoJe);
    });
    $("#pantalonA").on("click",() => {
        array.push(pantalonA);
    });
    

    $("#carritoBT").on("click",() => {
        $("#listaCompra").modal("show");
        let total = 0;
        for(prenda of array){
            $("#total").append("PRENDA: " + prenda.type + " " +prenda.price + "€<br>")

            total += prenda.price;
        }
        $("#list").append("<p> TOTAL COMPRA: " + total + "€</p>");
    })
});