import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaintingComponent } from './painting/painting.component';
import { PaintingListComponent } from './painting/painting-list/painting-list.component';
import { PaintingDetailComponent } from './painting/painting-detail/painting-detail.component';
import {
  CoreDataModule,
  PaintingService,
} from '@master-detail-view02/core-data';
import { MaterialModule } from '@master-detail-view02/material';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UiLibModule } from '@master-detail-view02/ui-lib';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    PaintingComponent,
    PaintingListComponent,
    PaintingDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreDataModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    UiLibModule,
    ReactiveFormsModule,
    MatInputModule,
    AppRoutingModule,
  ],
  providers: [PaintingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
