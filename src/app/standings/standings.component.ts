import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StandingsService } from './standings.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css'],
  providers: [StandingsService]
})
export class StandingsComponent implements OnInit {
  id: number;
  tables;
  constructor(private route: ActivatedRoute, private standingsService: StandingsService) {}

  getStandings(id){
    this.standingsService.getLeagueTables(id)
      .subscribe(tables => {
        this.tables = tables.standing;
        console.log(tables);
      })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = +params['id'];
        console.log(this.id);
        this.getStandings(this.id);
      }
    });
  };

}
