import { Component, Input } from '@angular/core'
import { Contenido } from 'src/app/interface/contenido.interface'
import { Experiencia } from 'src/app/interface/experiencia.interface'
import { EmergenteService } from '../../services/emergente.service'
import { ContenidoService } from '../../../../services/contenido.service'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent {
  @Input() experiencias: Experiencia[] = []
  url=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/");
  get contenido() {
    this.url=this.sanitizer.bypassSecurityTrustResourceUrl(this.contenidoService.contenido[0].ruta_contenido ) 

    return this.contenidoService.contenido[0]
  }
  constructor(
    private emergenteService: EmergenteService,
    private contenidoService: ContenidoService,
    private sanitizer: DomSanitizer,

  ) {}
  cerrarContenido = () => this.emergenteService.cerrar()
  
}