import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XinaComponent } from './xina.component';

describe('XinaComponent', () => {
  let component: XinaComponent;
  let fixture: ComponentFixture<XinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
