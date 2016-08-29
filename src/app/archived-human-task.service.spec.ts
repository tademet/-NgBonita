/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ArchivedHumanTaskService } from './archived-human-task.service';

describe('Service: ArchivedHumanTask', () => {
  beforeEach(() => {
    addProviders([ArchivedHumanTaskService]);
  });

  it('should ...',
    inject([ArchivedHumanTaskService],
      (service: ArchivedHumanTaskService) => {
        expect(service).toBeTruthy();
      }));
});
