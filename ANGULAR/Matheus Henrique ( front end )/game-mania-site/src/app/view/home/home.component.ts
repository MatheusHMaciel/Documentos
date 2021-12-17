import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public textodiferencial! : string;
  public textobannercorpo! : string;
  constructor() { }

  ngOnInit(): void {
    this.textodiferencial! = 'Venha conhecer nosso diferencial!!!';
    this.textobannercorpo! = 'Lorem ipsum dolor sit amet'+
    'consectetur, adipisicing elit'+
    'Nemo voluptatem, excepturi consequuntur suscipi'+
    'totam culpa sapiente necessitatibus, quaerat delectus'+
    'modi veniam alias quo molestiae ratione id beatae facer'+
    'quasi magni!';
  }
}