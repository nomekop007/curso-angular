import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

  }


  getNewReleses() {

    const headers = new HttpHeaders({
      "Authorization": "Bearer BQCP49dwVwkwtPH8HQJJUDvKs-brK1nWRVMyV71a0wcSkEnzlJIMqjhO3cVqCdymkiCFiI-7703P7AY7xn4"
    });
    return this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers: headers });
  }

}
