import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Booking } from '../interfaces/booking'; 

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  url: string = 'https://renting-cars-back.vercel.app/api/bookings';
  constructor(private http: HttpClient, private authService: AuthService) {}

  getBookingsByUserId(userId: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.user?.token}`,
    });
    return this.http.get(`${this.url}/user/${userId}`, { headers });
  }

  saveBooking(
    vehicleId: string,
    sDate: string,
    eDate: string,
    price: number,
    discount: number
  ) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.user?.token}`,
    });

    return this.http.post(this.url, {
      vehicle: vehicleId,
      startDate: sDate,
      endDate: eDate,
      price: price,
      discount: discount,
    }, {headers});
  }

  deleteBoooking(bookingId: string){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.user?.token}`,
    });
    return this.http.delete(`${this.url}/${this.authService.user?.id}/${bookingId}`,{headers})
  }

  updateBookingDates(bookingId: string, startDate: string, endDate: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.user?.token}`,
    });

    return this.http.patch(`${this.url}/${bookingId}`, { startDate, endDate }, { headers });
  }
}

 