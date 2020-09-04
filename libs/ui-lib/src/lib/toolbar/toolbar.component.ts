import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'master-detail-view02-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input('sidenav') sidenav;

  constructor() {}

  ngOnInit(): void {}
}
