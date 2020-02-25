import { Injectable } from '@angular/core';
import { IRows, ITabs } from '../model/table-model';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  private tableData: IRows[] = [{
    date: '',
    listName: 'Competitive Intelligence',
    noOfEntities: 2,
    actions: ['mail', 'share', 'edit', 'delete'],
    details: ['Bundi Technologies Private Limited', 'Hector Beverages Private Limited', 'Infosys Limited', 'Vodafone Idea Limited']
  }, {
    date: '',
    listName: 'My Vendors',
    noOfEntities: 202,
    actions: ['mail', 'share', 'edit'],
    details: []
  }, {
    date: 'Jun 23',
    listName: 'My Customers',
    noOfEntities: 24,
    actions: ['mail', 'share'],
    details: ['Bundi Technologies Private Limited']
  }, {
    date: 'Aug 13',
    listName: 'Test 30 Results',
    noOfEntities: 15,
    actions: ['mail', 'share', 'delete'],
    details: ['Bundi Technologies Private Limited']
  }, {
    date: '',
    listName: 'Mumbai',
    noOfEntities: 95,
    actions: ['mail', 'share', 'edit', 'delete'],
    details: ['Bundi Technologies Private Limited']
  }, {
    date: 'Feb 28 ',
    listName: 'Bengaluru',
    noOfEntities: 89,
    actions: [],
    details: ['Bundi Technologies Private Limited']
  }, {
    date: 'Aug 5',
    listName: 'Custom Company',
    noOfEntities: 59,
    actions: ['mail', 'edit', 'delete'],
    details: ['Bundi Technologies Private Limited']
  }, {
    date: 'Dec 13',
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

  constructor() { }

  getTabs() {
    return this.tabData;
  }

  getTableData() {
    return this.tableData;
  }
}
