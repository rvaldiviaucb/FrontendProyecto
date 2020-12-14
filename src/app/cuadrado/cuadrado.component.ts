import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuadrado',
  templateUrl: './cuadrado.component.html',
  styleUrls: ['./cuadrado.component.css']
})
export class CuadradoComponent implements OnInit {

  @Input() nombre='';
  constructor() { }

  ngOnInit(): void {
  }

}
