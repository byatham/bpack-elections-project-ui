import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotersdataComponent } from './votersdata.component';

describe('VotersdataComponent', () => {
  let component: VotersdataComponent;
  let fixture: ComponentFixture<VotersdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotersdataComponent]
    });
    fixture = TestBed.createComponent(VotersdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
