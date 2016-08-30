/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var ngBonita_component_1 = require('./ngBonita.component');
describe('App: @NgBonita', function () {
    beforeEach(function () {
        testing_1.addProviders([ngBonita_component_1.NgBonitaComponent]);
    });
    it('should create the app', testing_1.inject([ngBonita_component_1.NgBonitaComponent], function (app) {
        expect(app).toBeTruthy();
    }));
    it('should have as title \'app works!\'', testing_1.inject([ngBonita_component_1.NgBonitaComponent], function (app) {
        expect(app.title).toEqual('app works!');
    }));
});
//# sourceMappingURL=ngBonita.component.spec.js.map