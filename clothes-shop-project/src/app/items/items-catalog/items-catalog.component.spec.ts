import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsCatalogComponent } from './items-catalog.component';

describe('ItemsCatalogComponent', () => {
  let component: ItemsCatalogComponent;
  let fixture: ComponentFixture<ItemsCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
