export class persona{
    id?: number;
    nombre: string;
    apellido:string;
    img:string;
    posicion:string;
    descripcion:string;
    foto:string;

    constructor(nombre: string,apellido: string,img: string,posicion: string, descripcion: string, foto:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.posicion = posicion;
        this.descripcion = descripcion;
        this.foto = foto;
    }
}