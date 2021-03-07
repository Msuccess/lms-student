import { Component, OnInit } from '@angular/core';
import '../../../../jitsi/external_api.js';

declare var JitsiMeetExternalAPI: any;
@Component({
  selector: 'app-extra-class',
  templateUrl: './extra-class.component.html',
  styleUrls: ['./extra-class.component.css'],
})
export class ExtraClassComponent implements OnInit {
  title = 'app';
  domain: string = 'meet.jit.si';
  options: any;
  api: any;

  constructor() {}

  ngAfterViewInit(): void {
    this.options = {
      roomName: 'JitsiMeetAPIExample',
      width: 1000,
      height: 1000,
      jwt: '',
      parentNode: document.querySelector('#meet'),
    };

    this.api = new JitsiMeetExternalAPI(this.domain, this.options);
  }
  ngOnInit(): void {}
}
