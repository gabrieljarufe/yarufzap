import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferenceColorService {
  private _preferenceColor = 'light';
  constructor() { }

  get preferenceColor(): string{
    const preference = localStorage.getItem('preference_theme');
    return preference || this._preferenceColor;
  }

  set preferenceColor(preference: string){
    localStorage.setItem('preference_theme',preference);
    this._preferenceColor = preference;
  }

}
