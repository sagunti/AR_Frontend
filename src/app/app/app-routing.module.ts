import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditacercadComponent } from './components/acerca-de/editacercad.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditeducacionComponent } from './components/formacion/editeducacion.component';
import { NeweducacionComponent } from './components/formacion/neweducacion.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'nuevaexp',component:NewExperienciaComponent},
  {path:'nuevaedu',component:NeweducacionComponent},
  {path:'editexp/:id',component:EditExperienciaComponent},
  {path:'editedu/:id',component:EditeducacionComponent},
  {path:'newskill',component:NewSkillComponent},
  {path:'editskill/:id',component:EditSkillComponent},
  {path:'editacercade/:id',component:EditacercadComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
