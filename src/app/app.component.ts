import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ITabs } from './model/table-model';
import { DataFetchService } from './services/data-fetch.service';
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PC-Demo';

  tabs: ITabs[] = [];

  selectedButtonIndex = 10;
  searched: boolean = false;
  searchQuery = "";
  showLoading = false;
  searchForm!: FormGroup;



  constructor(private router: Router, private dataFetchSvc: DataFetchService, private formBuilder: FormBuilder,
  ) {
    this.tabs = dataFetchSvc.getTabs();
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: [""]
    });
  }

  changeRoute(selectedTab: ITabs) {
    console.log('route called', selectedTab.index, selectedTab.route);
    this.selectedButtonIndex = selectedTab.index;
    this.router.navigate([selectedTab.route]);
  }

  onSubmit() {
    this.showLoading = true;
    setTimeout(() => {
      this.showLoading = false;
    }, 50);
    this.searchQuery = this.searchForm.controls.search.value.toLowerCase();
    this.dataFetchSvc.changeSearchQuery(this.searchQuery);
  }

}
