import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PreferenceColorService } from './shared/services/dark-mode/preference.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  darkMode!: boolean;
  constructor(
    private readonly router: Router,
    private readonly darkModeService: PreferenceColorService
  ){}

  ngOnInit(): void {
    this.darkMode = this.darkModeService.preferenceColor === 'dark' ? true : false;
    document.documentElement.setAttribute('data-bs-theme', this.darkModeService.preferenceColor);
    this.router.navigate(['sign-in']);
  }

  swithDarkMode(): void{
    if(this.darkMode){
      this.darkModeService.preferenceColor = 'light';
      this.darkMode = false;
    }else{
      this.darkModeService.preferenceColor = 'dark';
      this.darkMode = true;
    }
    document.documentElement.setAttribute('data-bs-theme', this.darkModeService.preferenceColor);
  }

}
