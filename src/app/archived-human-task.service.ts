import { Injectable } from '@angular/core';
import { BonitaConfig }   from './bonita-config';
import { BonitaUtils } from './bonita-utils';
import { Http, Response, RequestOptions, RequestMethod, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ArchivedHumanTaskService {
  oHeaders = new Headers();

  constructor(private http: Http,
    private bonitaConifg: BonitaConfig,
    private bonitaUtils: BonitaUtils) {
    this.oHeaders.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  }

  getCompletedByCurrentUser(id?: number) {
    let options = new RequestOptions({
      method: RequestMethod.Get,
      url: this.bonitaConifg.getBonitaUrl + '/API/bpm/archivedHumanTask/:id',
      body: this.bonitaUtils.serializeData({
        id: id,
        o: 'reached_state_date ASC',
        f: ['assigned_id=' + this.bonitaConifg.getUserId() ],
        p: this.bonitaConifg.getDefaultPager().p,
        c: this.bonitaConifg.getDefaultPager().c
      }),
      headers: this.oHeaders
    });

    return this.http.get(this.bonitaConifg.getBonitaUrl() + '/API/bpm/archivedHumanTask/:id', options)
      .map(this.bonitaUtils.transformPaginateResponse)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    let errMsg = error.status ? `${error.status} - ${error.statusText}` :
    'Server error';

    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
