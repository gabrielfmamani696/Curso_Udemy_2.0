import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [UserComponent, UserFormComponent],
  templateUrl: './user-app.component.html',
  styleUrls: ['./user-app.component.css']
})
export class UserAppComponent implements OnInit {
  title: string = 'Listado de usuarios Carpeta 08!';

  users: User[] = [];

  userSelected: User;

  open: boolean = false;

  constructor(private service: UserService) {
    this.userSelected = new User();
  }

  ngOnInit(): void {
    this.service.findAll().subscribe(users => this.users = users);
  }

  addUser(user: User) {
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
    this.setOpen();
  }

  removeUser(id: number): void {
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
    
  }

  setSelectedUser(userRow: User): void {
    this.userSelected = { ...userRow };
    this.open = true;
  }

  setOpen() {
    
    this.userSelected = new User(); //limpiamos this.userSelected despues de cerrar el modal con la pulsacion
    this.open = !this.open;
  }
}
