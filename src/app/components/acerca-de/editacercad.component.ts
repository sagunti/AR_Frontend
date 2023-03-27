import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editacercad',
  templateUrl: './editacercad.component.html',
  styleUrls: ['./editacercad.component.css']
})
export class EditacercadComponent implements OnInit {
persona: persona = null;
  constructor(private activatedRouter:ActivatedRoute, private personaService: PersonaService, private router:Router, public imageService:ImageService) { }

  ngOnInit(): void {
    const id =this.activatedRouter.snapshot.params['id'];
    this.personaService.details(id).subscribe(
      data =>{
        this.persona = data;
        alert("Se cargó")
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.urlImg;
    this.persona.foto =this.imageService.urlfoto;
    
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      },err => {
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )

  }
  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "banner_" + id; 
    this.imageService.uploadImage($event,name)
  }
  
  uploadFoto($event:any){
    const id =this.activatedRouter.snapshot.params['id'];
    const foto ="foto_" +id;
    this.imageService.uploadFoto($event,foto)
  }
}
