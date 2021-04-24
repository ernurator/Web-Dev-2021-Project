import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() {
  }

  error(error: any): void {
    console.error(error);
  }
}
