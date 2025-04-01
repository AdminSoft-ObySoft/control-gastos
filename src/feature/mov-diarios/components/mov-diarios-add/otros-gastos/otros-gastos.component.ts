import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { Subject } from 'rxjs';
import { GASTOS_ITEMS } from '../../../../../core/constants/data_const';
@Component({
  selector: 'app-otros-gastos',
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
  templateUrl: './otros-gastos.component.html',
  styleUrl: './otros-gastos.component.scss',
  providers: [provideNgxMask()],
})
export class OtrosGastosComponent implements OnInit, OnDestroy {



  protected formMovDiarios!: FormGroup;
  protected formOtrosGastos!: FormArray;
  protected tiposGastos: {codigo:string, nombre:string}[] = [];

  private readonly destroy$: Subject<void> = new Subject();

  protected fb = inject(FormBuilder);
  private rootFormGroup = inject(FormGroupDirective);

  constructor() {
    this.tiposGastos = [...GASTOS_ITEMS];
  }

  ngOnInit(): void {
    this.formMovDiarios = this.rootFormGroup.control as FormGroup;
    this.formOtrosGastos= this.rootFormGroup.control.get('gastos') as FormArray;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  newItem() {
    this.formOtrosGastos.insert(0, this.fb.group({
      id:             [''],
      id_registro:    [''],
      gasto:          ['', Validators.required],
      descripcion:    [''],
      valor:          ['', Validators.required],
      deleted:        [false],
    }));
  }

  eliminarItem(item: any,index: number) {
    if (item.id) this.formOtrosGastos.at(index).get('deleted')?.patchValue(true, { emitEvent: false });
    else this.formOtrosGastos.removeAt(index);
  }

}
