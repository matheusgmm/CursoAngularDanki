import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  users = [
    { name: 'José da Silva', status: 'ativo' },
    { name: 'Maria das Dores', status: 'inativo' },
    { name: 'Francisco Pereira', status: 'férias' },
  ];

  statusUpdate = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  createUser(name: string, status: string) {
    this.users.push({ name: name, status: status });
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.users[id].status = status;
    this.loggingService.logStatusChange(status);
  }

}
