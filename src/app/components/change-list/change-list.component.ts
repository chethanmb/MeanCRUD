import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-change-list',
  templateUrl: './change-list.component.html',
  styleUrls: ['./change-list.component.css']
})

export class ChangeListComponent implements OnInit {

  Change:any = [];

  constructor(private apiService: ApiService) {
    this.readChange();
  }

  ngOnInit() {}

  readChange(){
    this.apiService.getChanges().subscribe((data) => {
     this.Change = data;
    })
  }

  removeChange(change, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteChange(change._id).subscribe((data) => {
          this.Change.splice(index, 1);
        }
      )
    }
  }

}
