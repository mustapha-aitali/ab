import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IgxIconButtonDirective, IgxIconComponent, IgxRippleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  imports: [IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
