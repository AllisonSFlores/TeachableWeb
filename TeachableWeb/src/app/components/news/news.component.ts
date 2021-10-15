import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news=[{"title":"Bienvenida",
  "description":"Bienvenidos al curso de estructuras, espero les guste mucho. Nos vemos..."},
  {"title":"Info de primer clase",
  "description":"Deben enviarme un correo para agregarlos a las lista de google"}
  ];
  form :FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.form=this.formBuilder.group({
      tittle:['',Validators.required],
      description:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  agregar(){
    const tittle = this.form.value.tittle;
    const des = this.form.value.description;
    console.log("Falta enviar esto a la base",tittle,des);
    this.news=[{"title":"Bienvenida",
              "description":"Bienvenidos al curso de estructuras, espero les guste mucho. Nos vemos..."},
              {"title":"Info de primer clase",
              "description":"Deben enviarme un correo para agregarlos a las lista de google"},
              {"title":tittle,
              "description":"Falta enviar a la base de datos"}
  ];
  }

}
