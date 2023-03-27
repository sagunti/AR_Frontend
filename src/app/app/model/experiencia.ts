export class Experiencia {
         id! : number;
         nombreE : string;
         gitHub : string;
         url : string;
         imagen : string;
        
         constructor(nombreE: string, gitHub: string, url:string, imagen:string){
            this.nombreE = nombreE;
            this.gitHub = gitHub;
            this.url = url;
            this.imagen = imagen;
         }
        
        
}
