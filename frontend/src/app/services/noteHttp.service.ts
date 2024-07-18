import { Injectable } from '@angular/core';
import { environment } from '../enviroments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoteModel } from '../models/note.model';
import { CreateSrvResponse, UpdateSrvResponse } from '../models/notes-dto';

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

  public create(note: NoteModel): Observable<CreateSrvResponse> {
    return this.hhtpClient.post<CreateSrvResponse>(this.apiUrl, note);
  }

  public update(note: NoteModel): Observable<UpdateSrvResponse> {
    return this.hhtpClient.put<UpdateSrvResponse>(`${this.apiUrl}/${note._id}`, note);
  }

  public delete(id: number): Observable<any> {
    return this.hhtpClient.delete<any>(`${this.apiUrl}/${id}`, {
      observe: "events"
    });
  }
}
