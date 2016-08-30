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
var Observable_1 = require('rxjs/Observable');
var http_1 = require('@angular/http');
require('rxjs/Rx');
/**
 * Resource used to access Bonita session information
 *  When using getCurrent, be careful to check for session properties (if no session exists an object without properties is returned)
 * @export
 * @class BonitaSession
 */
var BonitaSession = (function () {
    /**
     * Creates an instance of BonitaSession.
     *
     * @param {BonitaConfig} bg
     * @param {Http} http
     */
    function BonitaSession(bg, http) {
        this.bg = bg;
        this.http = http;
    }
    /**
     *
     *
     * @returns
     */
    BonitaSession.prototype.getCurrent = function () {
        return this.http.get(this.bg.getBonitaUrl() + '/API/system/session/unused')
            .map(this.extractData)
            .catch(this.handleError);
    };
    BonitaSession.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    BonitaSession.prototype.handleError = function (error) {
        var errMsg = error.status ? error.status + " - " + error.statusText :
            'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    BonitaSession = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [bonita_config_1.BonitaConfig, http_1.Http])
    ], BonitaSession);
    return BonitaSession;
}());
exports.BonitaSession = BonitaSession;
//# sourceMappingURL=bonita-session.js.map