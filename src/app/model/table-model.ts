export interface ITable {
    date: string;
    listName: string;
    noOfEntries: number;
    actions: string[];
    details: string[];
}


export interface ITabs {
    index: number;
    icon: string;
    name: string;
    route: string;
}
