import { Component } from '@angular/core';
import { ApiService } from './landingpage.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss'],
})
export class LandingpageComponent {
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getcomments().subscribe((data: any[]) => {
      //console.log(this.lstcomments);
    });
  }
}
