/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ProcessDefinitionService } from './process-definition.service';

describe('Service: ProcessDefinition', () => {
  beforeEach(() => {
    addProviders([ProcessDefinitionService]);
  });

  it('should ...',
    inject([ProcessDefinitionService],
      (service: ProcessDefinitionService) => {
        expect(service).toBeTruthy();
      }));
});
