import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  constructor() {

  }

  getMultiplyValue(firstValue, secondValue) {
    return firstValue * secondValue;
  }
}
