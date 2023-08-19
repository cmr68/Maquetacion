

const userData = () =>{
    let arrayData=[];
    let userInfo = {
        destiny: document.getElementById("destiny").value.toUpperCase(),
        origin: document.getElementById("origin").value,
        hosts: document.getElementById("hosts").value,
        date1: document.getElementById("date1").value,
        date2: document.getElementById("date2").value,
        name: document.getElementById("name").value.toUpperCase(),
    }

    arrayData.push(userInfo);
    console.log(arrayData);
    return arrayData;
};

const sendData = () =>{
    // document.getElementById("printButton").innerHTML = "<p></p>";
    let arrayData = userData();
    let mensaje = `${arrayData[0].name} gracias por contactar con Trave, con la mayor brevedad posible nuestros agentes se pondrán en contacto con usted.`+ "<br>";
    if(arrayData[0].destiny.trim() === "" ||
        arrayData[0].origin.trim() === "" ||
        arrayData[0].hosts.trim() === "" ||
        arrayData[0].date1.trim() === "" ||
        arrayData[0].date2.trim() === "" ||
        arrayData[0].name.trim() === "" 
    ){
        document.getElementById("printButton").innerHTML = "<p>Debe rellenar todos los campos para que podamos contactar con usted</p>";
    }else{
        //que borre el mensaje anterior si 
        // document.getElementById("printButton").innerHTML = `${arrayData[0].name} gracias por contactar con Trave, con la mayor brevedad posible nuestros agentes se pondrán en contacto con usted.`;
        document.getElementById("printButton").innerHTML = `${arrayData[0].name} gracias por contactar con Trave, con la mayor brevedad posible nuestros agentes se pondrán en contacto con usted.`;
    }
    // document.getElementById("myform").reset();
};


const filter = () =>{
    let arrayData = userData();
    console.log(arrayData);
    let mostrar = arrayData.filter(city => 
                            city.destiny == "MALLORCA" ||
                            city.destiny == "CANARIAS" || 
                            city.destiny == "GALICIA");
    
    let stringMostrar = "";
    console.log("mostrar", mostrar);

    if(mostrar.length==0){
        stringMostrar += `Lamentamos informarle que en estos momentos no disponemos
        de viajes con destino a los lugares seleccionados. <br><br>`
    }else{
        for(let dato of mostrar){
            console.log(dato.name);
            stringMostrar += `Le informamos que el viaje con destino a ${dato.destiny} 
                            con fecha del ${dato.date1} al ${dato.date2} tiene plazas disponibles para
                            ${dato.hosts} personas. <br><br>`
        }
    }
    
    console.log(stringMostrar);
    // document.getElementById("printButton").append(stringMostrar);
    const printButton = document.getElementById('printButton');
    printButton.innerHTML = stringMostrar;
    printButton.innerHTML += '<button id="cerrar" class="close">Close</button>'

};

const modal_container = document.getElementById('modal_container');
const cerrar = document.getElementById('cerrar');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', ()=> {
    modal_container.classList.add('show');
});
cerrar.addEventListener('click', ()=> {
    modal_container.classList.remove('show');
});

