import { MyAlertService } from './../../services/myAlert.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sinavlistele',
  templateUrl: './sinavlistele.component.html',
  styleUrls: ['./sinavlistele.component.scss']
})
export class SinavlisteleComponent implements OnInit {
  constructor(
    public apiServis:ApiService,
    public aler:MyAlertService,
    public route:ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
