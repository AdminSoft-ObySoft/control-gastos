import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../shared/components/sidebar/sidebar.component";
import { MovDiariosAddComponent } from '../feature/mov-diarios/components/mov-diarios-add/mov-diarios-add.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, MovDiariosAddComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'control-valores-buseta';
}
