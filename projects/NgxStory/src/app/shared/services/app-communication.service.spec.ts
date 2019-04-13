import { TestBed } from '@angular/core/testing';

import { AppCommunicationService } from './app-communication.service';

describe('AppCommunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppCommunicationService = TestBed.get(AppCommunicationService);
    expect(service).toBeTruthy();
  });
});
