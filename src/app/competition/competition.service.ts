import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CompetitionService {

  constructor(private _http: Http) { }

  private _url = "http://api.football-data.org/v1/competitions/";


  getCompetitions(season?){
    let options = new RequestOptions();
    options.search = season;
    return this._http.get(this._url, options)
      .map(competetions => {
        return competetions.json();
      })
      .catch(this.handleError);
  }

  private handleError(err) {
    return Observable.throw(err || 'Server error');
  }

}