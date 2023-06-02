import { Injectable } from '@angular/core';
import { Sede } from '../interface/sede.interface';
import { HttpClient } from '@angular/common/http';
import { tap, of, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SedeService {

  constructor(private http: HttpClient) {}

  getSedes() {
    const URL = `http://localhost:1212/sede`;
    return this.http.get<Sede[]>(URL);
  }

  getSede(id: number) {
    const URL = `http://localhost:1212/sede/${id}`;
    return this.http.get<Sede>(URL);
  }
}
