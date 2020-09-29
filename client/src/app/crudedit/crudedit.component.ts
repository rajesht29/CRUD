import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { CrudComponent } from '../crud/crud.component';
import {MatFormFieldModule} from '@angular/material/form-field';

import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { CurdService } from '../services/crud.service';

@Component({
  selector: 'app-crudedit',
  templateUrl: './crudedit.component.html',
  styleUrls: ['./crudedit.component.css']
})
export class CrudeditComponent implements OnInit {
  value2: string;
  value1: string;
  value3: string;
  add: boolean;
  constructor(private _service: CurdService,private fb: FormBuilder) {
    
  }
  contactForm = this.fb.group({
    value1: ['' ],
    value2: [''],
    value3: [''],
  });
  ngOnInit(): void {
  }
  adddata() {    
    let step1 = this.contactForm.getRawValue();
         this._service.addData(step1).subscribe((res: any) => {         
          debugger;    
         });
     }
} 

