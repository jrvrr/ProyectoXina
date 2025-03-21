import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlagaDetailComponent } from './plaga-detail.component';

describe('PlagaDetailComponent', () => {
  let component: PlagaDetailComponent;
  let fixture: ComponentFixture<PlagaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlagaDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlagaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
