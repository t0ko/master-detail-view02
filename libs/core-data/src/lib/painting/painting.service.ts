import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Painting } from './painting';
import { Observable } from 'rxjs';

const BASEURL = 'https://master-detail-view-db01.herokuapp.com/paintings';

@Injectable({
  providedIn: 'root',
})
export class PaintingService {
  constructor(private hc: HttpClient) {}

  getAll(): Observable<any> {
    return this.hc.get(BASEURL);
  }

  getUrlForId(id: string) {
    return `${BASEURL}/${id}`;
  }

  create(painting: Painting) {
    return this.hc.post(this.getUrlForId(painting.id), painting);
  }

  delete(soundId: string) {
    return this.hc.delete(this.getUrlForId(soundId));
  }

  update(painting: Painting) {
    return this.hc.put(this.getUrlForId(painting.id), painting);
  }
}
