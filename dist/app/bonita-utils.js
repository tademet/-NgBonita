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
var http_1 = require('@angular/http');
/**
 *
 *
 * @export
 * @class BonitaUtils
 */
var BonitaUtils = (function () {
    /**
     * Creates an instance of BonitaUtils.
     *
     * @param {BonitaConfig} bonitaConfig
     * @param {Http} http
     * @param {Response} resp
     */
    function BonitaUtils(bonitaConfig, http, resp) {
        this.bonitaConfig = bonitaConfig;
        this.http = http;
        this.resp = resp;
    }
    BonitaUtils.prototype.paginateResponse = function (data, headersGetter) {
        var contentRange = headersGetter()['content-range'];
        var arrayContentRange = contentRange ? contentRange.split('/') :
            [this.bonitaConfig.getDefaultPager().p + '-' + this.bonitaConfig.getDefaultPager().c];
        var arrayIndexNumPerPage = arrayContentRange[0].split('-');
        return {
            items: JSON.parse(data),
            pageIndex: Number(arrayIndexNumPerPage[0]),
            pageSize: Number(arrayIndexNumPerPage[1]),
            totalCount: Number(arrayContentRange[1])
        };
    };
    /**
     *
     *
     * @returns
     */
    BonitaUtils.prototype.transformPaginateResponse = function () {
        return [this.paginateResponse].concat(this.resp.json().body.transformResponse);
    };
    /**
     *
     *
     * @param {any} data
     * @returns
     */
    BonitaUtils.prototype.serializeData = function (data) {
        // if (!angular.isObject(data)) {
        //   return (data === null) ? '' : data.toString();
        // }
        var buffer = new Array;
        for (var name in data) {
            if (!data.hasOwnProperty(name)) {
                continue;
            }
            var value = data[name];
            buffer.push(encodeURIComponent(name) + '=' + encodeURIComponent((value == null) ? '' : value));
        }
        // Serialize the buffer and clean it up for transportation.
        var source = buffer.join('&').replace(/%20/g, '+');
        return source;
    };
    BonitaUtils = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [bonita_config_1.BonitaConfig, http_1.Http, http_1.Response])
    ], BonitaUtils);
    return BonitaUtils;
}());
exports.BonitaUtils = BonitaUtils;
//# sourceMappingURL=bonita-utils.js.map