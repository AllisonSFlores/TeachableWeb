import { Injectable } from '@angular/core';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  API_URL='https://sendemailpdf.herokuapp.com/'
  constructor(
    private http:HttpClient
  ) { }


  openPDF(DATA:HTMLElement) {
    html2canvas(DATA).then(canvas => {
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

        let fd = new FormData();
        fd.set('file',PDF.output('blob'));
        this.http.post(`${this.API_URL}`, fd).subscribe(res => {console.log(res)});
        this.http.post(`${this.API_URL}send`, 
        {
          "email":"allissolanof2@gmail.com"
        }).subscribe(res => {console.log(res)});
    }); 
  }

  public sedFile(DATA:HTMLElement,d:HTMLFormElement ):void{
    let pdf = this.openPDF(DATA);
    //let fd = new FormData(pdf?.path());
    this.http.post(`${this.API_URL}sendEmail`,
    {header:{'Content-Type':'multipart/form-data'}}
    );
  }

  public sendUser(email:string,pass:string){
    this.http.post(`${this.API_URL}sendUser`, 
        {
          email:email,
          pass:pass
        }).subscribe(res => {console.log(res)})
  }
}
