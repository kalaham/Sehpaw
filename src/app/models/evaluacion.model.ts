export class Evaluacion{
    constructor(
        public coordinador:any,
        public fecha:Date,
        public nombreSitio:string,        
        public urlSitio:string,        
        public evaluadores:Array<string>,        
        public heuristicas:Array<string>,        
        public estado:boolean,        
        public _id?:String
    ){}
}
