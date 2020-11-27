import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

  }

  getQuery(query: string) {
    const url: string = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      "Authorization": "Bearer BQDKYBLOHI7B5JCBNMRlwXx0Y1qWm8fILCw6OhA8S3ZddEx0hAwZreiwNKGNARWRTtM_JeV0suNP4CltIn0"
    });
    return this.http.get(url, { headers })
  }



  getNewReleses() {
    return this.getQuery("browse/new-releases").pipe(map(data => data["albums"].items))
  }


  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data => data["artists"].items))
  }

}
