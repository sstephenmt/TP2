import { Component, ViewChild, ElementRef } from '@angular/core'
import { CalifacionService } from '../../services/califacion.service'
import { Calificacion } from 'src/app/interface/calificacion.interface'

@Component({
  selector: 'app-califacion',
  templateUrl: './califacion.component.html',
  styleUrls: ['./califacion.component.css']
})
export class CalifacionComponent {
  @ViewChild('estrellas') calificacion!: ElementRef<HTMLSelectElement>
  @ViewChild('comentario') comentario!: ElementRef<HTMLInputElement>

  constructor(private califacionService: CalifacionService) {} // private califacionService: CalificacionService

  calificar() {
    const fechaActual = new Date()
    const dia = fechaActual.getDate()
    const mes = fechaActual.getMonth() + 1
    const año = fechaActual.getFullYear()
    const data = {
      puntaje: this.calificacion.nativeElement.value,
      tag_valoracion: this.comentario.nativeElement.value,
      fecha_valoracion: `${año}-${mes}-${dia}`
    }
    this.califacionService.postCalificacion(data).subscribe(() => {
      this.calificacion.nativeElement.value = '1'
      this.comentario.nativeElement.value = ''
    })
  }
}
