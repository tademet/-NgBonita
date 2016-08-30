"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var ngBonita_module_1 = require('./app/ngBonita.module');
var _1 = require('./app/');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(ngBonita_module_1.NgBonita);
//# sourceMappingURL=main.js.map