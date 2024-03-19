import { Component, EventEmitter, Output } from '@angular/core';
import { IStats } from '../../interface/IStats';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  @Output()
  setStatsEvent = new EventEmitter<IStats>();
  strength = 10;
  dexterity = 10;
  constitution = 10;
  intelligence = 10;
  wisdom = 10;
  charisma = 10;
  maxAttributionPoint = 20;
  SetStats(){
    var stats = {
      "Strength":this.strength,
      "Dexterity":this.dexterity,
      "Constitution": this.constitution,
      "Intelligence": this.intelligence,
      "Wisdom": this.wisdom,
      "Charisma": this.charisma};
    this.setStatsEvent.emit(stats);
  }
  ManagePoint(stat: string, addPoint:boolean) {
    var addingPoint = addPoint == true ? 1 : -1;
    switch(stat) { 
      case "strength": {
        if (addingPoint>0 && (this.strength==20 || this.maxAttributionPoint ==0 ) || this.strength==0 && addingPoint<0)
          return;
         this.strength+=addingPoint;
         break; 
      } 
      case "dexterity": { 
        if (addingPoint>0 && (this.dexterity==20 || this.maxAttributionPoint ==0 ) || this.dexterity==0 && addingPoint<0)
          return;
         this.dexterity+=addingPoint; 
         break; 
      } 
      case "constitution": { 
        if (addingPoint>0 && (this.constitution==20 || this.maxAttributionPoint==0 ) || this.constitution==0 && addingPoint<0)
          return;
         this.constitution+=addingPoint; 
         break; 
      } 
      case "intelligence": { 
        if (addingPoint>0 && (this.intelligence==20 || this.maxAttributionPoint ==0 ) || this.intelligence==0 && addingPoint<0)
          return;
         this.intelligence+=addingPoint; 
         break; 
      } 
      case "wisdom": { 
        if (addingPoint>0 && (this.wisdom==20 || this.maxAttributionPoint ==0 ) || this.wisdom==0 && addingPoint<0)
          return;
         this.wisdom+=addingPoint; 
         break; 
      } 
      case "charisma": { 
        if (addingPoint>0 && (this.charisma==20 || this.maxAttributionPoint ==0 ) || this.charisma==0 && addingPoint<0)
          return;
         this.charisma+=addingPoint; 
         break; 
      } 
      default: { 
         break; 
      }
   }
   if (addingPoint >0)
    this.maxAttributionPoint--;
  else
   this.maxAttributionPoint++;
  }
  RollRandomStats() {
    this.strength = Math.floor(Math.random() * 21);
    this.dexterity = Math.floor(Math.random() * 21);
    this.constitution = Math.floor(Math.random() * 21);
    this.intelligence = Math.floor(Math.random() * 21);
    this.wisdom = Math.floor(Math.random() * 21);
    this.charisma = Math.floor(Math.random() * 21);
    this.maxAttributionPoint = 0;
  }
  Reset() {
    this.strength =10;
    this.dexterity = 10;
    this.constitution = 10;
    this.intelligence = 10;
    this.wisdom = 10;
    this.charisma = 10;
    this.maxAttributionPoint = 20;
  }
}