import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OeuvresService } from './../../services/oeuvres.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage {
  oeuvre: any;
  check = true;

  constructor(route: ActivatedRoute, private oeuvreService: OeuvresService) { 
    const id = parseInt(route.snapshot.params.id, 10);
    this.load(id);
  }

  load(id: number) {
    this.oeuvreService.get(id).subscribe(data => {
      this.oeuvre = data;
      this.check = false;
    }, () => {
      this.check = false;
    });
  }

}
