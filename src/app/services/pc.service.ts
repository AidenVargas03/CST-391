import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PC {
  id?: number;
  name: string;
  owner: string;
}

@Injectable({ providedIn: 'root' })
export class PcService {
  private apiUrl = 'http://localhost:3000/api/pcs';

  constructor(private http: HttpClient) {}

  getAllPCs(): Observable<PC[]> {
    return this.http.get<PC[]>(this.apiUrl);
  }

  addPC(pc: PC): Observable<PC> {
    return this.http.post<PC>(this.apiUrl, pc);
  }

  updatePC(id: number, pc: PC): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, pc);
  }

  deletePC(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}


