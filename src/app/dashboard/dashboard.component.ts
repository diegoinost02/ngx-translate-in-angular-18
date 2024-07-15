import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
// npm install @ngx-translate/core @ngx-translate/http-loader
export class DashboardComponent {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
