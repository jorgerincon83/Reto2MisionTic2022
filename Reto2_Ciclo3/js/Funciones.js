function traerInformacion(){
    $.ajax({
        url: "https://g66ea69bd9e809e-tbbilhm3csz8akvq.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta);
            mostrarRespuesta(respuesta.items);
        }
    });

}

function mostrarRespuesta(items){
    let tabla = `<table border="2" >
    <tr>
        
        <th style="background-color:DodgerBlue">Id</th>
        <th style="background-color:DodgerBlue">Name</th>
        <th style="background-color:DodgerBlue">Email</th>
        <th style="background-color:DodgerBlue">Age</th>
        <th style="background-color:DodgerBlue">Accion</th>
        
        
    </tr>`;
    for(i=0;i<items.length;i++){
        tabla += "<tr>";
        tabla += "<td >"+items[i].id+"</td>";
        tabla += "<td>"+items[i].name+"</td>"; 
        tabla += "<td>"+items[i].email+"</td>";
        tabla += "<td>"+items[i].age+"</td>";
        tabla += "<td ><button onclick='borrarElemento("+items[i].id+")'> Borrar </button>";
        tabla += "</tr>"
    }
    tabla += "</table>";
    $("#resultado").append(tabla);

}
function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g66ea69bd9e809e-tbbilhm3csz8akvq.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacion();
            alert("Se ha guardado el registro")
        }
    });
}function editarInformacion(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g66ea69bd9e809e-tbbilhm3csz8akvq.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacion();
            alert("Se ha Actualizado el registro")
        }
    });
}
function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g66ea69bd9e809e-tbbilhm3csz8akvq.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha Eliminado el registro")
        }
    });
}

// Tabla Messages
function InformacionMessage(){
    $.ajax({
        url: "https://g66ea69bd9e809e-tbbilhm3csz8akvq.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta1){
            console.log(respuesta1);
            mostrarRespuesta1(respuesta1.items);
        }
    });

}
function mostrarRespuesta1(items){
    let tabla = `<table border="2">
    <tr>
        <th style="background-color:DodgerBlue">Id</th>
        <th style="background-color:DodgerBlue">MessageText</th>
        <th style="background-color:DodgerBlue">Accion</th>
        
        
    </tr>`;
    for(i=0;i<items.length;i++){
        tabla += "<tr>";
        tabla += "<td>"+items[i].id+"</td>";
        tabla += "<td>"+items[i].messagetext+"</td>"; 
        tabla += "<td><button onclick='borrarElemento1("+items[i].id+")'>Borrar Mensaje</button>";
        tabla += "</tr>"
    }
    tabla += "</table>";
    $("#resultado1").append(tabla);

}
function guardarInformacion1(){
    let myData={
        id:$("#idmessage").val(),
        messagetext:$("#message").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g66ea69bd9e809e-tbbilhm3csz8akvq.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta1){
            $("#resultado1").empty();
            $("#idmessage").val("");
            $("#message").val("");
            InformacionMessage();
            alert("Se ha guardado el Mensaje")
        }
    });
}
function editarInformacion1(){
    let myData={
        id:$("#id").val(),
        messagetext:$("#message").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g66ea69bd9e809e-tbbilhm3csz8akvq.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta1){
            $("#resultado1").empty();
            $("#id").val("");
            $("#message").val("");
            InformacionMessage();
            alert("Se ha Actualizado el Mensaje")
        }
    });
}

function borrarElemento1(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g66ea69bd9e809e-tbbilhm3csz8akvq.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta1){
            $("#resultado1").empty();
            InformacionMessage();
            alert("Se ha Eliminado el Mensaje")
        }
    });
}
////funciones tabla quadbike
function InformacionQuadbike(){
    $.ajax({
        url: "https://g66ea69bd9e809e-tbbilhm3csz8akvq.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/quadbike/quadbike",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta2){
            console.log(respuesta2);
            mostrarRespuesta2(respuesta2.items);
        }
    });

}
function mostrarRespuesta2(items){
    let tabla = `<table border="2", >
    <tr>
        <th style="background-color:DodgerBlue">Id</th>
        <th style="background-color:DodgerBlue">Brand</th>
        <th style="background-color:DodgerBlue">Model</th>
        <th style="background-color:DodgerBlue">Category_id</th>
        <th style="background-color:DodgerBlue">Name</th>
        <th style="background-color:DodgerBlue">Accion</th>
        
        
    </tr>`;
    for(i=0;i<items.length;i++){
        tabla += "<tr>";
        tabla += "<td>"+items[i].id+"</td>"; style="background-color:DodgerBlue"
        tabla += "<td>"+items[i].brand+"</td>";
        tabla += "<td>"+items[i].model+"</td>";
        tabla += "<td>"+items[i].category_id+"</td>";
        tabla += "<td>"+items[i].name+"</td>";
        tabla += "<td><button onclick='borrarElemento2("+items[i].id+")'>Borrar Quadbike</button>";
        tabla += "</tr>"
    }
    tabla += "</table>";
    $("#resultado2").append(tabla);

}
function guardarInformacion2(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g66ea69bd9e809e-tbbilhm3csz8akvq.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/quadbike/quadbike",
        type:"POST",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta2){
            $("#resultado2").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            InformacionQuadbike();
            alert("Se ha guardado el registro en  Quadbike")
        }
    });
}
function editarInformacion2(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g66ea69bd9e809e-tbbilhm3csz8akvq.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/quadbike/quadbike",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta2){
            $("#resultado2").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            InformacionQuadbike();
            alert("Se ha Actualizado el registro en  Quadbike")
        }
    });
}
function borrarElemento2(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g66ea69bd9e809e-tbbilhm3csz8akvq.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/quadbike/quadbike",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta2){
            $("#resultado2").empty();
            InformacionQuadbike();
            alert("Se ha Eliminado el registro en  Quadbike")
        }
    });
}