import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvoteComponent } from './viewvote.component';

describe('ViewvoteComponent', () => {
  let component: ViewvoteComponent;
  let fixture: ComponentFixture<ViewvoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewvoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
