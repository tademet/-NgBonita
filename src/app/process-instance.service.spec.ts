/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ProcessInstanceService } from './process-instance.service';

describe('Service: ProcessInstance', () => {
  beforeEach(() => {
    addProviders([ProcessInstanceService]);
  });

  it('should ...',
    inject([ProcessInstanceService],
      (service: ProcessInstanceService) => {
        expect(service).toBeTruthy();
      }));
});
