/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { HumanTaskService } from './human-task.service';

describe('Service: HumanTask', () => {
  beforeEach(() => {
    addProviders([HumanTaskService]);
  });

  it('should ...',
    inject([HumanTaskService],
      (service: HumanTaskService) => {
        expect(service).toBeTruthy();
      }));
});
