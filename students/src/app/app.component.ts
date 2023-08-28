import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students = [{ type: 'approved', name: 'José', description: 'Masculino'}];

  changeFirst () {
    this.students[0].type = 'substitute';
  }

  destroyFirst () {
    this.students.splice(0, 1);
  }

  aprovedAdded(studentData: { name: string, description: string }) {
    this.students.push({
      type: 'approved',
      name: studentData.name,
      description: studentData.description
    })
  }

  substituteAdded(studentData: { name: string, description: string }) {
    this.students.push({
      type: 'substitute',
      name: studentData.name,
      description: studentData.description
    })
  }
}
