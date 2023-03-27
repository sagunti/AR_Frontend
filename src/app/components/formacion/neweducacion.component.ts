
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion'
import { EducacionService } from 'src/app/service/educacion.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {

  nombreE: string;
  descripcionE: string;
  imagenE: string;

  constructor(private educacionS: EducacionService, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.clearUrl(); 
  }

  onCreate(): void{
    this.imagenE = this.imageService.urlImg;
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.imagenE);
    this.educacionS.save(educacion).subscribe(
      data =>{
        
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
    this.imageService.clearUrl(); 
  }
  uploadImage($event: any) {
   
    const name = "educacion_" + this.nombreE; 
    this.imageService.uploadImage($event, name);
  }
}
