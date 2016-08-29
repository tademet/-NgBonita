/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ArchivedCaseDocumentService } from './archived-case-document.service';

describe('Service: ArchivedCaseDocument', () => {
  beforeEach(() => {
    addProviders([ArchivedCaseDocumentService]);
  });

  it('should ...',
    inject([ArchivedCaseDocumentService],
      (service: ArchivedCaseDocumentService) => {
        expect(service).toBeTruthy();
      }));
});
