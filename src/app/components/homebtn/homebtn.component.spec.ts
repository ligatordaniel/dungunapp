import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebtnComponent } from './homebtn.component';

describe('HomebtnComponent', () => {
  let component: HomebtnComponent;
  let fixture: ComponentFixture<HomebtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomebtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomebtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
