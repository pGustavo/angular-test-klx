import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeViewComponent implements OnInit {
  stock;
  constructor(private data: DataService) {}

  ngOnInit() {
    this.stock = this.data.getData();
  }
}
