import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPComponent } from './inicio-p.component';

describe('InicioPComponent', () => {
  let component: InicioPComponent;
  let fixture: ComponentFixture<InicioPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioPComponent]
    });
    fixture = TestBed.createComponent(InicioPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
