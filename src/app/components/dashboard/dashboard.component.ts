import { Component, OnInit, ViewChild } from '@angular/core';
import example from '../../../assets/example';
import * as _ from 'underscore';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<any>;

  public displayedColumns: string[] = ['id', 'type', 'links', 'attributes', 'relationships'];
  public jsonSource = example.data;
  public search: string = '';

  constructor() { }

  ngOnInit(): void {
    console.log('example', example);

  }

  announceSortChange( e: any ) {
    console.log('event', e);
    switch (e.active) {
      case 'id':
        console.log(this.jsonSource.reverse());
        this.table.renderRows();
        break;
      case 'links':
        // if(e.direction == 'asc') this.jsonSource = _.sortBy( this.jsonSource, (obj) => obj.links.self );
        // if(e.direction == 'desc') this.jsonSource = (_.sortBy( this.jsonSource, (obj) => obj.links.self )).reverse();
        // if(e.direction == '') this.jsonSource = example.data;
        console.log(this.jsonSource.reverse());
        this.table.renderRows();
        break;
      case 'attributes':
        if(e.direction == 'asc') this.jsonSource = _.sortBy( this.jsonSource, (obj) =>  obj.attributes.content  );
        if(e.direction == 'desc') this.jsonSource = (_.sortBy( this.jsonSource, (obj) =>  obj.attributes.content  )).reverse();
        if(e.direction == '') this.jsonSource = example.data;
        this.table.renderRows();
        break;
      case 'relationships':
        // if(e.direction == 'asc') this.jsonSource = _.sortBy( this.jsonSource, (obj) =>  obj.relationships.authors.links.self  );
        // if(e.direction == 'desc') this.jsonSource = (_.sortBy( this.jsonSource, (obj) =>  obj.relationships.authors.links.self  )).reverse();
        // if(e.direction == '') this.jsonSource = example.data;
        console.log(this.jsonSource.reverse());
        this.table.renderRows();
        break;

      default:
        break;
    }
  }
  somethingChanged(e: any) {
    console.log(this.search);

    this.jsonSource = example.data;
    const res = this.jsonSource.filter(obj => (obj.attributes.content.toLowerCase().includes(this.search.toLowerCase())
    || obj.id.includes(this.search)
    || obj.type.toLowerCase().includes(this.search.toLowerCase())
    || obj.links.self.toLowerCase().includes(this.search.toLowerCase())
    || obj.relationships.authors.links.self.toLowerCase().includes(this.search.toLowerCase())));
    this.jsonSource = res;
    this.table.renderRows();
    console.log(res);
  }

}
