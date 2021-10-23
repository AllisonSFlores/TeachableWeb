import { Injectable } from '@angular/core';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  API_URL='http://localhost:3000/'
  constructor(
    private http:HttpClient
  ) { }


  openPDF(DATA:HTMLElement):Observable<any> {
    console.log(`http://localhost:3000/send`);
    return this.http.post(`http://localhost:3000/send`,
    {"email":"allissolanof2@gmail.com"
  });
    /*html2canvas(DATA).then(canvas => {
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

        let fd = new FormData(PDF.getFormObject('HTMLData'));
        fd.append('file',PDF.output('blob'));
        
    }); */
  }

  public sedFile(DATA:HTMLElement,d:HTMLFormElement ):void{
    let pdf = this.openPDF(DATA);
    //let fd = new FormData(pdf?.path());
    this.http.post(`${this.API_URL}sendEmail`,
    {header:{'Content-Type':'multipart/form-data'}}
    );
  }
}
