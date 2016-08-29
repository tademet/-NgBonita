/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { BusinessDataService } from './business-data.service';

describe('Service: BusinessData', () => {
  beforeEach(() => {
    addProviders([BusinessDataService]);
  });

  it('should ...',
    inject([BusinessDataService],
      (service: BusinessDataService) => {
        expect(service).toBeTruthy();
      }));
});
