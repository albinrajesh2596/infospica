import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  

  userRecords:any=[];
  userRecordUpdates:any=[];
  

  
  
  getData(data:any){
    this.userRecords.push(data.value);
    Swal.fire(
      'Good job',
      'Users Record created successfully!',
      'success'
    )
    data.reset();
  }

  deleteUserRecord(user:any){
    const index=this.userRecords.indexOf(user);
    this.userRecords.splice(index,1);
    Swal.fire(
      'Deleted!',
      'Users Record has been deleted.',
      'success'
    )
    
  }
  editUserRecord(user:any){
   this.userRecordUpdates=user;

  }
  updateUserRecords(user:any){
    const index=this.userRecords.indexOf(user);
    this.userRecords[index]=this.userRecordUpdates;
    Swal.fire(
      'Update',
      'Users Record has been updated.',
      'success'
    )
    
  }

}
