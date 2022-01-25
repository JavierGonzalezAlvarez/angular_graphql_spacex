import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesPastDetailsComponent } from './launches-past-details.component';

describe('LaunchesPastDetailsComponent', () => {
  let component: LaunchesPastDetailsComponent;
  let fixture: ComponentFixture<LaunchesPastDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchesPastDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesPastDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
