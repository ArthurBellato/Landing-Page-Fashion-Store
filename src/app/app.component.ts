import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  template: '<app-landing-page></app-landing-page>',
  standalone: true,
  imports: [LandingPageComponent]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}