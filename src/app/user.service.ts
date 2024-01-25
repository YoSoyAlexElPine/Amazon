// user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './INTERFACES/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'assets/users.json';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  addUser(user: User): Observable<User[]> {
    // Obtener usuarios actuales
    return this.getUsers().pipe(
      map((currentUsers: User[]) => {
        // Agregar el nuevo usuario
        const updatedUsers = [...currentUsers, user];
        return updatedUsers;
      })
    );
  }
}
