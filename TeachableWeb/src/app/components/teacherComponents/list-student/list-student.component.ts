import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {
  list=[{"id_card":2513,
        "name":"Allison",
        "email":"allissolano@gmail"},{"id_card":2513,
        "name":"Allison",
        "email":"allissolano@gmail"}];
  constructor() { }

  ngOnInit(): void {
  }
  imprimirList(){


  }

}
