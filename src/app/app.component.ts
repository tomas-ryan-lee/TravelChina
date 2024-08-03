import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Liste des restaurants', url: '/restaurants', icon: 'restaurant' },
    { title: 'Convertisseur de monnaie', url: '/convertisseur', icon: 'cash' },
    { title: 'Guide culturel', url: '/cultural-guide', icon: 'book' },
  ];
  constructor() {}
}
