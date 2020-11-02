import { CommonService } from "./../common.service";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormsModule } from "@angular/forms";

@Component({
  selector: "app-create-student",
  templateUrl: "./create-student.component.html",
  styleUrls: ["./create-student.component.css"],
})
export class CreateStudentComponent implements OnInit {
  alert: boolean = false;

  addStudent = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    address: new FormControl(""),
    mobile: new FormControl(""),
  });

  constructor(private commonService: CommonService) { }

  ngOnInit() { }

  createStudent() {
    // console.log(this.addStudent.value);
    this.commonService
      .createStudentDetails(this.addStudent.value)
      .subscribe((result) => {
        this.alert = true;
        this.addStudent.reset();
        console.log("data send", result);
      });
  }
  closeAlert() {
    this.alert = false;
  }
}
