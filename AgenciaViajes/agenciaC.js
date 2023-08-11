

const userData = () =>{
    let arrayData=[];
    let userInfo = {
        destiny: document.getElementById("destiny").value.toUpperCase(),
        origin: document.getElementById("origin").value,
        hosts: document.getElementById("hosts").value,
        date: document.getElementById("date").value,
        name: document.getElementById("name").value.toUpperCase(),
        email: document.getElementById("email").value
    }

    arrayData.push(userInfo);
    // document.getElementById("myform").reset();
    console.log(arrayData);
    return arrayData;
};

const sendData = () =>{
    document.getElementById("printButton").textContent="";
    let arrayData = userData();
    let mensaje = `${arrayData.name} gracias por contactar con Trave, con la mayor brevedad posible nuestros agentes se pondrán en contacto con usted`
    if(arrayData[0].destiny.trim() === "" ||
        arrayData[0].origin.trim() === "" ||
        arrayData[0].hosts.trim() === "" ||
        arrayData[0].date.trim() === "" ||
        arrayData[0].name.trim() === "" ||
        arrayData[0].email.trim() === ""
    ){
        document.getElementById("printButton").append("Debe rellenar todos los campos para que podamos contactar con usted");
    }else{
        document.getElementById("printButton").append(mensaje);
    }

};

const filter = () =>{
    let arrayData = userData();
    let mostrar = arrayData.filter(city => 
                            city.destiny.toLowerCase() == "mallorca" ||
                            city.destiny.toUpperCase() == "canarias" || 
                            city.destiny.toUpperCase() == "galicia");
    let stringMostrar = "";

    for(let dato of mostrar){
        console.log(dato.name);
        stringMostrar += `${dato.name} el destino ${dato.destiny} 
                          con fecha de vuelta el ${dato.date} tiene plazas disponibles para
                          ${dato.hosts} personas.`
    }
    console.log(stringMostrar);
    document.getElementById("printButton").append(stringMostrar);
};
