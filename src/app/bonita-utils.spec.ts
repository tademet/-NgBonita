/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import {BonitaUtils} from './bonita-utils';
import { BonitaConfig } from './bonita-config';

import { Injector, ReflectiveInjector } from '@angular/core';
import { Http, BaseRequestOptions, Response } from '@angular/http';
import {MockBackend} from '@angular/http/testing';

describe('BonitaUtils', () => {
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
    expect(new BonitaUtils(bc, http, null)).toBeTruthy();
  });
});
