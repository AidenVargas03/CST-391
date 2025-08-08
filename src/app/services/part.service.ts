import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Part } from '../models/part';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PartService {
  // backend base
  private base = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // get parts for a given PC id
  getPartsByPC(pcId: number): Observable<Part[]> {
    return this.http.get<Part[]>(`${this.base}/pcs/${pcId}/parts`);
  }

  // add part to a PC
  addPart(pcId: number, part: Part): Observable<Part> {
    return this.http.post<Part>(`${this.base}/pcs/${pcId}/parts`, part);
  }

  // update by part id
  updatePart(id: number, part: Part): Observable<any> {
    return this.http.put<any>(`${this.base}/parts/${id}`, part);
  }

  // delete by part id
  deletePart(id: number): Observable<any> {
    return this.http.delete<any>(`${this.base}/parts/${id}`);
  }

  // search parts (global)
  searchParts(q: string): Observable<Part[]> {
    return this.http.get<Part[]>(`${this.base}/parts/search?q=${encodeURIComponent(q)}`);
  }

  // get single part by id (for edit/view)
  getPartById(id: number): Observable<Part> {
    return this.http.get<Part>(`${this.base}/parts/${id}`);
  }
}
