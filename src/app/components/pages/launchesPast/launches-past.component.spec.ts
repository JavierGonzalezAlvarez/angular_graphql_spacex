import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesPastComponent } from './launches-past.component';

describe('LaunchesPastComponent', () => {
  let component: LaunchesPastComponent;
  let fixture: ComponentFixture<LaunchesPastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchesPastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesPastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
