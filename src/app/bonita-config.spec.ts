/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import {BonitaConfig} from './bonita-config';

describe('BonitaConfig', () => {
  it('should create an instance', () => {
    expect(new BonitaConfig('http://localhost', null, null, null)).toBeTruthy();
  });

  it('should return default bonita url', () => {
    let bc = new BonitaConfig(null, null, null, null);
    expect(bc.getBonitaUrl()).toEqual('http://localhost:8080/bonita');
  });
});
