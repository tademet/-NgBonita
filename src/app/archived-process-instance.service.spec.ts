/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ArchivedProcessInstanceService } from './archived-process-instance.service';

describe('Service: ArchivedProcessInstance', () => {
  beforeEach(() => {
    addProviders([ArchivedProcessInstanceService]);
  });

  it('should ...',
    inject([ArchivedProcessInstanceService],
      (service: ArchivedProcessInstanceService) => {
        expect(service).toBeTruthy();
      }));
});
