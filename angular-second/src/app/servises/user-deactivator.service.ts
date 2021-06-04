import { Injectable } from '@angular/core';
import {CanDeactivate} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserDeactivatorService implements CanDeactivate<any>{

  constructor() { }

  canDeactivate(): boolean {
    return confirm('leave the users page?');
  }
}
