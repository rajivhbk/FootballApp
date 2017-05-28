import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class StandingsService {

  constructor(private _http: Http) { }

  private _baseUrl = "http://api.football-data.org/v1/competitions/";


  getLeagueTables(id?){
  let url = this._baseUrl + id + '/leagueTable'
    return this._http.get(url)
      .map(leagues => {
        return leagues.json();
      })
      .catch(this.handleError);
  }

  private handleError(err) {
    return Observable.throw(err || 'Server error');
  }

}