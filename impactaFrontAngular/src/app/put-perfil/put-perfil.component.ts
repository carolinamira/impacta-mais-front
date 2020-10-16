import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-put-perfil',
  templateUrl: './put-perfil.component.html',
  styleUrls: ['./put-perfil.component.css']
})
export class PutPerfilComponent implements OnInit {

  usuario: Usuario = new Usuario();
  senha: string;

  constructor() { }

  ngOnInit(): void {
  }

}





