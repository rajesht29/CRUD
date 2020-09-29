import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CrudeditComponent } from '../crudedit/crudedit.component';
import { CurdService } from '../services/crud.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  dataSource: MatTableDataSource<any>;

  displayedColumns: string[] = ['id', 'name', 'email', 'password', 'delete', 'edit'];
  _matDialog: any;
  dialog: any;
  table: any;
  value1: string;
  value2: string;
  value3: string;
  editvalue1: any;
  editvalue2: any;
  editvalue3: any;
  editId: any;
  





  constructor(private _service: CurdService, private _bottomSheet: MatBottomSheet,private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getdata();
  }

  openBottomSheet(): void {
    this._bottomSheet.open(CrudeditComponent);
  }

  getdata() {
    this._service.getData().subscribe((res: any) => {

      this.dataSource = new MatTableDataSource(res.data);
    });
  }

  deldata(data) {
    let id = data.id
    this._service.deleteData(id).subscribe((res: any) => {
      this.getdata();

    });
  }
  
  adddata() {
    let a = {
      "value1": "",
      "value2": "",
      "value3": ""
    }
    a.value1 = this.value1,
      a.value2 = this.value2,
      a.value3 = this.value3,
      this._service.addData(a).subscribe((res: any) => {

        this.getdata();
      });
  }


  edit(data) {
    let temp = data;
    this.editvalue1 = data.name
    this.editvalue2 = data.email
    this.editvalue3 = data.password
    this.editId = data.id

  }

  updatedata() {
    let a = {
      "value1": "",
      "value2": "",
      "value3": ""
    }
    a.value1 = this.editvalue1
    a.value2 = this.editvalue2
    a.value3 = this.editvalue3
    this._service.editData(this.editId, a).subscribe((res: any) => {
      this.getdata();
    });
  }




  contactForm = this._formBuilder.group({
    name: [],
    email: [],
    password: [],
   
  });



}
