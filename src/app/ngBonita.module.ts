import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgBonitaComponent } from './ngBonita.component';
import {HTTP_PROVIDERS, JSONP_PROVIDERS}  from '@angular/http';

import { BonitaConfig } from './bonita-config';
import { BonitaUtils } from './bonita-utils';
import { BonitaSession } from './bonita-session';
import { BonitaAuthentication } from './bonita-authentication';
import { ArchivedCaseDocumentService } from './archived-case-document.service';
import { ArchivedHumanTaskService } from './archived-human-task.service';
import { ArchivedProcessInstanceService } from './archived-process-instance.service';
import { BusinessDataService } from './business-data.service';
import { CaseDocumentService } from './case-document.service';
import { ProcessDefinitionService } from './process-definition.service';
import { ProcessInstanceService } from './process-instance.service';
import { UserService } from './user.service';
/**
 *
 *
 * @export
 * @class NgBonita
 */
@NgModule({
  declarations : [ NgBonitaComponent], // Components, Pipes, and Directives
  imports : [ BrowserModule ], // Modules go here
  providers: [
    HTTP_PROVIDERS,
    JSONP_PROVIDERS,
    BonitaConfig,
    BonitaUtils,
    BonitaSession,
    BonitaAuthentication,
    ArchivedCaseDocumentService,
    ArchivedHumanTaskService,
    ArchivedProcessInstanceService,
    BusinessDataService,
    CaseDocumentService,
    ProcessDefinitionService,
    ProcessInstanceService,
    UserService
  ],  // Services go here
  bootstrap: [ NgBonitaComponent ]  // The main component goes here
})
export class NgBonita {}
