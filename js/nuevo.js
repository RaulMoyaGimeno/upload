const dao = new UploadDAO();
const urlParams = new URLSearchParams(window.location.search);
const parametro1 = urlParams.get('id');

function guardarSujeto() {
    if(!document.getElementById("form").checkValidity()){
        return;
    }

    const nombre = document.getElementById("nombre").value;
    const tipo = document.getElementById("vivo").checked ? "vivo" : "descargado";
    const direccion  = document.getElementById("direccion").value;
    const fechaDescarga = document.getElementById("fechaDescarga").value;
    const culpabilidad = document.getElementById("culpabilidad").value;
    const img = document.getElementById("img").value || null;
    const comentarios = document.getElementById("comentarios").value;
    const upload = new Sujeto(
        nombre,
        tipo,
        direccion,
        fechaDescarga,
        culpabilidad,
        img,
        comentarios
    )
    if(parametro1) {
        upload.setID(parametro1);
        dao.edit(upload);
    } else dao.add(upload);
    location.href = "listado.html";
}

function habilitarFecha() {
    fechaInput = document.getElementById("fechaDescarga")
    vivo = document.getElementById("vivo");
    fechaInput.disabled = vivo.checked;
    fechaInput.required = !vivo.checked;
}

function fechaMaximaHoy(){
    var today = new Date().toISOString().split('T')[0];

    document.getElementById('fechaDescarga').setAttribute('max', today);
}

fechaMaximaHoy();

if(parametro1) {
     const upload = dao.getSujetoById(parametro1);
     editar(upload);
}

function editar(upload) {
    document.getElementById("nombre").value = upload.nombre;
    document.getElementById("vivo").checked = upload.tipo == "vivo";
    document.getElementById("direccion").value = upload.direccion;
    document.getElementById("fechaDescarga").value = upload.fechaDescarga ?? "";
    document.getElementById("culpabilidad").value = upload.culpabilidad;
    document.getElementById("img").value = upload.img ?? "";
    document.getElementById("comentarios").value = upload.comentarios ?? "";
}