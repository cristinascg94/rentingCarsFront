import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = 'https://renting-cars-back.vercel.app/api/users';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getMeUserData (userId: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.user?.token}`,
    });
    return this.http.get(`${this.url}/${userId}`, { headers });
  }
}
