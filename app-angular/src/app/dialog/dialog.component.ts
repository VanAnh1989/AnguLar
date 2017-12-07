import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA , DialogRole } from '@angular/material';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.html'
})
export class DialogComponent {
    animal: string;
    name: string;
    constructor(public dialog: MatDialog) { }
    openDialog(): void {

        let dialogRef = this.dialog.open(DialogShowComponent,  {
            width: '450px',
            height:'400px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.animal = result;
        });
    }
}
@Component({
    selector: "app-dialog-show",
    templateUrl: './dialog.example.html',
})
export class DialogShowComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogShowComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}