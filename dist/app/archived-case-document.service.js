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
var bonita_utils_1 = require('./bonita-utils');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var ArchivedCaseDocumentService = (function () {
    function ArchivedCaseDocumentService(http, bonitaConifg, bonitaUtils) {
        this.http = http;
        this.bonitaConifg = bonitaConifg;
        this.bonitaUtils = bonitaUtils;
        this.oHeaders = new http_1.Headers();
        this.oHeaders.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    }
    ArchivedCaseDocumentService.prototype.getUploadedByCurrentUser = function (id) {
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
            url: this.bonitaConifg.getBonitaUrl + '/API/bpm/archivedCaseDocument/:id',
            body: this.bonitaUtils.serializeData({
                id: id,
                f: ['submittedBy=' + this.bonitaConifg.getUserId()],
                p: this.bonitaConifg.getDefaultPager().p,
                c: this.bonitaConifg.getDefaultPager().c
            }),
            headers: this.oHeaders
        });
        return this.http.get(this.bonitaConifg.getBonitaUrl() + '/API/bpm/archivedCaseDocument/:id', options)
            .map(this.bonitaUtils.transformPaginateResponse)
            .catch(this.handleError);
    };
    ArchivedCaseDocumentService.prototype.search = function (field) {
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
            url: this.bonitaConifg.getBonitaUrl + '/API/bpm/archivedCaseDocument/:id',
            body: this.bonitaUtils.serializeData({
                field: field,
                p: this.bonitaConifg.getDefaultPager().p,
                c: this.bonitaConifg.getDefaultPager().c
            }),
            headers: this.oHeaders
        });
        return this.http.get(this.bonitaConifg.getBonitaUrl() + '/API/bpm/archivedCaseDocument/:id', options)
            .map(this.bonitaUtils.transformPaginateResponse)
            .catch(this.handleError);
    };
    ArchivedCaseDocumentService.prototype.getByField = function (field) {
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
            url: this.bonitaConifg.getBonitaUrl + '/API/bpm/archivedCaseDocument',
            body: this.bonitaUtils.serializeData({
                field: field,
                p: this.bonitaConifg.getDefaultPager().p,
                c: this.bonitaConifg.getDefaultPager().c
            }),
            headers: this.oHeaders
        });
        return this.http.get(this.bonitaConifg.getBonitaUrl() + '/API/bpm/archivedCaseDocument', options)
            .map(this.bonitaUtils.transformPaginateResponse)
            .catch(this.handleError);
    };
    ArchivedCaseDocumentService.prototype.handleError = function (error) {
        var errMsg = error.status ? error.status + " - " + error.statusText :
            'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    ArchivedCaseDocumentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, bonita_config_1.BonitaConfig, bonita_utils_1.BonitaUtils])
    ], ArchivedCaseDocumentService);
    return ArchivedCaseDocumentService;
}());
exports.ArchivedCaseDocumentService = ArchivedCaseDocumentService;
//# sourceMappingURL=archived-case-document.service.js.map