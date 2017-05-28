import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class TeamsService {

  constructor(private _http: Http) { }

  private _baseUrl = "http://api.football-data.org/v1/competitions/";
  // private _newUrl ="http://api.football-data.org/v1/competitions/398/teams"
  private _token = '10658a2ebc0a44a2967a31d2ba92b5a4';
  private _tokenName = 'X-Auth-Token';


  getTeams(id?){
    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('X-Auth-Token','10658a2ebc0a44a2967a31d2ba92b5a4');
    let options = new RequestOptions({ headers: headers });
    let url = this._baseUrl + id + '/teams'
      return this._http.get(url, options)
        .map(teams => {
          return teams.json();
        })
        .catch(this.handleError);
  }

  private handleError(err) {
    return Observable.throw(err || 'Server error');
  }

}