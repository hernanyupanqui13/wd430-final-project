import { Injectable } from '@angular/core';
import { environment } from '../enviroments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoteModel } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteHttpService {

  private readonly apiUrl =  environment.apiUrl;

  constructor(private hhtpClient :  HttpClient) { }


  public getAll(): Observable<NoteModel[]> {
    return this.hhtpClient.get<NoteModel[]>(this.apiUrl);
  }

  public getById(id: number): Observable<NoteModel> {
    return this.hhtpClient.get<NoteModel>(`${this.apiUrl}/${id}`);
  }

  public create(note: NoteModel): Observable<NoteModel> {
    return this.hhtpClient.post<NoteModel>(this.apiUrl, note);
  }

  public update(note: NoteModel): Observable<NoteModel> {
    return this.hhtpClient.put<NoteModel>(`${this.apiUrl}/${note.id}`, note);
  }

  public delete(id: number): Observable<any> {
    return this.hhtpClient.delete(`${this.apiUrl}/${id}`);
  }
}
