import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {CadastroprofComponent} from './cadastroprof/salvarprof/cadastroprof.component';
import {CadastroalunoComponent} from './cadastroaluno/salvar_aluno/cadastroaluno.component';
import{ LoginComponent } from './login/login.component';
import{RegistrarComponent} from './registrar/registrar.component';
import{CalendarioprofComponent} from './calendarioprof/calendarioprof.component';
import{CalendarioalunoComponent} from './calendarioaluno/calendarioaluno.component';
import{ AlunoListarComponent} from './cadastroaluno/listar_aluno/listar.component';
import { ProfessorListarComponent} from './cadastroprof/listar_prof/listar.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {path: 'registrar', component: RegistrarComponent},
  {path: 'login', component : LoginComponent},
  {path: 'cadastroprof', component: CadastroprofComponent},
  {path: 'cadastroaluno', component: CadastroalunoComponent},
  {path: 'calendarioprof', component: CalendarioprofComponent},
  {path: 'calendarioaluno', component: CalendarioalunoComponent},
  {path: 'listaaluno', component: AlunoListarComponent},
  {path: 'listarprof', component: ProfessorListarComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
