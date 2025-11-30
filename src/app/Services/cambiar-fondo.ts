import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CambiarFondo {
  private backgroundSubject = new BehaviorSubject<string>('/images/fondo.jpg');
  currentBackground$ = this.backgroundSubject.asObservable();

  setFondo(imageUrl: string): void {
    this.backgroundSubject.next(imageUrl);
  }
}
