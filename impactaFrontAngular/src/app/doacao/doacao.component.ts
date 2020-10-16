import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css']
})
export class DoacaoComponent implements OnInit {

  key = 'data_post'
  reverse = true

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  sangue: string
  cidade: string

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0)

    this.findAllPostagens()
    this.findAllTemas()
  }


  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findBySanguePostagem(){
    if (this.sangue === '') {
      this.findAllPostagens()      
    } else {
      this.postagemService.getBySanguePostagem(this.sangue).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    }  
  }

  findByCidadePostagem(){
    if (this.cidade === '') {
      this.findAllPostagens()      
    } else {
      this.postagemService.getByCidadePostagem(this.cidade).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    }  
  }

  

}
