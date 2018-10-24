import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detals',
  templateUrl: './detals.component.html',
  styleUrls: ['./detals.component.css']
})
export class DetalsComponent implements OnInit {

  /*global array*/
    pages= [
      {name: 'About', page:'About'},
      {name: 'Statistics', page:'Statistics'}
    ];

  constructor(private router: Router) {

   }

  ngOnInit() {
  }

  booking(){
    this.router.navigateByUrl('./list-item.component.html');
  }

}
