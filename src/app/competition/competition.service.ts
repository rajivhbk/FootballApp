import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CompetitionService {

  constructor(private _http: Http) { }

  private _url = "http://api.football-data.org/v1/competitions/";


  getCompetitions(season?){
    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('X-Auth-Token','10658a2ebc0a44a2967a31d2ba92b5a4');
    let options = new RequestOptions();
    options.headers = headers;
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