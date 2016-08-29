import { Injectable } from '@angular/core';
import { BonitaConfig }   from './bonita-config';
import { BonitaUtils } from './bonita-utils';
import { Http, Response, RequestOptions, RequestMethod, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

/**
 *
 *
 * @export
 * @class BusinessDataService
 */
@Injectable()
export class BusinessDataService {
  /**
   *
   */
  oHeaders = new Headers();
  /**
   * Creates an instance of BusinessDataService.
   *
   * @param {Http} http
   * @param {BonitaConfig} bonitaConifg
   * @param {BonitaUtils} bonitaUtils
   */
  constructor(private http: Http,
    private bonitaConifg: BonitaConfig,
    private bonitaUtils: BonitaUtils) {
    this.oHeaders.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  }

  /**
   *
   *
   * @param {string} businessDataType
   * @param {*} persistenceId
   * @param {string} queryName
   * @param {Array<string>} fields
   * @returns
   */
  get(businessDataType: string, persistenceId: any, queryName: string, fields: Array<string>) {
    let options = new RequestOptions({
      method: RequestMethod.Get,
      url: this.bonitaConifg.getBonitaUrl + '/API/bdm/businessData/:businessDataType/:persistenceId',
      body: this.bonitaUtils.serializeData({
        businessDataType: businessDataType,
        persistenceId: persistenceId,
        q: queryName,
        f: fields,
        redirect: false
      }),
      headers: this.oHeaders
    });

    return this.http.request(this.bonitaConifg.getBonitaUrl() + '/API/bdm/businessData/:businessDataType/:persistenceId', options)
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
