import { Component, OnInit } from '@angular/core';
import { ExtraClassService } from './service/extra-class.service';

@Component({
  selector: 'app-extra-class',
  templateUrl: './extra-class.component.html',
  styleUrls: ['./extra-class.component.css'],
})
export class ExtraClassComponent implements OnInit {
  constructor(private rtcService: ExtraClassService) {}

  ngOnInit(): void {}

  public rtcConnect(): void {
    this.rtcService.connect();
  }
}
