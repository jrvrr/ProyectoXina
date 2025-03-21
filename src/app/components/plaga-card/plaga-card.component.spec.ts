import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlagaCardComponent } from './plaga-card.component';

describe('PlagaCardComponent', () => {
  let component: PlagaCardComponent;
  let fixture: ComponentFixture<PlagaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlagaCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlagaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
