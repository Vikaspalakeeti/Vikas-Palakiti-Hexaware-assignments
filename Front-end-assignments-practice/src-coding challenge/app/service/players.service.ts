import { Injectable } from '@angular/core';
import { Players } from '../model/Players';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private baseUrl = 'http://localhost:8899/api/players'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  addPlayer(player: Players): Observable<Players> {
    return this.http.post<Players>(`${this.baseUrl}/add`, player);
  }


  getAllJerseyNumbers(): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/allJerseyNumbers`);



}}