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
var platform_browser_1 = require('@angular/platform-browser');
var ngBonita_component_1 = require('./ngBonita.component');
var http_1 = require('@angular/http');
var bonita_config_1 = require('./bonita-config');
var bonita_utils_1 = require('./bonita-utils');
var bonita_session_1 = require('./bonita-session');
var bonita_authentication_1 = require('./bonita-authentication');
var archived_case_document_service_1 = require('./archived-case-document.service');
var archived_human_task_service_1 = require('./archived-human-task.service');
var archived_process_instance_service_1 = require('./archived-process-instance.service');
var business_data_service_1 = require('./business-data.service');
var case_document_service_1 = require('./case-document.service');
var process_definition_service_1 = require('./process-definition.service');
var process_instance_service_1 = require('./process-instance.service');
var user_service_1 = require('./user.service');
/**
 *
 *
 * @export
 * @class NgBonita
 */
var NgBonita = (function () {
    function NgBonita() {
    }
    NgBonita = __decorate([
        core_1.NgModule({
            declarations: [ngBonita_component_1.NgBonitaComponent],
            imports: [platform_browser_1.BrowserModule],
            providers: [
                http_1.HTTP_PROVIDERS,
                http_1.JSONP_PROVIDERS,
                bonita_config_1.BonitaConfig,
                bonita_utils_1.BonitaUtils,
                bonita_session_1.BonitaSession,
                bonita_authentication_1.BonitaAuthentication,
                archived_case_document_service_1.ArchivedCaseDocumentService,
                archived_human_task_service_1.ArchivedHumanTaskService,
                archived_process_instance_service_1.ArchivedProcessInstanceService,
                business_data_service_1.BusinessDataService,
                case_document_service_1.CaseDocumentService,
                process_definition_service_1.ProcessDefinitionService,
                process_instance_service_1.ProcessInstanceService,
                user_service_1.UserService
            ],
            bootstrap: [ngBonita_component_1.NgBonitaComponent] // The main component goes here
        }), 
        __metadata('design:paramtypes', [])
    ], NgBonita);
    return NgBonita;
}());
exports.NgBonita = NgBonita;
//# sourceMappingURL=ngBonita.module.js.map