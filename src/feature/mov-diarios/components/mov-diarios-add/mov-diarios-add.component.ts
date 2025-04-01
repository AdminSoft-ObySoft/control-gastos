import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OtrosGastosComponent } from "./otros-gastos/otros-gastos.component";
import { ViajesComponent } from "./viajes/viajes.component";
import { RUTAS_CAMARONERAS } from '../../../../core/constants/data_const';
import { ShowValueComponent } from '../../../../shared/components/sidebar/modal/show-value/show-value.component';

@Component({
  selector: 'app-mov-diarios-add',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    OtrosGastosComponent,
    ViajesComponent
  ],
  templateUrl: './mov-diarios-add.component.html',
  styleUrl: './mov-diarios-add.component.scss',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovDiariosAddComponent implements OnInit {
  rutas_camaronera: { codigo: string; nombre: string; valor: number; }[];

saveProveedor() {
throw new Error('Method not implemented.');
}
navigateNuevo() {
throw new Error('Method not implemented.');
}
navigateListaProveedor() {
throw new Error('Method not implemented.');
}

  protected fb = inject(FormBuilder);
  protected dialog = inject(MatDialog);

  protected formMovDiarios!: FormGroup;

  // Estado para controlar si los acordeones están abiertos o cerrados
  protected isOpen: boolean[] = [false, false, false, false]; // Cambia el tamaño según el número de acordeones

  protected formControls: string[] = [];

  toggleAccordion(index: number): void {
    // Si el acordeón ya está abierto, lo cerramos; si no, cerramos los otros y abrimos este
    this.isOpen = this.isOpen.map((_, i) => (i === index ? !this.isOpen[i] : false));
  }



  constructor() {
    this.rutas_camaronera = [...RUTAS_CAMARONERAS];
  }

  ngOnInit(): void {
    this.formMovDiarios = this.initFormMovDiario();
  }

  initFormMovDiario() {
    return this.fb.group(
      {
        id:   [''],
        fecha:['', Validators.required],
        gastos: this.fb.array([]),
        viajes: this.fb.array([])
      }
    )
  }



  OpenModalValores(): void{
    const dialogRef = this.dialog.open(ShowValueComponent, {
      width: '1000px',
      height: '650px',
      exitAnimationDuration: '500ms',
      enterAnimationDuration: '500ms',
      data: {dataForm: this.formMovDiarios.value},
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  hasRequiredError(field:string) {
    const control = this.formMovDiarios.get(field);
    return control?.hasError('required') && (control.touched);
  }

}
