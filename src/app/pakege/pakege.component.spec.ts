import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PakegeComponent } from './pakege.component';

describe('PakegeComponent', () => {
  let component: PakegeComponent;
  let fixture: ComponentFixture<PakegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PakegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PakegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
