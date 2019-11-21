import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';
import { ResumeDialogComponent } from '../resume-dialog/resume-dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dialogResult = "";
  isOpen = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }
  
  openContactInfo(): void {
    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        this.dialog.open(ContactDialogComponent, dialogConfig);
  }

  openResumeInfo(): void {
    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        this.dialog.open(ResumeDialogComponent, dialogConfig);
  }

}
