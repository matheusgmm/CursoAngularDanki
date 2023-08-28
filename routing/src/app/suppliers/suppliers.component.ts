import { Component } from '@angular/core';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent {
  suppliers = [
    {
      id: 1,
      name: 'Philco'
    },
    {
      id: 2,
      name: 'Sony'
    },
    {
      id: 3,
      name: 'Gradiente'
    }
  ];
}
