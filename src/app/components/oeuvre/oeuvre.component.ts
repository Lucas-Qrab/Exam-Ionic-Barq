import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-oeuvre',
  templateUrl: './oeuvre.component.html',
  styleUrls: ['./oeuvre.component.scss'],
})
export class OeuvreComponent implements OnInit {
  
  @Input() name = "unknown";
  @Input() date = "0000";
  @Input() auteur = "unknown";
  @Input() photo = "../../assets/default.jpg";
  @Input() latitude = "";
  @Input() longitude = "";

  constructor() { }

  ngOnInit() {}

}
