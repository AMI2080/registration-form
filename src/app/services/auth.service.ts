import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private stepOneValue: any[];

  private stepTwoValue: any[];

  constructor() {}

  public registrationStepOne(data: any[]): Observable<boolean> {
    return new Observable((observer) => {
      setTimeout(() => {
        this.stepOneValue = data;
        observer.next(true);
      }, 2000);
    });
  }
}
