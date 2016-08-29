import { Injectable } from '@angular/core';
import { BonitaConfig } from './bonita-config';
import { BonitaSession } from './bonita-session';
import { BonitaUtils } from './bonita-utils';
import { Http, Response, RequestOptions, RequestMethod, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class BonitaAuthentication {
  isLogged: boolean = false;
  oHeaders = new Headers();

  constructor(private http: Http,
    private bonitaConfig: BonitaConfig,
    private bonitaSession: BonitaSession,
    private bonitaUtils: BonitaUtils) {
    this.oHeaders.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  }

  login(username, password) {
    let options = new RequestOptions({
      method: RequestMethod.Post,
      url: this.bonitaConfig.getBonitaUrl + '/loginservice',
      body: this.bonitaUtils.serializeData({
        username: username,
        password: password,
        redirect: false
      }),
      headers: this.oHeaders
    });

    return this.http.request(this.bonitaConfig.getBonitaUrl() + '/loginservice', options)
      .toPromise()
      .then(function (res) {
        // Retrieve current session to get user id;
        this.bonitaSession.getCurrent()
          .toPromise()
          .then(function (session) {
            if (typeof session.user_id === 'undefined') {
              Observable.throw('No active session found');
            } else {
              this.bonitaConfig.setUsername(session.user_name);
              this.bonitaConfig.setUserId(session.user_id);
              this.isLogged = true;
            }
          });
      })
      .catch(this.handelError);
  }

  checkForActiveSession() {
    return this.bonitaSession.getCurrent()
      .subscribe(
      function (session) {
        if (typeof session.user_id === 'undefined') {
          Observable.throw('No active session found');
        } else {
          this.bonitaConfig.setUsername(session.user_name);
          this.bonitaConfig.setUserId(session.user_id);
          this.isLogged = true;
        }
      },
      this.handelError);
  }

  logout() {
    let options = new RequestOptions({
      method: RequestMethod.Get,
      url: this.bonitaConfig.getBonitaUrl + '/logoutservice',
      body: this.bonitaUtils.serializeData({
        redirect: false
      }),
      headers: this.oHeaders
    });

    return this.http.get(this.bonitaConfig.getBonitaUrl() + '/logoutservice', options)
      .subscribe(
      function (session) {
        this.bonitaConfig.setUserName(null);
        this.bonitaConfig.setUserId(null);
        this.isLogged = false;
      },
      this.handelError
      );
    // .toPromise()
    // .then(function () {
    //   this.bonitaConfig.setUserName(null);
    //   this.bonitaConfig.setUserId(null);
    //   this.isLogged = false;
    // })
    // .catch(this.handelError);
  }

  handelError(error: Response) {
    console.error(error);
    this.isLogged = false;
    return Observable.throw(error.json().error || 'Server Error');
  }
}
