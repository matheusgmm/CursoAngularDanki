import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logStatusChange(status: string) {
    console.log('Foi alterado status do usuário para ' + status);
  }

}
