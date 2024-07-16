import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Deuda } from '../../models/models';
import { DatadeudaService } from '../../services/datadeuda.service';

@Component({
  selector: 'app-deudas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './deudas.component.html',
  styleUrl: './deudas.component.scss'
})
export class DeudasComponent {
  cedula = ""
  listadoDeudas :Deuda[]= []
  cliente = 'Sin buscar'

  constructor(private deudaService: DatadeudaService, private obrserver: ChangeDetectorRef){}

  ngOnInit(){
    this.deudaService.listarDeudas().subscribe(deudas => {
      this.listadoDeudas = []
      this.listadoDeudas = deudas
      this.obrserver.detectChanges()
    })
  }

  obtenerCliente(){
    console.log('click')
    this.deudaService.obtenerDeuda(this.cedula).subscribe(cliente => this.cliente = cliente.deu_nombre)
  }




}
