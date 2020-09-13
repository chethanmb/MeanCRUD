import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCreateComponent } from './change-create.component';

describe('ChangeCreateComponent', () => {
  let component: ChangeCreateComponent;
  let fixture: ComponentFixture<ChangeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
