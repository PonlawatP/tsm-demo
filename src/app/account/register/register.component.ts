import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private toast : ToastrService, private http:HttpClient, private router:Router) {}

  ngOnInit(): void {
  }

  username = "";
  name = "";
  surname = "";
  password = "";
  conf_password = "";
  address = "";
  t_address = "";
  a_address = "";
  p_address = "";
  zipcode = "";
  tel = "";

  submit(){
    let bd: any = {
      "username": this.username, 
      "name": this.name,
      "surname": this.surname,
      "password": this.password,
      "address": this.address,
      "t_address": this.t_address,
      "a_address": this.a_address,
      "p_address": this.p_address,
      "zipcode": this.zipcode,
      "tel": this.tel
    }
    
    this.http.post('/api/customers', bd).subscribe({
      next: (data:any) => {
  
        this.toast.success("เข้าสู่ระบบสำเร็จ")
        this.router.navigateByUrl("/members")
      },
      error: (error:any) => {
          console.error('There was an error!', error);
          this.toast.error("โปรดลองอีกครั้ง", 'ชื่อหรือรหัสผ่านไม่ถูกต้อง')
      }
    })
  }

}
