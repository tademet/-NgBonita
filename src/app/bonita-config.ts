import { Injectable } from '@angular/core';
/**
 *
 *
 * @export
 * @class BonitaConfig
 */
@Injectable()
export class BonitaConfig {
  /**
   * Creates an instance of BonitaConfig.
   *
   * @param {string} bonitaUrl
   * @param {*} defaultPager
   * @param {*} bonitaUserId
   * @param {string} bonitaUsername
   */
  constructor(private bonitaUrl?: string,
  private defaultPager?: any,
  private bonitaUserId?: any,
  private bonitaUsername?: string) {
    this.bonitaUrl = bonitaUrl == null ? 'http://localhost:8080/bonita' : bonitaUrl;
    this.defaultPager = defaultPager == null ?  { p: 0, c: 10 } : defaultPager;
    this.bonitaUserId = bonitaUserId != null ? bonitaUserId :  null;
    this.bonitaUsername = bonitaUsername != null ? bonitaUsername : null;
  }

  /**
   *
   *
   * @param {string} url
   */
  setBonitaUrl(url: string) {
    this.bonitaUrl  = url;
  }

  /**
   *
   *
   * @returns
   */
  getBonitaUrl() {
    return this.bonitaUrl;
  }

  /**
   *
   *
   * @returns
   */
  getUserId() {
    return this.bonitaUserId;
  }

  /**
   *
   *
   * @param {*} newUserId
   */
  setUserId(newUserId: any) {
    this.bonitaUserId = newUserId;
  }

  /**
   *
   *
   * @returns
   */
  getUserName() {
    return this.bonitaUsername;
  }

  /**
   *
   *
   * @param {string} newUserName
   */
  setUserName(newUserName: string) {
    this.bonitaUsername = newUserName;
  }

  /**
   *
   *
   * @returns
   */
  getDefaultPager() {
    return this.defaultPager;
  }

}
