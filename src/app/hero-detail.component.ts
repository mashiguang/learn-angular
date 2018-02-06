import { Component, Input } from '@angular/core';

import { Hero } from './hero';
@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}

// 这个class和@Component的关系是什么?
// 它们两个如何合作的？