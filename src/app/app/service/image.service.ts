import { Injectable } from '@angular/core';
import { Storage, ref,uploadBytes, list, getDownloadURL} from '@angular/fire/Storage'
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url:string ="";
  urlfoto:string="";
  urlImg:string="";
  nombre:string="";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage,'imagen/'+ name);
    this.nombre = name;
    uploadBytes(imgRef,file)
    .then(response => {this.getImages()})
    .catch(error => console.log(error)
    
    )
  }
  getImages(){
    const imagesRef = ref(this.storage,'imagen')
    list (imagesRef)
    .then(async response =>{
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        if(this.nombre == item.name){
          this.urlImg = this.url;
        }
        console.log(" La URL es: "+ this.url);
      }
    })
    .catch(error => console.log(error))
  }
  public uploadFoto($event: any, name: string){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage,'foto/'+ name);
    uploadBytes(imgRef,file)
    .then(response => {this.getFoto()})
    .catch(error => console.log(error)
    
    )
  }
  getFoto(){
    const imagesRef = ref(this.storage,'foto')
    list (imagesRef)
    .then(async response =>{
      for(let item of response.items){
        this.urlfoto = await getDownloadURL(item);
        console.log(" La URL es: "+ this.urlfoto);
      }
    })
    .catch(error => console.log(error))
  }

  deleteImage(img: string): void {

  }
  clearUrl() {
    this.url = "";
    this.urlImg = "";
  }
}


