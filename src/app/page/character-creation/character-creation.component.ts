import { Component } from '@angular/core';
import { StatsComponent } from '../../component/stats/stats.component';
import { FormComponent } from '../../component/form/form.component';

@Component({
  selector: 'app-character-creation',
  standalone: true,
  imports: [StatsComponent, FormComponent],
  templateUrl: './character-creation.component.html',
  styleUrl: './character-creation.component.css'
})
export class CharacterCreationComponent {

}
