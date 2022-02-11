import { OeuvresService } from './../../services/oeuvres.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  oeuvres : Array<any>;
  check=true;

  constructor(private OeuvreService: OeuvresService) {
    this.load();
  }

  load() {
    this.OeuvreService.FunctionGetAll().subscribe(data => {
      this.oeuvres = data;
      this.check = false;
    }, () => {
      this.check = false;
    });
  }

}
