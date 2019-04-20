import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-dashboard',
  styleUrls: ['dashboard.component.css'],
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent {
  displayedColumns = ['id', 'title', 'start', 'finish', 'supplier', 'status', 'actions'];
  dataSource: MatTableDataSource<DashboardData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const items: DashboardData[] = [];
    for (let i = 1; i <= 100; i++) { items.push(createNewItem(i)); }

    this.dataSource = new MatTableDataSource(items);
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}

function createNewItem(id: number): DashboardData {
  const title =
      TITLES[Math.round(Math.random() * (TITLES.length - 1))] + ' ' +
      TITLES[Math.round(Math.random() * (TITLES.length - 1))].charAt(0) + '.';
  const status =
    STATUSES[Math.round(Math.random() * (STATUSES.length - 1))];

  return {
    id: id.toString(),
    title: title,
    start: randomDate(new Date(2012, 0, 1), new Date()).toLocaleString(),
    finish: randomDate(new Date(2012, 0, 1), new Date()).toLocaleString(),
    supplier: title,
    status: status
  };
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const TITLES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

const STATUSES = ['Draft', 'Pending', 'Active', 'Cancelled', 'Finished', 'Finished without winner', 'Awarded'];

export interface DashboardData {
  id: string;
  title: string;
  start: string;
  finish: string;
  supplier: string;
  status: string;
}
