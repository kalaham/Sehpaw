export class Heuristicas{
    constructor(
        public indice:string,
        public heuristica:string,
        public pregunta:string,        
        public nivelConformidad:string,        
        public ejemplo:[string],        
        public referencia:[string],        
        public autor:string,        
        public principio:string,        
        public _id?:String
    ){}
}