import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { IClasse } from '../../interface/IClasse';
import { Open5eService } from '../../service/open5e.service';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [NgFor],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  public resultClasses: IClasse[] = [];
  constructor(private openService: Open5eService) {}
  ngOnInit() {
    this.loadClasses();
  }
  loadClasses() {
    this.openService.getAllClasses().subscribe(
      {
          next: (res) => {
            this.resultClasses = res;
          },
        error: (err: any) => {
          console.log(err);
        },
      });
  }
}

