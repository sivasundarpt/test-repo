import { Component } from '@angular/core';
import { ReferenceService } from './reference.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ReferenceService],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.9s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.7s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})

export class AppComponent {
  title = 'FirstApp';
  name = "Siva.P" // for interpolation binding

  url = "https://pngimg.com/uploads/smiley/smiley_PNG179.png";
  initial: string;
  multiplyValue: any;
  nameforpipe: string;
  empList: { name: string; id: number; dob: string; city: string; }[];
  refreshedArr: { name: string; id: number; dob: string; city: string; }[];

  constructor(private refService: ReferenceService) {
    this.callFunction();
    this.nameforpipe = "SIVASUNDAR";
    this.empList = [{
      name: 'siva',
      id: 3,
      dob: '09/04/92',
      city: 'tirunelveli'
    }, {
      name: 'siva1',
      id: 1,
      dob: '09/04/92',
      city: 'tirunelveli'
    }, {
      name: 'siv2',
      id: 2,
      dob: '09/04/92',
      city: 'tirunelveli'
    }, {
      name: 'siva3',
      id: 33,
      dob: '09/04/92',
      city: 'tirunelveli'
    }, {
      name: 'siva4',
      id: 4,
      dob: '09/04/92',
      city: 'tirunelveli'
    }, {
      name: 'siva5',
      id: 5,
      dob: '09/04/92',
      city: 'tirunelveli'
    }, {
      name: 'siva6',
      id: 6,
      dob: '09/04/92',
      city: 'tirunelveli'
    }, {
      name: 'siva7',
      id: 7,
      dob: '09/04/92',
      city: 'tirunelveli'
    }, {
      name: 'siva8',
      id: 8,
      dob: '09/04/92',
      city: 'tirunelveli'
    }, {
      name: 'siva9',
      id: 9,
      dob: '09/04/92',
      city: 'tirunelveli'
    }];
    this.refreshedArr = this.empList;
  }

  callFunction() {
    this.initial = "Hai";
    // alert(this.initial);
  }

  changeName(value) {
    this.name = value;
  }


  // Using service
  multiply(first, second) {
    this.multiplyValue = this.refService.getMultiplyValue(first, second);
  }

  removeCard(i) {
    this.empList.splice(i, 1);
  }

  refreshArr() {
    this.empList = this.refreshedArr;
  }

}

