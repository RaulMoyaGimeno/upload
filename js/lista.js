const dao = new UploadDAO();

function addLista() {
    const uploads = dao.getAll();
    const ul = document.getElementById("list");
    uploads.forEach(upload => ul.appendChild(createCard(upload)));
}

function createCard(upload) {
    const li = document.createElement("li");
    li.className = "container " + upload.tipo + " " + upload.culpabilidad;

    const firstRow = document.createElement("div");
    firstRow.className = "row";
    
    const img = document.createElement("img");
    img.src = upload.img;
    img.addEventListener("error", () => img.src = '../img/null.jpg');
    
    firstRow.appendChild(img);
    
    const column = document.createElement("div");
    column.className = "column";
    const nombre = document.createElement("p");
    nombre.className = "row nombre";
    nombre.innerText = upload.nombre;
    column.appendChild(nombre);
    if(upload.fechaDescarga !== null) {
        const fecha = document.createElement("p");
        fecha.className = "row";
        fecha.innerText = upload.fechaDescarga;
        column.appendChild(fecha);
    }
    firstRow.appendChild(column);
    li.appendChild(firstRow);
    const comentarios = document.createElement("pre");
    comentarios.className = "row"
    comentarios.innerText = upload.comentarios;
    li.appendChild(comentarios);
    const button = document.createElement("button");
    button.addEventListener("click", () => location.href = "nuevo.html?id=" + upload.uuid);
    button.innerText = "Editar";
    li.appendChild(button);
    return li;
}

if(dao.getAll().length == 0) {
    const david = new Sujeto(
        "David Choak",
        "vivo",
        "Su casa",
        null,
        "perpetrador",
        "../img/david.jpg",
        "Heeey"
    );
    console.log(david);
    dao.add(david);
}
addLista();