import { Component, OnInit } from '@angular/core';
import { ManageService } from 'src/app/manage.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  enquiry_count: number = 0
  institute_count: number = 0
  course_count: number = 0
  batch_count: number = 0
  student_count: number = 0
  admission_count: number = 0
  dues_count: number = 0
  received_count: number = 0
  setting_count: number = 0
  login_deatils:any
  login:any
  constructor(
    private services: ManageService
  ) { 

    this.login_deatils = localStorage.getItem('Token')
    this.login = JSON.parse(this.login_deatils)
    console.log(this.login.admin_id)
  }

  ngOnInit(): void {
    console.log(this.login)
    this.services.institute_view().subscribe(
      (res: any) => {
        this.institute_count = res.data.length
      }
    )
    this.services.get_course().subscribe(
      (res: any) => {
        this.course_count = res.data.length
      }
    )
    this.services.get_batch().subscribe(
      (res: any) => {
        this.batch_count = res.data.length
      }
    )
    this.services.get_student().subscribe(
      (res: any) => {
        this.student_count = res.data.length
      }
    )
    this.services.get_admission().subscribe(
      (res: any) => {
        this.admission_count = res.data.length
      }
    )
    this.services.get_admin_enquiry().subscribe(
      (res: any) => {
        this.enquiry_count = res.data.length
      }
    )

  }
}
