import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ITabs } from './model/table-model';
import { DataFetchService } from './services/data-fetch.service';
import { FormControl, FormGroup } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PC-Demo';

  tabs: ITabs[] = [];

  selectedButtonIndex = 10;

  searched: boolean = false;

  searchForm = new FormGroup({
    searchQuery: new FormControl("")
  });

  constructor(private router: Router, private dataFetchSvc: DataFetchService) {
    this.tabs = dataFetchSvc.getTabs();
  }

  changeRoute(selectedTab: ITabs) {
    console.log('route called', selectedTab.index, selectedTab.route)
    this.selectedButtonIndex = selectedTab.index;
    this.router.navigate([selectedTab.route]);
  }
}
