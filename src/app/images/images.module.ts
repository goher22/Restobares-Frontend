import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import { ImagesPageComponent } from './pages/images-page/images-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { UploadPageComponent } from './pages/upload-page/upload-page.component';
import { MaterialModule } from '../material/material.module';
import { ImagesGroupHoursComponent } from './components/images-group-hours/images-group-hours.component';


@NgModule({
  declarations: [
    ImagesPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    UploadPageComponent,
    ImagesGroupHoursComponent
  ],
  imports: [
    CommonModule,
    ImagesRoutingModule,
    MaterialModule,
  ]
})
export class ImagesModule { }
