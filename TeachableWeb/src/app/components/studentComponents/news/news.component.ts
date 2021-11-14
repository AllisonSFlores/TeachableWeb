import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

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
  a=[{"name":"Noticias","link":`/student/${this.id}/newsS/${this.id}`},
  {"name":"Salir","link":"/"},
  {"name":"Tareas","link":`/student/${this.id}/assigmentsS/${this.id}`},
  {"name":"Chat","link":`/student/${this.id}/chatS/${this.id}`}];
  
  constructor(
    private formBuilder: FormBuilder,
    private rutaActiva: ActivatedRoute,
    private studentService: StudentService,
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
    this.studentService.newNews(tittle,des,this.id).subscribe(
      (res)=>{
        this.getNews();
        console.log(res);
        this.messageCofirm()
      },
      (err)=>{console.log(err)});
  }
  getNews(){
    this.studentService.getNews(this.id).subscribe(
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
