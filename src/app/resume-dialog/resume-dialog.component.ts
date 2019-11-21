import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { HomeComponent } from '../home/home.component';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-resume-dialog',
  templateUrl: './resume-dialog.component.html',
  styleUrls: ['./resume-dialog.component.scss']
})
export class ResumeDialogComponent implements OnInit {

  constructor(
    public thisDialogRef: MatDialogRef<HomeComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: string
  ) 
  {
}

  ngOnInit() {

  }

}
