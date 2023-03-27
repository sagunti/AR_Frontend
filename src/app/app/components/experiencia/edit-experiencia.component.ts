import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css'],
})
export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = null;
  constructor(
    private sExperiencia: SExperienciaService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      (data) => {
        this.expLab = data;
      },
      (err) => {
        alert('Error al modificar');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    this.expLab.imagen = this.imageService.urlImg;

    this.sExperiencia.update(id, this.expLab).subscribe(
      (data) => {
        console.log('experiencia' + this.expLab.imagen);
        alert('Se actualizo');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar');
        this.router.navigate(['']);
      }
    );
    this.imageService.clearUrl();
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = `explab_` + id;
    this.imageService.uploadImage($event, name);
  }
}
