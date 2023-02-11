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

  username_err = false;
  name_err = false;
  surname_err = false;
  password_err = false;
  conf_password_err = false;
  address_err = false;
  t_address_err = false;
  a_address_err = false;
  p_address_err = false;
  zipcode_err = false;
  tel_err = false;
  // bg-rose-200 

  submit(){
    this.username_err = this.username.trim() == ''
    this.name_err = this.name.trim() == ''
    this.surname_err = this.surname.trim() == ''
    this.password_err = this.password.trim() == ''
    this.conf_password_err = this.conf_password.trim() == ''
    this.address_err = this.address.trim() == ''
    this.t_address_err = this.t_address.trim() == ''
    this.a_address_err = this.a_address.trim() == ''
    this.p_address_err = this.p_address.trim() == ''
    this.zipcode_err = this.zipcode.trim() == ''
    this.tel_err = this.tel.trim() == ''
    if(
      this.username_err ||
      this.name_err ||
      this.surname_err ||
      this.password_err ||
      this.conf_password_err ||
      this.address_err ||
      this.t_address_err ||
      this.a_address_err ||
      this.p_address_err ||
      this.zipcode_err ||
      this.tel_err
    ) {
      this.toast.error("โปรดลองอีกครั้ง", 'กรอกข้อมูลไม่ครบ')
      return
    }
    if(this.password.trim() != this.conf_password.trim()){
      this.toast.error("โปรดลองอีกครั้ง", 'รหัสผ่านไม่ตรงกัน')
      return
    }

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
  
        this.toast.success("ลงทะเบียนสำเร็จ")
        localStorage.removeItem('auth_data');
        this.router.navigateByUrl("/account/login")
      },
      error: (error:any) => {
          console.error('There was an error!', error);
          this.toast.error("โปรดลองอีกครั้ง", 'เกิดข้อผิดพลาดระหว่างลงทะเบียน')
      }
    })
  }

}
