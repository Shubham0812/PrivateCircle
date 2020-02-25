import { Component, OnInit } from '@angular/core';
import { IRows } from '../../model/table-model';
import { DataFetchService } from '../../services/data-fetch.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  headerData = ['Date', 'List Name', 'No. Of Entities', 'Actions'];

  tableRows: IRows[] = [];
  originalRows: IRows[] = [];
  status = 'none';
  showDescription = false;
  recievedDescription: string[] = [];

  constructor(private dataFetchSvc: DataFetchService, private snackBar: MatSnackBar) {
    this.tableRows = dataFetchSvc.getTableData();
    this.originalRows = this.tableRows;
    this.status = 'done';
  }

  ngOnInit() {
    this.dataFetchSvc.currentSearch.subscribe(res => {
      this.tableRows = [];
      this.tableRows = this.originalRows;
      this.tableRows = this.tableRows.filter(row => {
        return row.listName.toLowerCase().includes(res);
      });
    });
  }

  showDetails(event: string[]) {
    console.log('Show details received', event);
    console.log('Table rows', this.tableRows);

    this.tableRows = this.originalRows;

    this.showDescription = true;
    this.recievedDescription = event;
    console.log('show descr', this.showDescription);

  }

  addDescription() {
    this.snackBar.open('Feature not enabled yet.');
  }
}
