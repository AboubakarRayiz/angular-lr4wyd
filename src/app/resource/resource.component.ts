import { Component } from '@angular/core';
import { Resource } from './resource.model';

@Component({
  selector: 'resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css'],
})
export class ResourceComponent {
  //name = 'Angular';
  resource: Resource = {
    id: 1,
    nom: 'ABOUBAKAR',
    age: 99,
    date: new Date(),
    gender: 'Male',
  };

  constructor() {}

  ngOnInit(): void {}
}
