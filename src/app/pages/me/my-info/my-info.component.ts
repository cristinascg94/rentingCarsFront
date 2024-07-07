import { AuthService } from './../../../services/auth.service';
import { Component } from '@angular/core';
import { User } from '../../../interfaces/user';
import { UsersService } from '../../../services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-info',
  standalone: true,
  imports: [],
  templateUrl: './my-info.component.html',
  styleUrl: './my-info.component.css'
})
export class MyInfoComponent {

  user: User | null = null;

  constructor( private usersService: UsersService, private AuthService: AuthService) {}

  // ngOnInit(): void {
  //   this.usersService.getMeUserData().subscribe({
  //     next: (response) => {
  //       console.log('User info received:', response); // Añadir log
  //       this.user = response;
  //     },
  //     error: (error) => {
  //       console.error('Error fetching user info:', error); // Añadir log
  //       Swal.fire({
  //         title: 'Error',
  //         text: 'No se pudo cargar la información del usuario',
  //         icon: 'error',
  //         showConfirmButton: false,
  //         timer: 1500
  //       });
  //     }
  //   });
  // }


}
