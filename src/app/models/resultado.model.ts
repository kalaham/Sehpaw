export class Resultado{
    constructor(
        public nombreSitio:string,
        public urlSitio:string,
        public heuristicas?:[string],
        public evaluadores?:[string],
        public coordinador?:string,
        public fecha?:string,
    ){}
}