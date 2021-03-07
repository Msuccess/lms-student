import { AfterViewInit, Component, OnInit } from '@angular/core';
import '../../../../jitsi/external_api.js';
import { ExtraClassService } from './service/extra-class.service.js';
import { BehaviorSubject } from 'rxjs';

declare var JitsiMeetExternalAPI: any;
@Component({
  selector: 'app-extra-class',
  templateUrl: './extra-class.component.html',
  styleUrls: ['./extra-class.component.css'],
})
export class ExtraClassComponent implements OnInit, AfterViewInit {
  title = 'app';
  domain = 'meet.jit.si';
  options: any;
  api: any;
  class = new BehaviorSubject<any>({} as any);
  institution = new BehaviorSubject<any>({} as any);

  constructor(private extraClassService: ExtraClassService) {}

  getSchool(): void {
    this.extraClassService.getInstitution().subscribe((res: any) => {
      this.institution.next(res);
    });
  }

  getClasses(): void {
    this.extraClassService.getClass().subscribe((res: any) => {
      this.class.next(res);
    });
  }

  ngAfterViewInit(): void {
    this.options = {
      roomName: 'JitsiMeetAPIExample',
      width: 1200,
      height: 800,
      jwt: '',
      parentNode: document.querySelector('#meet'),
    };

    this.api = new JitsiMeetExternalAPI(this.domain, this.options);
  }

  ngOnInit(): void {
    this.getSchool();
    this.getClasses();
  }
}
