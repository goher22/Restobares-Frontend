import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import { ImagesPageComponent } from './pages/images-page/images-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { UploadPageComponent } from './pages/upload-page/upload-page.component';


@NgModule({
  declarations: [
    ImagesPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    UploadPageComponent
  ],
  imports: [
    CommonModule,
    ImagesRoutingModule
  ]
})
export class ImagesModule { }
