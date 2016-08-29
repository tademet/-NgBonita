/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { CaseDocumentService } from './case-document.service';

describe('Service: CaseDocument', () => {
  beforeEach(() => {
    addProviders([CaseDocumentService]);
  });

  it('should ...',
    inject([CaseDocumentService],
      (service: CaseDocumentService) => {
        expect(service).toBeTruthy();
      }));
});
