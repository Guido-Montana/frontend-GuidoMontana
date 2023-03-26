export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    descripccion: string;
    img: string;


    constructor(nombre: string, apellido: string, descripccion: string ,img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripccion=descripccion;
        this.img = img;
    }
    
}