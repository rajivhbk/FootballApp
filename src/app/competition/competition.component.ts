import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CompetitionService } from './competition.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css'],
  providers: [CompetitionService]
})
export class CompetitionComponent implements OnInit {

  constructor(private competitionService: CompetitionService) { }

  _competitions: Observable<Competition[]>;

  getCompetitions(){
    this.competitionService.getCompetitions('2015')
      .subscribe(competitions => {
        this._competitions = competitions;
        console.log(competitions);
      })
  };

  ngOnInit() {
    this.getCompetitions();
  }

}

class Competition{
  _links?: Object;
caption: String;
currentMatchday: number;
id: number;
lastUpdated: Date;
league: String;
numberOfGames: number;
numberOfMatchdays: number;
numberOfTeams: number;
year: string;
}
