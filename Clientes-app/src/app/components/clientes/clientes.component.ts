import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'clientes-comp',
  standalone: true,
  imports: [],
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit{

  clientes: Cliente[] = [
  ];
  constructor(private clienteService: ClienteService) {

  }
  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      // argumento => f anonima
      (data) => { 
        this.clientes = data
      }
    );
  }
}
