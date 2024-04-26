let tableMascotas;
let rowTable = "";
let divLoading = document.querySelector("#divLoading");
let rutaPDFanalisis = "";
document.addEventListener("DOMContentLoaded", function () {
    fntCreateNota();
    cargarComentarios();
    // console.log(idHistorial)
},false);
function openModalAnalisis(){

    $("#modalHistorialAnalisis").modal("show");
};
function openModalConsulta(){
    $("#modalHistorialConsulta").modal("show");
};

function verPDF_ana(){
    baseURL
    document.getElementById("idframePDF").src = baseURL+"/Assets/documents/uploads/"+rutaPDFanalisis;
    $("#modalVerpdf").modal("show");
};

function fntViewInfo(idcliente){
    let request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    let ajaxUrl = base_url+'/Clientes/getCliente/'+idcliente;
    request.open("GET",ajaxUrl,true);
    request.send();
    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
            let objData = JSON.parse(request.responseText);
            if(objData.status)
            {
                document.querySelector("#celIdentificacion").innerHTML = objData.data.identificacion;
                document.querySelector("#celNombre").innerHTML = objData.data.nombres;
                document.querySelector("#celApellido").innerHTML = objData.data.apellidos;
                document.querySelector("#celTelefono").innerHTML = objData.data.telefono;
                document.querySelector("#celEmail").innerHTML = objData.data.email_cliente;
                document.querySelector("#celDireccion").innerHTML = objData.data.direccion;
                document.querySelector("#celNota").innerHTML = objData.data.nota;
                $srtEstado = "Inactivo";
                if(objData.data.status == 1){$srtEstado = "Activo"};
                document.querySelector("#celStatus").innerHTML = $srtEstado;
                document.querySelector("#celFechaRegistro").innerHTML = objData.data.fechaRegistro;
                $('#modalViewCliente').modal('show');
            }else{
                swal("Error", objData.msg , "error");
            }
        }
    }
}

function fntVacuna(idvacuna){
    let request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    let ajaxUrl = base_url+'/Clinica/getVacuna/'+idvacuna;
    request.open("GET",ajaxUrl,true);
    request.send();
    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
            let objData = JSON.parse(request.responseText);
            if(objData.status)
            {
                // Datos de VAcuna
                document.querySelector("#idhistorial_vacuna").value = objData.data.historialid;
                document.querySelector("#idvacuna").value = objData.data.idvacuna;
                document.querySelector("#txtVacuna").value = objData.data.vacuna;
                document.querySelector("#txtDosis").value = objData.data.dosis;
                document.querySelector("#txtCodigo").value = objData.data.codigo;
                document.querySelector("#txtNotas").value = objData.data.nota;

                document.getElementById("persona_nom_vacuna").innerText = objData.data.p_nombre + " " + objData.data.p_apellidos;
                document.getElementById("fecha_vacuna").innerText = objData.data.fecha;
                let miEnlace = document.getElementById("ImprimirVacuna");
                miEnlace.target = "_blank";
                miEnlace.href = baseURL+"/documento/printVacuna/"+objData.data.idvacuna;
                // DAtos de la ficha
                // document.getElementById("hl_dueño_va").innerText = objData.data.c_nombres + " " + objData.data.c_apellidos;
                // // document.getElementById("hl_dni_va").innerText = objData.data.identificacion;
                // // document.getElementById("hl_correo_va").innerText = objData.data.email_cliente;
                // document.getElementById("hl_telefono_va").innerText = objData.data.c_telefono;

                // document.getElementById("hl_mascota_va").innerText = objData.data.m_nombre;
                // document.getElementById("hl_especie_va").innerText = objData.data.especie;
                // document.getElementById("hl_sexo_va").innerText = objData.data.sexo;
                // document.getElementById("hl_raza_va").innerText = objData.data.raza;


            }
        }
        $('#modalHistorialVacuna').modal('show');
    }
}
function fntAnalisis(idana){
    let request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    let ajaxUrl = base_url+'/Clinica/getAnalisis/'+idana;
    request.open("GET",ajaxUrl,true);
    request.send();
    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
            let objData = JSON.parse(request.responseText);
            if(objData.status)
            {
                document.querySelector("#idhistorial_analisis").value = objData.data.historialid;
                document.querySelector("#idanalisis").value = objData.data.idanalisis;
                document.querySelector("#txtAnalisis").value = objData.data.tipo;
                document.querySelector("#txtDiagnostico_ana").value = objData.data.diagnostico;
                document.querySelector("#txtTratamiento_ana").value = objData.data.tratamiento;
                rutaPDFanalisis = objData.data.rutafile;
                // Obtén una referencia al enlace <a>
                let miEnlace = document.getElementById("ImprimirAnalisis");
                miEnlace.target = "_blank";
                miEnlace.href = baseURL+"/documento/printAnalisis/"+objData.data.idanalisis;
                // DAtos de la ficha
                document.getElementById("persona_nom_analisis").innerText = objData.data.p_nombre + " " + objData.data.p_apellidos;
                // document.getElementById("hl_dni_va").innerText = objData.data.identificacion;
                // document.getElementById("hl_correo_va").innerText = objData.data.email_cliente;
                document.getElementById("fecha_analisis").innerText = objData.data.fecha;
            }
        }
        $('#modalHistorialAnalisis').modal('show');
    }
}
function fntConsulta(idcon){
    let request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    let ajaxUrl = base_url+'/Clinica/getConsulta/'+idcon;
    request.open("GET",ajaxUrl,true);
    request.send();
    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
            let objData = JSON.parse(request.responseText);
            if(objData.status)
            {
                document.querySelector("#idhistorial_consulta").value = objData.data.historialid;
                document.querySelector("#idconsulta").value = objData.data.idconsulta;
                document.querySelector("#txtPeso").value = objData.data.peso;
                document.querySelector("#txtTemperatura").value = objData.data.temperatura;
                document.querySelector("#txtRespiracion").value = objData.data.frecuencia;
                document.querySelector("#txtMotivo").value = objData.data.motivo;
                document.querySelector("#txtAnamnesis").value = objData.data.anamnesis;
                document.querySelector("#txtDiagnostico").value = objData.data.diagnostico;
                document.querySelector("#txtTratamiento").value = objData.data.tratamiento;
                rutaPDFanalisis = objData.data.rutafile;
                // Obtén una referencia al enlace <a>
                let miEnlace = document.getElementById("ImprimirConsulta");
                miEnlace.target = "_blank";
                miEnlace.href = baseURL+"/documento/printConsulta/"+objData.data.idconsulta;
                // DAtos de la ficha
                document.getElementById("persona_nom_consulta").innerText = objData.data.p_nombre + " " + objData.data.p_apellidos;
                // document.getElementById("hl_dni_va").innerText = objData.data.identificacion;
                // document.getElementById("hl_correo_va").innerText = objData.data.email_cliente;
                document.getElementById("fecha_consulta").innerText = objData.data.fecha;
            }
        }
        $('#modalHistorialConsulta').modal('show');
    }
}
function cleanModal(){
    $("#modalHistorialComentarios").modal("hide");
}
function openModalComentario(idnota){
    let request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    let ajaxUrl = base_url+'/Clinica/getNota/'+idnota;
    request.open("GET",ajaxUrl,true);
    request.send();
    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
            let objData = JSON.parse(request.responseText);
            if(objData.status)
            {
                document.querySelector("#idhistorial_notas").value = objData.data.historialid;
                // document.querySelector("#idpersona").value = objData.data.historialid;
                document.querySelector("#idnota").value = objData.data.idnota;
                document.getElementById('tipoComentario').innerHTML = "Comentario";
                document.getElementById("txtfecha_comenta").innerText = objData.data.fecha;
                document.getElementById("txtComentario").innerText = objData.data.nota;
                $('#btnguardar').hide();
                let idpersona = objData.data.personaid;
                
                if(idpersona == usuario){
                    $('#btnEliminar').show();
                }else{
                    $('#btnEliminar').hide();
                }
            }
        }
        $("#modalHistorialComentarios").modal("show");
    }
};

function newComentario(hitoria){
    document.querySelector("#idhistorial_notas").value = hitoria;
    document.querySelector("#idnota").value = "";
    document.getElementById('tipoComentario').innerHTML = "Agregar Comentario";
    document.getElementById("txtfecha_comenta").innerText = "";
    document.getElementById("txtComentario").innerText ="";
    $("#modalHistorialComentarios").modal("show");
    $('#btnguardar').show();
    $('#btnEliminar').hide();
    // document.getElementById('nombre_del_elemento').style.display = 'none';
};
function fntCreateNota() {
    if (document.querySelector("#formNotas")) {
      let formNota = document.querySelector("#formNotas");
      formNota.onsubmit = function (e) {
        e.preventDefault();
        divLoading.style.display = "flex";
        let request = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        let ajaxUrl = base_url + "/Clinica/setNota"; // lo envia esta dirección
        let formData = new FormData(formNota);
        request.open("POST", ajaxUrl, true);
        request.send(formData);
        request.onreadystatechange = function () {
          if (request.readyState == 4 && request.status == 200) {
            let objData = JSON.parse(request.responseText);
            if (objData.status) {
              $("#modalHistorialComentarios").modal("hide");
              formNota.reset();
              swal("Comentario", objData.msg, "success");
            //    location.reload(true);
            cargarComentarios();
            } else {
              swal("Error", objData.msg, "error");
            }
          }
          divLoading.style.display = "none";
          return false;
        };
      };
    }
  }

  function fntDelComentario(id_mascota){
    idnota = document.querySelector("#idhistorial_notas").value
    swal({
        title: "Eliminar el Comentario",
        text: "¿Realmente quiere eliminar a la Mascota?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar!",
        cancelButtonText: "No, cancelar!",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function(isConfirm) {
        if (isConfirm) 
        {
            let request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            let ajaxUrl = base_url+'/Clinica/delNota';
            let strData = "idnota="+idnota;
            request.open("POST",ajaxUrl,true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send(strData);
            request.onreadystatechange = function(){
                if(request.readyState == 4 && request.status == 200){
                    let objData = JSON.parse(request.responseText);
                    if(objData.status)
                    {
                        swal("Eliminado!", objData.msg , "success");
                    }else{
                        swal("Atención!", objData.msg , "error");
                    }
                }
            }
        }

    });
}

function cargarComentarios() {
    let url = base_url+'/Clinica/getComentarios/'+idHistorial;
    const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                const comentarios = JSON.parse(xhr.responseText);
                mostrarComentarios(comentarios);
            } else {
                console.error('Error al obtener los comentarios');
            }
        };
        xhr.send();
}

function mostrarComentarios(comentarios) {
    const container = document.getElementById('comentariosContainer');
    container.innerHTML = '';
    comentarios.forEach(comentario => {
        const card = document.createElement('div');
        let comentador = comentario.nombres+" "+comentario.apellidos;
        card.className = 'card';
        card.innerHTML = `
                        <div onclick="openModalComentario(${comentario.idnota});" class="list-group-item list-group-item-action flex-column align-items-start">
                            <p class="mb-1">"${comentario.nota}"</p>
                            <div class="d-flex w-100 justify-content-between">
                                <small class="text-muted">${comentador}</small>
                                <small class="text-muted">${comentario.fecha}</small>
                            </div>
                        </div>
        `;
        container.appendChild(card);
    });
}
