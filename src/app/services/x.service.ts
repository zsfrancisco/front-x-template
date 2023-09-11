import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { XPost } from '../types';
import { X_POST } from '../data';

@Injectable({
  providedIn: 'root'
})
export class XService {
  getXPosts(): Observable<XPost[]> {
    return of(X_POST)
  }
}
