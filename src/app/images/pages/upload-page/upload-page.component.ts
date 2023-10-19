import { Component } from '@angular/core';
import { LogsImagesService } from '../../services/logsImages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styles: [
  ]
})
export class UploadPageComponent {
  value:string = "";
  file: any;

  handleFileInput(event: any) {
    this.file = event.target.files[0];
  }

  constructor(private logImagesServices: LogsImagesService, private router: Router){ }

  saveImg(){
    if(this.file){
      this.logImagesServices.postImage(this.value, this.file)
        .subscribe(resp => {
          if(resp){
            this.router.navigateByUrl('/image/lists')
          }else{
            alert("Error al guardar formulario")
          }
        })


    }
  }
}
