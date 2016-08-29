import { Injectable } from '@angular/core';
import { BonitaConfig }   from './bonita-config';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';


/**
 * Resource used to access Bonita session information
 *  When using getCurrent, be careful to check for session properties (if no session exists an object without properties is returned)
 * @export
 * @class BonitaSession
 */
@Injectable()
export class BonitaSession {

  /**
   * Creates an instance of BonitaSession.
   *
   * @param {BonitaConfig} bg
   * @param {Http} http
   */
  constructor(private bg: BonitaConfig,
    private http: Http) {}

  /**
   *
   *
   * @returns
   */
  getCurrent() {
    return this.http.get(this.bg.getBonitaUrl() + '/API/system/session/unused')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: Response) {
    let errMsg = error.status ? `${error.status} - ${error.statusText}` :
    'Server error';

    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
