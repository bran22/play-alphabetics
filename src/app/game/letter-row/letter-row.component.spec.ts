import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterRowComponent } from './letter-row.component';

describe('LetterRowComponent', () => {
  let component: LetterRowComponent;
  let fixture: ComponentFixture<LetterRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
