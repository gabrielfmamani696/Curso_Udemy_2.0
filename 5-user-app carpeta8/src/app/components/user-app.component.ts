import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SharingDataService } from '../services/sharing-data.service';

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './user-app.component.html',
  styleUrls: ['./user-app.component.css']
})
export class UserAppComponent implements OnInit {

  users: User[] = [];

  userSelected: User;

  constructor(private service: UserService, 
    private sharingDataService: SharingDataService) {
    this.userSelected = new User();
  }

  ngOnInit(): void {
    //se llenan los datos de users desde el servicio
    this.service.findAll().subscribe(users => this.users = users);
    // suscribirnos a todos los eventos
    this.addUser();
    this.setSelectedUser();
    this.removeUser();
  }

  addUser() {
    this.sharingDataService.newUserEventEmitter.subscribe( user => {
      if (user.id > 0) {
        // actualizar info de un user
        //esta funcion modifica la info de users con map, buscamos todos los objetos u de la lista y si este tiene un id parecido al user con el que se compara
        // entonces se actualiza con la copia de ...user, sino se devuelve la misma informacion anterior
        this.users = this.users.map(u => (u.id == user.id) ? { ...user } : u);
      } else {
        // agregar un user
        this.users = [... this.users, { ...user, id: new Date().getTime() }];
      }
      Swal.fire({
        title: "Guardado!",
        text: "Usuario guardado con exito!",
        icon: "success"
      });
      this.userSelected = new User(); //limpiamos this.userSelected despues de usarlo
    })
  }

  removeUser(): void {
    this.sharingDataService.idUserEventEmitter.subscribe(id => {
      Swal.fire({
        title: "Seguro que quiere eliminar?",
        text: "Cuidado el usuario sera eliminado del sistema!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si"
      }).then((result) => {
        if (result.isConfirmed) {
          this.users = this.users.filter(user => user.id != id);
          Swal.fire({
            title: "Eliminado!",
            text: "Usuario eliminado con exito.",
            icon: "success"
          });
        }
      });
    })
    
  }

  setSelectedUser(): void {
    this.sharingDataService.selectdUserEventEmitter.subscribe(userRow => {
      this.userSelected = { ...userRow };
    })
  }

}
