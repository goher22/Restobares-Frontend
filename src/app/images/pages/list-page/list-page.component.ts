import { Component, OnInit } from '@angular/core';
import { LogsImages } from '../../interfaces/logsimages.interfaces';
import { LogsImagesService } from '../../services/logsImages.service';
import { formatDate, paserDate } from '../../../helpers/parseDate.helper';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
  styles: [
    
  ],
})
export class ListPageComponent implements OnInit {
  public range: FormGroup; 

  public logsImg: LogsImages[] = [];

  public displayedColumns: string[] = ['nameUser', 'date','urlImage'];

  constructor(private logImagesServices: LogsImagesService, private router: Router){

    this.range = new FormGroup({
      start: new FormControl<Date | null>(new Date()),
      end: new FormControl<Date | null>(new Date()),
    });
  }

  public getDate(date: string): string{
    
    return formatDate(new Date(date));
  }

  public consult() {
    if(this.range.value["end"] && this.range.value["start"]){
      const dateStart: string = paserDate(this.range.value["start"]);
      const dateEnd: string = paserDate(this.range.value["end"]);
      this.logImagesServices
        .getSearchLogImages(dateStart, dateEnd)
        .subscribe(logs => this.logsImg = logs);
    }else{
      const dateNow: string = paserDate(new Date());

      this.range = new FormGroup({
        start: new FormControl<Date | null>(new Date()),
        end: new FormControl<Date | null>(new Date()),
      });

      this.logImagesServices
        .getSearchLogImages(dateNow, dateNow)
        .subscribe(logs => this.logsImg = logs);
    }

  }
  
  ngOnInit(): void {
    const dateNow: string = paserDate(new Date());

    this.logImagesServices
      .getSearchLogImages(dateNow, dateNow)
      .subscribe(logs => this.logsImg = logs);
  }
}
