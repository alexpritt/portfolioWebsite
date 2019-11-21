import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HomeComponent } from '../home/home.component';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent implements OnInit {

  constructor(
    public thisDialogRef: MatDialogRef<HomeComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: string
  ) 
  {
}

  ngOnInit() {
  }

  closeContactDialog() {
    this.thisDialogRef.close();
  }

}
