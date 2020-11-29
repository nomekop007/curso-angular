import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input() items: any[] = [];


  constructor(private router: Router) { }


  verArtista(item: any) {

    console.log(item)
    let artistaId;

    if (item.type === "album") {

      artistaId = item.artists[0].id;

    } else {
      artistaId = item.id;
    }
    console.log(artistaId);
    this.router.navigate(["/artist", artistaId]);
  }

}
