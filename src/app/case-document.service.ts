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
 * @class CaseDocumentService
 */
@Injectable()
export class CaseDocumentService {
  /**
   *
   */
  oHeaders = new Headers();
  /**
   * Creates an instance of CaseDocumentService.
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
   * @param {number} id
   * @returns
   */
  getUploadedByCurrentUser(id: number) {
    let options = new RequestOptions({
      method: RequestMethod.Get,
      url: this.bonitaConifg.getBonitaUrl + '/API/bpm/caseDocument/:id',
      body: this.bonitaUtils.serializeData({
        id: id,
        f: ['submittedBy=' + this.bonitaConifg.getUserId()],
        p: this.bonitaConifg.getDefaultPager().p,
        c: this.bonitaConifg.getDefaultPager().c
      }),
      headers: this.oHeaders
    });

    return this.http.get(this.bonitaConifg.getBonitaUrl() + '/API/bpm/caseDocument/:id', options)
      .map(this.bonitaUtils.transformPaginateResponse)
      .catch(this.handleError);
  }

  /**
   *
   *
   * @param {number} id
   * @returns
   */
  search(id: number) {
    let options = new RequestOptions({
      method: RequestMethod.Get,
      url: this.bonitaConifg.getBonitaUrl + '/API/bpm/caseDocument/:id',
      body: this.bonitaUtils.serializeData({
        id: id,
        p: this.bonitaConifg.getDefaultPager().p,
        c: this.bonitaConifg.getDefaultPager().c
      }),
      headers: this.oHeaders
    });

    return this.http.get(this.bonitaConifg.getBonitaUrl() + '/API/bpm/caseDocument/:id', options)
      .map(this.bonitaUtils.transformPaginateResponse)
      .catch(this.handleError);
   }

  /**
   *
   *
   * @param {string} dataField
   * @returns
   */
  getByField(dataField: string) {
    let options = new RequestOptions({
      method: RequestMethod.Get,
      url: this.bonitaConifg.getBonitaUrl + '/API/bpm/caseDocument',
      body: this.bonitaUtils.serializeData({
        f: [dataField],
        p: this.bonitaConifg.getDefaultPager().p,
        c: this.bonitaConifg.getDefaultPager().c
      }),
      headers: this.oHeaders
    });
    return this.http.get(this.bonitaConifg.getBonitaUrl() + '/API/bpm/caseDocument', options)
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
