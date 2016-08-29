import { Injectable } from '@angular/core';
import { BonitaConfig } from './bonita-config';
import { Http, Response } from '@angular/http';

/**
 *
 *
 * @export
 * @class BonitaUtils
 */
@Injectable()
export class BonitaUtils {

  /**
   * Creates an instance of BonitaUtils.
   *
   * @param {BonitaConfig} bonitaConfig
   * @param {Http} http
   * @param {Response} resp
   */
  constructor(private bonitaConfig: BonitaConfig,
    private http: Http, private resp: Response) { }

  private paginateResponse(data, headersGetter) {
    let contentRange = headersGetter()['content-range'];
    let arrayContentRange = contentRange ? contentRange.split('/') :
      [this.bonitaConfig.getDefaultPager().p + '-' + this.bonitaConfig.getDefaultPager().c];
    let arrayIndexNumPerPage = arrayContentRange[0].split('-');

    return {
      items: JSON.parse(data),
      pageIndex: Number(arrayIndexNumPerPage[0]),
      pageSize: Number(arrayIndexNumPerPage[1]),
      totalCount: Number(arrayContentRange[1])
    };
  }

  /**
   *
   *
   * @returns
   */
  transformPaginateResponse() {
    return  [this.paginateResponse].concat(this.resp.json().body.transformResponse);
  }

  /**
   *
   *
   * @param {any} data
   * @returns
   */
  serializeData(data) {
    // if (!angular.isObject(data)) {
    //   return (data === null) ? '' : data.toString();
    // }


    let buffer = new Array;
    for (var name in data) {
      if (!data.hasOwnProperty(name)) {
        continue;
      }
      let value = data[name];

      buffer.push(
        encodeURIComponent(name) + '=' + encodeURIComponent((value == null) ? '' : value)
      );
    }


    // Serialize the buffer and clean it up for transportation.
    let source = buffer.join('&').replace(/%20/g, '+');
    return source;
  }
}
