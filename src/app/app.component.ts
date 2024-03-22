import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Roupas', url: '/folder/roupas', icon: 'shirt' },
    { title: 'Calçados', url: '/folder/calcados', icon: 'footsteps' },
    { title: 'Acessórios', url: '/folder/acessorios', icon: 'basketball' },
    { title: 'Equipamentos', url: '/folder/equipamentos', icon: 'barbell' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
