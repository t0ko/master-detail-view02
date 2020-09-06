import {
  Component,
  OnInit,
  ApplicationInitStatus,
  ChangeDetectorRef,
} from '@angular/core';
import { PaintingService } from '@master-detail-view02/core-data';
import { Painting } from '@master-detail-view02/core-data';
import { observable, Observable } from 'rxjs';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'master-detail-view02-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.scss'],
})
export class PaintingComponent implements OnInit {
  paintings$: Observable<Painting[]>;

  selectedPainting: Painting;

  form: FormGroup;

  constructor(
    private paintingService: PaintingService,
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadPaintings();
  }

  loadPaintings() {
    this.paintings$ = this.paintingService.getAll();
  }

  selectPainting(painting: Painting) {
    this.form.patchValue(painting);
    this.selectedPainting = painting;
  }

  cancelPainting() {
    const emptyPainting: Painting = {
      id: null,
      image: null,
      title: '',
      description: '',
    };
    this.selectPainting(emptyPainting);
    this.form.reset();
  }

  savePainting(formDirective: FormGroupDirective) {
    if (this.form.value.id) {
      this.updatePainting(this.form.value);
    } else {
      this.createPainting(this.form.value);
    }
  }

  createPainting(painting: Painting) {
    this.paintingService.create(painting).subscribe(() => {
      this.cancelPainting();
      this.loadPaintings();
    });
  }

  updatePainting(painting: Painting) {
    this.paintingService.update(painting).subscribe(() => {
      this.cancelPainting();
      this.loadPaintings();
    });
  }

  deletePainting(painting: Painting) {
    this.paintingService.delete(painting.id).subscribe(() => {
      this.cancelPainting();
      this.loadPaintings();
    });
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: [''],
      description: [''],
      title: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  handleFileUpload(image) {
    const reader = new FileReader();
    if (image.target.files && image.target.files.length) {
      const file = image.target.files[0];
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.form.patchValue({
          image: reader.result,
        });

        this.cd.markForCheck();
      };
    }
  }

  deleteImage() {
    this.form.patchValue({
      image: '',
    });
  }
}
