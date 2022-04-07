import { Component, OnInit } from '@angular/core';


const listPessoas = [
  {
    id: '1',
    nome: 'Felipe',
    img: '/assets/miranha.png',
  },
  {
    id: '2',
    nome: 'Gustavo',
    img: '/assets/miranha2.jfif',
  },
  {
    id: '3',
    nome: 'Damião',
    img: '/assets/miranha3.jfif',
  },
  {
    id: '4',
    nome: 'Math',
    img: '/assets/miranha4.jfif',
  },
  {
    id: '5',
    nome: 'Suchi',
    img: '/assets/miranha2.jfif',
  },
  {
    id: '6',
    nome: 'Gabriel',
    img: '/assets/miranha3.jfif',
  },
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listPessoas = listPessoas;

  constructor() { }

  ngOnInit(): void { }

}
