import { Component } from '@angular/core';

@Component({
  selector: 'master-detail-view02-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mdv02';
  links = [{ path: '/painting', icon: 'assignment_ind', title: 'Paintings' }];
}
