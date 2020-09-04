import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Painting } from '@master-detail-view02/core-data';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'master-detail-view02-painting-detail',
  templateUrl: './painting-detail.component.html',
  styleUrls: ['./painting-detail.component.scss'],
})
export class PaintingDetailComponent implements OnInit {
  currentPainting: Painting;
  orginalTitle: string;

  @Input() set selectedPainting(painting: Painting) {
    if (painting) this.orginalTitle = painting.title;
    this.currentPainting = Object.assign({}, painting);
  }
  @Input() form: FormGroup;
  @Output() savePainting = new EventEmitter();
  @Output() cancelPainting = new EventEmitter();
  @Output() fileUpload = new EventEmitter();
  @Output() imageDelete = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    console.log(this.form);
  }

  get paintingTitle() {
    return !this.orginalTitle ? 'Create an Artwork!' : this.orginalTitle;
  }

  get sumbitButton() {
    return !this.orginalTitle ? 'Create' : 'Save';
  }

  get imageData() {
    return this.form.get('image').value;
  }

  get imageExists() {
    return this.form.get('image').value ? true : false;
  }

  save(formDirective: FormGroupDirective) {
    this.savePainting.emit(formDirective);
    formDirective.resetForm();
    console.log(formDirective);
  }

  cancel() {
    this.cancelPainting.emit();
  }

  upload(image) {
    this.fileUpload.emit(image);
    console.log(image);
  }

  deleteImage() {
    this.imageDelete.emit();
  }
}
