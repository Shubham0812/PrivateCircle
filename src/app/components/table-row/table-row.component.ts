import {
  Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';
import { IRows } from '../../model/table-model';

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

  constructor() { }

  ngOnInit() {
    console.log('row data', this.rowData)
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
  }

  showDetails() {
    console.log('raise an event now')
    if (this.rowData.details.length === 0) {
      console.log('length 0 enc')
      this.details.emit([])
    }
    this.details.emit(this.rowData.details)
  }

}
