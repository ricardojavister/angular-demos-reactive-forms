import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFruitsComponent } from './create-fruits.component';

describe('CreateFruitsComponent', () => {
  let component: CreateFruitsComponent;
  let fixture: ComponentFixture<CreateFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFruitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
