import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TeamsService } from './teams.service'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  providers: [TeamsService]
})
export class TeamsComponent implements OnInit {
  id: number;
  _teams;
  constructor(private route: ActivatedRoute, private _teamsService: TeamsService) { }

  getTeams(id){
    this._teamsService.getTeams(id)
      .subscribe(teams => {
        this._teams = teams.teams;
        console.log(teams);
      })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = +params['id'];
        console.log(this.id);
        this.getTeams(this.id);
      }
    });
  }

}
