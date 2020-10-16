import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario = new Usuario();
  senha: string;

  constructor() { }

  ngOnInit(): void {
  }

}
