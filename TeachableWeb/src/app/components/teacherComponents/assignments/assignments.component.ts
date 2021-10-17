import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
  news=[{"title":"Bienvenida",
    "description":"Bienvenidos al curso de estructuras, espero les guste mucho. Nos vemos...",
    "deadline":"12"},
    {"title":"Info de primer clase",
    "description":"Deben enviarme un correo para agregarlos a las lista de google",
    "deadline":"12"}
    ];
  form :FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form=this.formBuilder.group({
      tittle:['',Validators.required],
      description:['',Validators.required],
      deadline:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  agregar(){
    const tittle = this.form.value.tittle;
    const des = this.form.value.description;
    const dl = this.form.value.deadline;
    console.log("Falta enviar esto a la base",tittle,des,dl);
    this.news=[{"title":"Bienvenida",
              "description":"Bienvenidos al curso de estructuras, espero les guste mucho. Nos vemos...",
              "deadline":"12"},
              {"title":"Info de primer clase",
              "description":"Deben enviarme un correo para agregarlos a las lista de google",
              "deadline":"12"},
              {"title":tittle,
              "description":"Falta enviar a la base de datos",
              "deadline":dl}
              ];
  }
}
