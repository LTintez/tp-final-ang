import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private usersUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  login(email: string, password: string): Observable<boolean> {
    return this.getUsers().pipe(
      map((users: User[]) => {
        const user = users.find(
          (u) => u.email === email && u.password === password
        );
        return !!user;
      })
    );
  }

  checkEmailExists(email: string): Observable<boolean> {
    return this.http
      .get<any[]>(`${this.usersUrl}?email=${email}`)
      .pipe(map((users) => users.length > 0));
  }

  registerUser(name: string, email: string, password: string): Observable<any> {
    const newUser = { name, email, password };
    return this.http.post(this.usersUrl, newUser);
  }
}
