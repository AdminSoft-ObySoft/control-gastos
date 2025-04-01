import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { Subject } from 'rxjs';
import { RUTAS_CAMARONERAS } from '../../../../../core/constants/data_const';

@Component({
  selector: 'app-viajes',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgxMaskDirective
  ],
  templateUrl: './viajes.component.html',
  styleUrl: './viajes.component.scss',
  providers: [provideNgxMask()],
})
export class ViajesComponent implements OnInit, OnDestroy {

  protected formMovDiarios!: FormGroup;
  protected formViajes!: FormArray;
  protected listaDestinos: {codigo:string, nombre:string, valor:number}[] = [];

  private readonly destroy$: Subject<void> = new Subject();

  protected fb = inject(FormBuilder);
  private rootFormGroup = inject(FormGroupDirective);

  constructor() {
    this.listaDestinos = [...RUTAS_CAMARONERAS]
  }

  ngOnInit(): void {
    this.formMovDiarios = this.rootFormGroup.control as FormGroup;
    this.formViajes= this.rootFormGroup.control.get('viajes') as FormArray;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  newItem() {
    this.formViajes.insert(0, this.fb.group({
      id:             [''],
      id_registro:    [''],
      destino:        ['', Validators.required],
      descripcion:    ['', Validators.required],
      valor:          ['', Validators.required],
      deleted:        [false],
    }));
  }

  eliminarItem(item: any,index: number) {
    if (item.id) this.formViajes.at(index).get('deleted')?.patchValue(true, { emitEvent: false });
    else this.formViajes.removeAt(index);
  }

  onTipoChange(item: any, position:number) {
    let filterItem = this.listaDestinos.find(destino => destino.codigo === item)
    this.formViajes.at(position).get('valor')?.patchValue(filterItem?.valor, { emitEvent: false })
  }

}
