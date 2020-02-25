import { Injectable } from '@angular/core';
import { IRows, ITabs } from '../model/table-model';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  private tableData: IRows[] = [{
    date: '',
    index: 0,
    listName: 'Competitive Intelligence',
    noOfEntities: 2,
    actions: ['mail', 'share', 'edit', 'delete'],
    details: ['Bundi Technologies Private Limited', 'Hector Beverages Private Limited', 'Infosys Limited', 'Vodafone Idea Limited']
  }, {
    date: '',
    listName: 'My Vendors',
    noOfEntities: 202,
    index: 1,
    actions: ['mail', 'share', 'edit'],
    details: []
  }, {
    date: 'Jun 23',
    index: 2,
    listName: 'My Customers',
    noOfEntities: 24,
    actions: ['mail', 'share'],
    details: ['Bundi Technologies Private Limited', 'Hector Beverages Private Limited', 'Myntra Technologies']
  }, {
    date: 'Aug 13',
    index: 3,
    listName: 'Test 30 Results',
    noOfEntities: 15,
    actions: ['mail', 'share', 'delete'],
    details: ['Bundi Technologies Private Limited', 'Google', 'Facebook', 'Hector Beverages Private Limited']
  }, {
    date: '',
    index: 4,
    listName: 'Mumbai',
    noOfEntities: 95,
    actions: ['mail', 'share', 'edit', 'delete'],
    details: ['Bundi Technologies Private Limited']
  }, {
    date: 'Feb 28 ',
    index: 5,
    listName: 'Bengaluru',
    noOfEntities: 89,
    actions: [],
    details: ['Bundi Technologies Private Limited']
  }, {
    date: 'Aug 5',
    index: 6,
    listName: 'Custom Company',
    noOfEntities: 59,
    actions: ['mail', 'edit', 'delete'],
    details: ['Bundi Technologies Private Limited']
  }, {
    date: 'Dec 13',
    index: 7,
    listName: 'Two Companies',
    noOfEntities: 148,
    actions: ['mail'],
    details: ['Bundi Technologies Private Limited']
  },
  ];




  private tabData: ITabs[] = [{
    index: 0,
    icon: 'list',
    name: 'SAVED LIST',
    route: '/list'
  }, {
    index: 1,
    icon: 'filter_list',
    name: 'SAVED FILTERS',
    route: '/'
  }, {
    index: 2,
    icon: 'history',
    name: 'SEARCH HISTORY',
    route: '/'
  }];


  private searchQuery = new BehaviorSubject('');
  currentSearch = this.searchQuery.asObservable();


  private selectedRow = new BehaviorSubject(10);
  currentRow = this.selectedRow.asObservable();

  constructor() { }

  getTabs() {
    return this.tabData;
  }

  getTableData() {
    return this.tableData;
  }

  changeSearchQuery(value: string) {
    this.searchQuery.next(value);
  }

  changeRow(value: number) {
    this.selectedRow.next(value);
  }
}
