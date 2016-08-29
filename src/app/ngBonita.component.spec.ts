/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { NgBonitaComponent } from './ngBonita.component';

describe('App: @NgBonita', () => {
  beforeEach(() => {
    addProviders([NgBonitaComponent]);
  });

  it('should create the app',
    inject([NgBonitaComponent], (app: NgBonitaComponent) => {
      expect(app).toBeTruthy();
    }));

  it('should have as title \'app works!\'',
    inject([NgBonitaComponent], (app: NgBonitaComponent) => {
      expect(app.title).toEqual('app works!');
    }));
});
