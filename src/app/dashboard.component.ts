import { Component } from "@angular/core";

import { Hero } from "./hero";
import { HeroService } from "./hero.service";
import { OnInit } from "../../node_modules/_@angular_core@5.2.2@@angular/core/src/metadata/lifecycle_hooks";

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }

}