import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  form :FormGroup;
  id =this.rutaActiva.snapshot.params.id;
  news=[{"title":"Bienvenida",
  "description":"Nos vemos..."}
  ];
  a=[{"name":"Noticias","link":`/teacher/${this.id}/newsT/${this.id}`},
    {"name":"Salir","link":"/login"},
    {"name":"Tareas","link":`/teacher/${this.id}/assigmentsT/${this.id}`},
    {"name":"Estudiantes","link":`/teacher/${this.id}/listStudenT/${this.id}`},
    {"name":"Chat","link":`/teacher/${this.id}/chat/${this.id}`}];
  
  constructor(
    private formBuilder: FormBuilder,
    private rutaActiva: ActivatedRoute,
    private teacherService: TeacherService,
    private _snackBar: MatSnackBar,
  ) {
    this.form=this.formBuilder.group({
      tittle:['',Validators.required],
      description:['',Validators.required]
    })
   }

  ngOnInit(): void {
    const id =this.rutaActiva.snapshot.params.id;
    this.getNews();
  }
  newNews(){
    const tittle = this.form.value.tittle;
    const des = this.form.value.description;
    this.teacherService.newNews(tittle,des,this.id).subscribe(
      (res)=>{
        this.getNews();
        console.log(res);
        this.messageCofirm()
      },
      (err)=>{console.log(err)});
  }
  getNews(){
    this.teacherService.getNews(this.id).subscribe(
      (res)=>{
        console.log(res[0].news);
        this.news=res[0].news;
      },
      (err)=>{console.log(err)});
  }
  messageCofirm(){
    this._snackBar.open('Noticia agregada','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'})
  }

}
