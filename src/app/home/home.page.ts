import { Component } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {Aluno} from '../cadastroaluno/entidadealuno/aluno';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
aluno:Aluno=new Aluno();
  constructor(private afAuth: AngularFireAuth, private router: Router) {}
  logar(){
  this.afAuth.auth.signInWithEmailAndPassword(this.aluno.email, this.aluno.senha).then(
  () => { this.router.navigate(['calendarioaluno']); }
  ).catch( (erro) => console.log(erro) );
  }

  logout() {
  this.afAuth.auth.signOut();
  this.router.navigate(['/']);
  }
}
