import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Painting } from '@master-detail-view02/core-data';

@Component({
  selector: 'master-detail-view02-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrls: ['./painting-list.component.scss'],
})
export class PaintingListComponent implements OnInit {
  @Input() paintings: Painting;
  @Output() selectedPainting = new EventEmitter();
  @Output() deletePainting = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  select(painting: Painting) {
    this.selectedPainting.emit(painting);
  }

  delete(painting: Painting) {
    this.deletePainting.emit(painting);
  }
}
