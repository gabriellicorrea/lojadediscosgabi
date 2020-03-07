import { Component, OnInit } from '@angular/core';

import { discs } from '../discs';

@Component({
  selector: 'app-discs-list',
  templateUrl: './discs-list.component.html',
  styleUrls: ['./discs-list.component.css']
})
export class DiscsListComponent{

  listLabel = 'Produtos da loja';
  discs = discs;


  constructor() { }

  ngOnInit() {
  }

}