import { Component, OnInit } from '@angular/core';
import { GroupHours } from '../../interfaces/groupHours.interfaces';
import { LogsImagesService } from '../../services/logsImages.service';

@Component({
  selector: 'app-images-group-hours',
  templateUrl: './images-group-hours.component.html',
  styles: [
  ]
})
export class ImagesGroupHoursComponent implements OnInit {

  public displayedColumns: string[] = [ 'date','count'];

  public logs: GroupHours[] = [];

  constructor(private logImagesServices: LogsImagesService){}

  ngOnInit(): void {
    this.logImagesServices
      .getGroupHours()
      .subscribe(
        logs => this.logs = logs
      );
  }

}
