import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  private loginSubject = new BehaviorSubject<boolean>(false);
  login$ = this.loginSubject.asObservable();

  updateLogin(isLoggedIn: boolean): void {
    this.loginSubject.next(isLoggedIn);
  }
}