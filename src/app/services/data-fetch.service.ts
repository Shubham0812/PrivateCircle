import { Injectable } from '@angular/core';
import { ITable, ITabs } from '../model/table-model';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  private tableData: ITable[] = [{
    date: '',
    listName: '',
    noOfEntries: 1,
    actions: ['mail', 'share'],
    details: ['Bundi Technologies Private Limited']
  }];


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
}
