import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressCreateComponent } from './dress-create.component';

describe('DressCreateComponent', () => {
  let component: DressCreateComponent;
  let fixture: ComponentFixture<DressCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DressCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DressCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
