import { Component } from '@angular/core';
import { InfoComponent } from '../../component/info/info.component';

@Component({
  selector: 'app-character-file',
  standalone: true,
  imports: [InfoComponent],
  templateUrl: './character-file.component.html',
  styleUrl: './character-file.component.css'
})
export class CharacterFileComponent {

}
