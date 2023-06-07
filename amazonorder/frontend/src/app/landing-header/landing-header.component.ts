import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent {

  constructor(private breakPointObserver: BreakpointObserver) { }
  isMediumSize$ = this.breakPointObserver
    .observe([Breakpoints.Medium,Breakpoints.Small,Breakpoints.XSmall])
    .pipe(map((r) => r.matches));

}
