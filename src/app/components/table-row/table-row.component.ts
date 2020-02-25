import {
  Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';
import { IRows } from '../../model/table-model';
import { DataFetchService } from '../../services/data-fetch.service';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  @Input() rowData: IRows;
  @Output() details = new EventEmitter<string[]>();

  showIcon = false;
  showMail = false;
  showShare = false;
  showEdit = false;
  showDelete = false;

  showDetailsClicked = false;

  constructor(private dataFetchSvc: DataFetchService) { }

  ngOnInit() {
    if (this.rowData.date === '') {
      this.showIcon = true;
    }
    if (this.rowData.actions.includes('mail')) {
      this.showMail = true;
    }
    if (this.rowData.actions.includes('share')) {
      this.showShare = true;
    }
    if (this.rowData.actions.includes('edit')) {
      this.showEdit = true;
    }
    if (this.rowData.actions.includes('delete')) {
      this.showDelete = true;
    }

    this.dataFetchSvc.currentRow.subscribe(res => {
      if (this.rowData.index === res) {
        this.showDetailsClicked = true;
      } else {
        this.showDetailsClicked = false;
      }
    });
  }

  showDetails() {
    if (this.rowData.details.length === 0) {
      this.details.emit([]);
    }
    console.log('show details', this.showDetailsClicked);
    this.details.emit(this.rowData.details);
    this.dataFetchSvc.changeRow(this.rowData.index);
  }
}
