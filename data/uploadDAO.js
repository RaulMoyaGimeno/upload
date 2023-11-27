class UploadDAO {

    getAll() {
        const json = localStorage.getItem("upload");
        let uploads = JSON.parse(json) || [];
        if (!Array.isArray(uploads)) {
            uploads = [uploads];
        }
        uploads = uploads.map(upload => {
            let upl = new Sujeto(
                upload.nombre,
                upload.tipo,
                upload.direccion,
                upload.fechaDescarga,
                upload.culpabilidad,
                upload.img,
                upload.comentarios,
            );
            upl.setID(upload.uuid);
            return upl;
        });
        return uploads;
    }

    add(upload) {
        const uploads = this.getAll();
        uploads.push(upload);
        localStorage.setItem("upload", JSON.stringify(uploads));
    }

    getSujetoById(id) {
        const uploads = this.getAll();
        return uploads.find(upload => upload.uuid == id);
    }

    edit(upload) {
        let uploads = this.getAll();
        console.log(uploads);
        uploads = uploads.map(upl => {
            if(upl.uuid == upload.uuid) {
                return upload;
            }
            return upl;
        })
        localStorage.setItem("upload", JSON.stringify(uploads));
    }
}