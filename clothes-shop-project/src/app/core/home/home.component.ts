import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/images/sofia.jpg',
    };
    this.slides[1] = {
      src: './assets/images/sofia3.jpg',
    }
    this.slides[2] = {
      src: './assets/images/sofia2.jpg',
    }
  }
}
