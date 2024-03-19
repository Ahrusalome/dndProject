import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { IClasse } from '../../interface/IClasse';
import { ActivatedRoute, Router } from '@angular/router';
import { Open5eService } from '../../service/open5e.service';
import { IRace } from '../../interface/IRace';
import { IAlignment } from '../../interface/IAlignement';
import { IBackground } from '../../interface/IBackground';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent implements OnInit {
  @Output()
  oui = new EventEmitter<string>();
  clicked(){
    this.oui.emit("non");
  }
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private openService: Open5eService
  ) {}
  ngOnInit() {
    this.LoadClasses()
    this.LoadRaces();
    this.LoadBackgrounds();
  }
  classes: IClasse[] = [];
  races: IRace[] = [];
  alignements: IAlignment[] = this.openService.getAllAlignments();
  backgrounds: IBackground[] = [];
  LoadClasses()  {
    this.openService.getAllClasses().subscribe(
      {
        next: (res) => {
          this.classes = res;
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }
  LoadRaces() {
    this.openService.getAllRaces().subscribe(
      {
        next: (res) => {
          this.races = res;
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }
  LoadBackgrounds() {
    this.openService.getBackgrounds().subscribe(
      {
        next: (res) => {
          this.backgrounds = res;
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }
  fg = new FormGroup({
    name: new FormControl('', [Validators.required]),
    race: new FormControl('', [Validators.required]),
    background: new FormControl('', [Validators.required]),
    alinement: new FormControl('', [Validators.required]),
    playersName: new FormControl('', [Validators.required]),
    exp: new FormControl('', [Validators.required]),
  });
  get name() {
    return this.fg.get('name');
  }
  get race() {
    return this.fg.get('race');
  }
  get background() {
    return this.fg.get('background');
  }
  get alinement() {
    return this.fg.get('alinement');
  }
  get playersName() {
    return this.fg.get('playersName');
  }
  get exp() {
    return this.fg.get('exp');
  }
}

