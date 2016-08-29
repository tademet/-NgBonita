/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import {BonitaAuthentication} from './bonita-authentication';
import { BonitaConfig } from './bonita-config';
import { BonitaSession } from './bonita-session';
import { BonitaUtils } from './bonita-utils';
import { Injector, ReflectiveInjector } from '@angular/core';
import { Http, BaseRequestOptions, Response } from '@angular/http';
import {MockBackend} from '@angular/http/testing';

describe('BonitaAuthentication', () => {
  it('should create an instance', () => {
    let injector = ReflectiveInjector.resolveAndCreate([
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http, useFactory:
          function (backend, defaultOptions) {
            return new Http(backend, defaultOptions);
          },
        deps: [MockBackend, BaseRequestOptions]
      }
    ]);
    let http = injector.get(Http);
    let bc = new BonitaConfig(null, null, null, null);
    let bs = new BonitaSession(bc, http);
    let bu = new BonitaUtils(bc, http, null);

    expect(new BonitaAuthentication(http,
      bc,
      bs,
      bu)).toBeTruthy();
  });
});
