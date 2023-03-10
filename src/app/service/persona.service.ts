import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { environment } from 'src/environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

 URL = 'https://portfolio-hugo-montefusco.onrender.com/persona';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.URL + 'lista');
  }
  public details(id: number): Observable<persona>{
    return this.httpClient.get<persona>(this.URL + `detail/${id}`);
  }

  /*public save(Persona: persona): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', Persona);
  }*/

  public update(id: number, Persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, Persona);
  }

  /*public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }*/


  
}
