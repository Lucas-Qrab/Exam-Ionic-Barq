import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  @Input() alerte = 'Une erreur est survenue, svp réessayer ultérieurement';

  constructor() { }

  ngOnInit() {}

}
