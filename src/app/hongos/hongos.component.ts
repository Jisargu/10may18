import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hongos',
  templateUrl: './hongos.component.html',
  styleUrls: ['./hongos.component.css']
})
export class HongosComponent implements OnInit {
hongo1="Champiñon";
hongo2="Portobello";
hongo3="Seta";
  constructor() { }

  ngOnInit() {
  }

}
