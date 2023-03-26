export class Skill {
    id: number;
    nombre: string;
    color: string;
    tfuente: string;
    porcentaje: number;

    constructor(nombre:string,color: string,tfuente:string, porcentaje: number, ){
        this.nombre = nombre;
        this.color= color;
        this.tfuente= tfuente;
        this.porcentaje = porcentaje;

    }
}