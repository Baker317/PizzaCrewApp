import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThankyouComponent } from './create-thankyou.component';

describe('CreateThankyouComponent', () => {
  let component: CreateThankyouComponent;
  let fixture: ComponentFixture<CreateThankyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateThankyouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
