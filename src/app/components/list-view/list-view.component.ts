import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  constructor() { }


  headerData = ['Date', 'List Name', 'No. Of Entities', 'Actions']

  ngOnInit() {
  }



}
