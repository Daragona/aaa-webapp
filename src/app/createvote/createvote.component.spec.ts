import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatevoteComponent } from './createvote.component';

describe('CreatevoteComponent', () => {
  let component: CreatevoteComponent;
  let fixture: ComponentFixture<CreatevoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatevoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatevoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
