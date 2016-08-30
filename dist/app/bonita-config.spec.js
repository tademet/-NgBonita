/* tslint:disable:no-unused-variable */
"use strict";
var bonita_config_1 = require('./bonita-config');
describe('BonitaConfig', function () {
    it('should create an instance', function () {
        expect(new bonita_config_1.BonitaConfig('http://localhost', null, null, null)).toBeTruthy();
    });
    it('should return default bonita url', function () {
        var bc = new bonita_config_1.BonitaConfig(null, null, null, null);
        expect(bc.getBonitaUrl()).toEqual('http://localhost:8080/bonita');
    });
});
//# sourceMappingURL=bonita-config.spec.js.map