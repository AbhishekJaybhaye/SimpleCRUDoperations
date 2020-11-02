import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  public StudentDetails: any;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getStudentList().subscribe((result) => {
      this.StudentDetails = result;
      console.log(this.StudentDetails);
    });
  }

  deleteStudent(id) {
    console.log(id);
    this.commonService.deleteStudent(id).subscribe(data => {
      alert('Delete Student Data ?');
      this.StudentDetails;
    })
  }
}
