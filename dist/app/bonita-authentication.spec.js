/* tslint:disable:no-unused-variable */
"use strict";
var bonita_authentication_1 = require('./bonita-authentication');
var bonita_config_1 = require('./bonita-config');
var bonita_session_1 = require('./bonita-session');
var bonita_utils_1 = require('./bonita-utils');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var testing_1 = require('@angular/http/testing');
describe('BonitaAuthentication', function () {
    it('should create an instance', function () {
        var injector = core_1.ReflectiveInjector.resolveAndCreate([
            http_1.BaseRequestOptions,
            testing_1.MockBackend,
            {
                provide: http_1.Http, useFactory: function (backend, defaultOptions) {
                    return new http_1.Http(backend, defaultOptions);
                },
                deps: [testing_1.MockBackend, http_1.BaseRequestOptions]
            }
        ]);
        var http = injector.get(http_1.Http);
        var bc = new bonita_config_1.BonitaConfig(null, null, null, null);
        var bs = new bonita_session_1.BonitaSession(bc, http);
        var bu = new bonita_utils_1.BonitaUtils(bc, http, null);
        expect(new bonita_authentication_1.BonitaAuthentication(http, bc, bs, bu)).toBeTruthy();
    });
});
//# sourceMappingURL=bonita-authentication.spec.js.map