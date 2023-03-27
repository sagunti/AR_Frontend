import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ImageService } from 'src/app/service/image.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string ='';
  github: string= '';
  url:string='';
  imagen:string='';
  constructor(private sExperiencia:SExperienciaService, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.clearUrl(); 
  }

  onCreate(): void{
    this.imagen = this.imageService.urlImg;
    const expe = new Experiencia(this.nombreE, this.github, this.url, this.imagen);
    this.sExperiencia.save(expe).subscribe(data=>
      {
        alert("Experiencia añadida")
        this.router.navigate(['']);
      }, err =>{
        
        this.router.navigate(['']);
      }
      )
  }
    uploadImage($event: any) {
    //const id = this.activatedRoute.snapshot.params['id'];   (ESTA LINEA SE ELIMINA)
    const name = "explab_" + this.nombreE; 
    this.imageService.uploadImage($event, name);
  }

}
