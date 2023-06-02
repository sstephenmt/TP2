import { Component, Input } from '@angular/core';
import { Barra } from 'src/app/interface/barra.interface'

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent {
  @Input() barras: Barra[] = []

  constructor() {}
  ngOnInit() {}
}
