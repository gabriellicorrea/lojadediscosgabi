import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { discs } from '../discs';


@Component({
  selector: 'app-discs-details',
  templateUrl: './discs-details.component.html',
  styleUrls: ['./discs-details.component.css']
})
export class DiscsDetailsComponent implements OnInit {

  disc;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.disc = discs[+params.get('discId')];
    });
  }

}