import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.navigateToIndex();
  }

  navigateToIndex() {
    this.router.navigate(['/Info']);
  }


}
