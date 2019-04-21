import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-dashboard',
  styleUrls: ['participants-view.component.css'],
  templateUrl: 'participants-view.component.html',
})
export class ParticipantsViewComponent {
  displayedColumns = ['id', 'username', 'socialnetworks', 'likes', 'video'];
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
  const username =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  const socialnetworks = SOCIALNETWORKS[Math.round(Math.random() * (SOCIALNETWORKS.length - 1))];
  const likes = Math.round(Math.random());

  return {
    id: id.toString(),
    username: username,
    socialnetworks: socialnetworks,
    likes: likes,
    video: 'https://some.url/video.video'
  };
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

const SOCIALNETWORKS = ['Instagram', 'Facebook'];

export interface DashboardData {
  id: string;
  username: string;
  socialnetworks: string;
  likes: number;
  video: string;
}
