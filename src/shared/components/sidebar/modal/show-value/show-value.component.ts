import { MatButtonModule } from '@angular/material/button';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-show-value',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, JsonPipe],
  templateUrl: './show-value.component.html',
  styleUrl: './show-value.component.scss'
})
export class ShowValueComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,) { }

}
