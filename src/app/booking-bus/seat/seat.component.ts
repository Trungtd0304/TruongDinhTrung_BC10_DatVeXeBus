import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss'],
})
export class SeatComponent implements OnInit {
  status: boolean = false;
  @Output() eventSeat = new EventEmitter();
  @Input()
  seat: any;
  constructor() {}

  datGhe() {
    if (this.status) {
      this.status = false;
    } else {
      this.status = true;
    }
    
    this.eventSeat.emit(this.status);
  }
  ngOnInit(): void {}
}
