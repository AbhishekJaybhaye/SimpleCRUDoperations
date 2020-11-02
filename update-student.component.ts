import { CommonService } from "./../common.service";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-update-student",
  templateUrl: "./update-student.component.html",
  styleUrls: ["./update-student.component.css"],
})
export class UpdateStudentComponent implements OnInit {
  updateStudents = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    mobile: new FormControl(''),
  });

  constructor(
    private commonService: CommonService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.router.snapshot.params.id);

    this.commonService
      .getCurrentStudent(this.router.snapshot.params.id).subscribe((result) => {
        this.updateStudents = new FormGroup({
          name: new FormControl(result['name']),
          email: new FormControl(result['email']),
          address: new FormControl(result['address']),
          mobile: new FormControl(result['mobile']),
        });
      });
  }
  updateStudent() {
    this.commonService.updateCurrentStudentData(this.router.snapshot.params.id, this.updateStudents.value).subscribe((result) => {
      console.log(result, "data update");
      this.updateStudents.reset();
      alert('Data Updated');

    })
  }
}
