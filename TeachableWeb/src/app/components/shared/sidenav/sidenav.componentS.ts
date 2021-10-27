import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponentS implements OnInit {
  opened = false;
  @Input() links!:any[];
  //links=[{"name":"Login","link":"/login"},{"name":"Noticias","link":"/newsS"}];
  constructor() { }

  ngOnInit(): void {
  }
  /*<ul class="nav">
            <li *ngFor="let item of links" ><span><a routerLink={{item.link}}><i class="fas fa-chart-line"></i>{{item.name}}</a></span></li>
        </ul>*/

}