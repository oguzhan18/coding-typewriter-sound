import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypewriterSoundComponent } from './typewriter-sound.component';

describe('TypewriterSoundComponent', () => {
  let component: TypewriterSoundComponent;
  let fixture: ComponentFixture<TypewriterSoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypewriterSoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypewriterSoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
