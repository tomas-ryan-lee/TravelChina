import { Component, OnInit } from '@angular/core';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-cultural-guide',
  templateUrl: './cultural-guide.page.html',
  styleUrls: ['./cultural-guide.page.scss'],
})
export class CulturalGuidePage implements OnInit {

  constructor(public guide: GuideService) { }

  ngOnInit() {
  }

  isString(value: any): value is string {
    return typeof value === 'string';
  }

}
