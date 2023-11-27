class Sujeto {
    
    constructor(nombre, tipo, direccion, fechaDescarga, culpabilidad, img, comentarios) {
        this.uuid = crypto.randomUUID();
        this.nombre = nombre;
        this.tipo = tipo;
        this.direccion = direccion;
        this.fechaDescarga = fechaDescarga;
        this.culpabilidad = culpabilidad;
        this.img = img;
        this.comentarios = comentarios;
    }

    setID(id) {
        this.uuid = id;
    }
}