import { Routes } from '@angular/router';
import { CharacterFileComponent } from './page/character-file/character-file.component';
import { FormComponent } from './component/form/form.component';
import { StatsComponent } from './component/stats/stats.component';
import { CharacterCreationComponent } from './page/character-creation/character-creation.component';

export const routes: Routes = [
    {
        path: "",
        component: CharacterCreationComponent
    },
    {
        path: "characterFile",
        component: CharacterFileComponent
    },
    {
        path: "stats",
        component: StatsComponent
    },
    {
        path: "**",
        component: CharacterCreationComponent
    }
];