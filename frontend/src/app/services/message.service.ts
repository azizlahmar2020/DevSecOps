// message.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private successMessageSource = new Subject<string>();

  successMessage$ = this.successMessageSource.asObservable();

  sendSuccessMessage(message: string) {
    this.successMessageSource.next(message);
  }
}
