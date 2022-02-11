import { OeuvresService } from './../../services/oeuvres.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-favori',
  templateUrl: './favori.page.html',
  styleUrls: ['./favori.page.scss'],
})
export class FavoriPage {

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