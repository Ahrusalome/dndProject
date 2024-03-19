import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterFileComponent } from './character-file.component';

describe('CharacterFileComponent', () => {
  let component: CharacterFileComponent;
  let fixture: ComponentFixture<CharacterFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterFileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
