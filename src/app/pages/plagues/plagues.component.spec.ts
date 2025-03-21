import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaguesComponent } from './plagues.component';

describe('PlaguesComponent', () => {
  let component: PlaguesComponent;
  let fixture: ComponentFixture<PlaguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaguesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
