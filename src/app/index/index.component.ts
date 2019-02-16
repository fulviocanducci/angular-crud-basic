import { Component, OnInit } from '@angular/core';
import { Credit } from '../models/credit';
import { Request } from '../utils/request';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public credits: Credit[] = [];

  constructor(private request: Request) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.request.get('credits')
      .then(result => {
        result.data.map((item: Credit) => {
          this.credits.push(new Credit(item.id, item.name, item.status, item.created));
        });
        console.log(this.credits);
      });
  }

}
