import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-sangue',
  templateUrl: './footer-sangue.component.html',
  styleUrls: ['./footer-sangue.component.css']
})
export class FooterSangueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

}

