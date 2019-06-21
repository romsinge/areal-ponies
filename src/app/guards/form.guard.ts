import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { RaceCreateComponent } from '../modules/race/components/race-create/race-create.component';

@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanDeactivate<RaceCreateComponent> {
  
  canDeactivate(component: RaceCreateComponent) {
    return component.raceForm.touched ? confirm('Êtes-vous sûr de vouloir sortir ?') : true
  }

}
