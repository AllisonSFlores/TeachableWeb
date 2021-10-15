import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  opened = false;
  neww="/newsS";
  @Input() links!:any[];
  //link=[{"name":"Login","link":"/login"},{"name":"Noticias","link":"/newsS"}];
  constructor() { }

  ngOnInit(): void {
  }

}
