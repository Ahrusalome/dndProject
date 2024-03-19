import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IClasse } from '../interface/IClasse';
import { IRace } from '../interface/IRace';
import { IAlignment } from '../interface/IAlignement';
import { IBackground } from '../interface/IBackground';

@Injectable({
  providedIn: 'root'
})
export class Open5eService {

  constructor(private http: HttpClient) { }
  private apiRoutes: any = {
    manifest: "https://api.open5e.com/v1/manifest/?format=json",
    spells: "https://api.open5e.com/v1/spells/?format=json",
    spelllist: "https://api.open5e.com/v1/spelllist/?format=json",
    monsters: "https://api.open5e.com/v1/monsters/?format=json",
    documents: "https://api.open5e.com/v1/documents/?format=json",
    backgrounds: "https://api.open5e.com/v1/backgrounds/?format=json",
    planes: "https://api.open5e.com/v1/planes/?format=json",
    sections: "https://api.open5e.com/v1/sections/?format=json",
    feats: "https://api.open5e.com/v1/feats/?format=json",
    conditions: "https://api.open5e.com/v1/conditions/?format=json",
    races: "https://api.open5e.com/v1/races/?format=json",
    classes: "https://api.open5e.com/v1/classes/?format=json",
    magicitems: "https://api.open5e.com/v1/magicitems/?format=json",
    weapons: "https://api.open5e.com/v1/weapons/?format=json",
    armor: "https://api.open5e.com/v1/armor/?format=json",
    search: "https://api.open5e.com/v1/search/?format=json"
    }
    
    public getAllClasses(): Observable<IClasse[]> {
      return this.http.get(this.apiRoutes.classes).pipe(map((data:any) => data.results as IClasse[]));
    }

    public getAllRaces(): Observable<IRace[]> {
      return this.http.get(this.apiRoutes.races).pipe(map((data:any) => data.results as IRace[]));
    }
    public getBackgrounds(): Observable<IBackground[]> {
      return this.http.get(this.apiRoutes.backgrounds).pipe(map((data: any) => data.results as IBackground[]));
    }
    public getAllAlignments(): IAlignment[] {
      return [
        { label: "Lawful Good", desc: "A lawful good character typically acts with compassion, and always with honor and a sense of duty.", abbreviation: "LG" },
        { label: "Neutral Good", desc: "A neutral good character typically acts altruistically, without regard for or against lawful precepts such as rules or tradition.", abbreviation: "NG" },
        { label: "Chaotic Good", desc: "A chaotic good character acts as his conscience directs him with little regard for what others expect of him.", abbreviation: "CG" },
        { label: "Lawful Neutral", desc: "A lawful neutral character typically believes strongly in lawful concepts such as honor, order, rules, and tradition, and often follows a personal code.", abbreviation: "LN" },
        { label: "True Neutral", desc: "A neutral character does what seems to be a good idea.", abbreviation: "TN" },
        { label: "Chaotic Neutral", desc: "A chaotic neutral character follows his whims.", abbreviation: "CN" },
        { label: "Lawful Evil", desc: "A lawful evil character sees a well-ordered system as being easier to exploit and shows a combination of desirable and undesirable traits.", abbreviation: "LE" },
        { label: "Neutral Evil", desc: "A neutral evil character is typically selfish and has no qualms about turning on allies-of-the-moment, and usually makes allies primarily to further their own goals.", abbreviation: "NE" },
        { label: "Chaotic Evil", desc: "A chaotic evil character tends to have no respect for rules, other people's lives, or anything but their own desires, which are typically selfish and cruel.", abbreviation: "CE" }
      ];
    }
}
