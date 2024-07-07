import { Component } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle';
import { VehicleService } from '../../services/vehicle.service';
import { DivisaPipe } from '../../pipes/divisa.pipe';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterVehiclesPipe } from '../../pipes/filter-vehicles.pipe';
import Swal from "sweetalert2";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DivisaPipe, RouterModule, FormsModule, FilterVehiclesPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  vehicles: Vehicle[] =[]
  filtro: string = ""

  constructor(private vehicleService: VehicleService){
    vehicleService.getAll().subscribe({
      next: (response)=>{
        this.vehicles = response as Vehicle[]
      },
      error: ()=>{
        Swal.fire({
          title: "Oops!",
          text: "Ha ocurrido un error",
          icon: "error",
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }
}
