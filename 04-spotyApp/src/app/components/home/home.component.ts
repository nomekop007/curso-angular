import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  messajeError: string;


  constructor(private spotify: SpotifyService) {

    this.loading = true;

    this.spotify.getNewReleses().subscribe((data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
      this.error = false;

    }, (err) => {
      this.loading = false;
      this.error = true;
      this.messajeError = err.error.error.message
    })
  }


}
