import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameControlButtonsComponent } from './game-control-buttons.component';

describe('GameControlButtonsComponent', () => {
  let component: GameControlButtonsComponent;
  let fixture: ComponentFixture<GameControlButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameControlButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameControlButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
