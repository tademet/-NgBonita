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
/**
 *
 *
 * @export
 * @class BonitaConfig
 */
var BonitaConfig = (function () {
    /**
     * Creates an instance of BonitaConfig.
     *
     * @param {string} bonitaUrl
     * @param {*} defaultPager
     * @param {*} bonitaUserId
     * @param {string} bonitaUsername
     */
    function BonitaConfig(bonitaUrl, defaultPager, bonitaUserId, bonitaUsername) {
        this.bonitaUrl = bonitaUrl;
        this.defaultPager = defaultPager;
        this.bonitaUserId = bonitaUserId;
        this.bonitaUsername = bonitaUsername;
        this.bonitaUrl = bonitaUrl == null ? 'http://localhost:8080/bonita' : bonitaUrl;
        this.defaultPager = defaultPager == null ? { p: 0, c: 10 } : defaultPager;
        this.bonitaUserId = bonitaUserId != null ? bonitaUserId : null;
        this.bonitaUsername = bonitaUsername != null ? bonitaUsername : null;
    }
    /**
     *
     *
     * @param {string} url
     */
    BonitaConfig.prototype.setBonitaUrl = function (url) {
        this.bonitaUrl = url;
    };
    /**
     *
     *
     * @returns
     */
    BonitaConfig.prototype.getBonitaUrl = function () {
        return this.bonitaUrl;
    };
    /**
     *
     *
     * @returns
     */
    BonitaConfig.prototype.getUserId = function () {
        return this.bonitaUserId;
    };
    /**
     *
     *
     * @param {*} newUserId
     */
    BonitaConfig.prototype.setUserId = function (newUserId) {
        this.bonitaUserId = newUserId;
    };
    /**
     *
     *
     * @returns
     */
    BonitaConfig.prototype.getUserName = function () {
        return this.bonitaUsername;
    };
    /**
     *
     *
     * @param {string} newUserName
     */
    BonitaConfig.prototype.setUserName = function (newUserName) {
        this.bonitaUsername = newUserName;
    };
    /**
     *
     *
     * @returns
     */
    BonitaConfig.prototype.getDefaultPager = function () {
        return this.defaultPager;
    };
    BonitaConfig = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [String, Object, Object, String])
    ], BonitaConfig);
    return BonitaConfig;
}());
exports.BonitaConfig = BonitaConfig;
//# sourceMappingURL=bonita-config.js.map