import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import { SafePipe } from './safe.pipe';
import { HistoryComponent } from './history/history.component';
import {MatSelectModule} from '@angular/material/select';
import { TextUploadComponent } from './text-upload/text-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent,
    SafePipe,
    HistoryComponent,
    TextUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
