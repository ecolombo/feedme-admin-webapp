import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pageable } from 'src/app/model/pageable.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public usersList:any[] =[];
  public pagable:Pageable= { page:0, size:5, sort:'userId', sortOrder:'DESC' };
  public userInfo:any;

  constructor(private userService: UsersService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  public getAllUser() {
    this.userService.getAll(this.pagable).subscribe((response:any ) => {
      this.usersList = response.data.content;
      // console.log(response);
    });
  }
  public openModal(model:any, userInfo?:any) {
    this.modalService.open(model, { size: "l" });
    this.userInfo = userInfo;
  }

  public closeModel(modelRef:any) {
    this.modalService.dismissAll(modelRef);
  }

  deleteUser(userId:any) {
    this.userService.delete(userId).subscribe((response:any ) => {
      this.getAllUser();
    });
  }
  
}
