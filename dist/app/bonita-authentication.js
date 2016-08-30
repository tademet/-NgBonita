"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var bonita_config_1 = require('./bonita-config');
var bonita_session_1 = require('./bonita-session');
var bonita_utils_1 = require('./bonita-utils');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var BonitaAuthentication = (function () {
    function BonitaAuthentication(http, bonitaConfig, bonitaSession, bonitaUtils) {
        this.http = http;
        this.bonitaConfig = bonitaConfig;
        this.bonitaSession = bonitaSession;
        this.bonitaUtils = bonitaUtils;
        this.isLogged = false;
        this.oHeaders = new http_1.Headers();
        this.oHeaders.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    }
    BonitaAuthentication.prototype.login = function (username, password) {
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
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
                    Observable_1.Observable.throw('No active session found');
                }
                else {
                    this.bonitaConfig.setUsername(session.user_name);
                    this.bonitaConfig.setUserId(session.user_id);
                    this.isLogged = true;
                }
            });
        })
            .catch(this.handelError);
    };
    BonitaAuthentication.prototype.checkForActiveSession = function () {
        return this.bonitaSession.getCurrent()
            .subscribe(function (session) {
            if (typeof session.user_id === 'undefined') {
                Observable_1.Observable.throw('No active session found');
            }
            else {
                this.bonitaConfig.setUsername(session.user_name);
                this.bonitaConfig.setUserId(session.user_id);
                this.isLogged = true;
            }
        }, this.handelError);
    };
    BonitaAuthentication.prototype.logout = function () {
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
            url: this.bonitaConfig.getBonitaUrl + '/logoutservice',
            body: this.bonitaUtils.serializeData({
                redirect: false
            }),
            headers: this.oHeaders
        });
        return this.http.get(this.bonitaConfig.getBonitaUrl() + '/logoutservice', options)
            .subscribe(function (session) {
            this.bonitaConfig.setUserName(null);
            this.bonitaConfig.setUserId(null);
            this.isLogged = false;
        }, this.handelError);
        // .toPromise()
        // .then(function () {
        //   this.bonitaConfig.setUserName(null);
        //   this.bonitaConfig.setUserId(null);
        //   this.isLogged = false;
        // })
        // .catch(this.handelError);
    };
    BonitaAuthentication.prototype.handelError = function (error) {
        console.error(error);
        this.isLogged = false;
        return Observable_1.Observable.throw(error.json().error || 'Server Error');
    };
    BonitaAuthentication = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, bonita_config_1.BonitaConfig, bonita_session_1.BonitaSession, bonita_utils_1.BonitaUtils])
    ], BonitaAuthentication);
    return BonitaAuthentication;
}());
exports.BonitaAuthentication = BonitaAuthentication;
//# sourceMappingURL=bonita-authentication.js.map