import { Component, OnInit } from '@angular/core';
import { Aluno } from '../entidadealuno/aluno';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector:'cadastroaluno.component',
  templateUrl:'cadastroaluno.component.html',
  styleUrls:['cadastroaluno.component.css']
})

export class CadastroalunoComponent implements OnInit {
  aluno: Aluno= new Aluno();

  constructor(private banco: AngularFireDatabase) { }

  ngOnInit() {}

  salvar(){
    this.banco.list('aluno').push(this.aluno);
    this.aluno=new Aluno();
    alert('agora vai');}
}
