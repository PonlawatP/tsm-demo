import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_Token } from 'src/models/API_Token';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private toast : ToastrService, private http:HttpClient) {}

  ngOnInit(): void {
  }

  username = "";
  password = "";

  submit(){
    let bd: any = {username: this.username, password: this.password}
    console.log(bd);
    
    this.http.post('/api/login', bd).subscribe({
      next: (data:any) => {
        let token: API_Token = <API_Token>data;
        token.etc = undefined;
        localStorage.setItem('auth_data', JSON.stringify(token))
  
        this.toast.success("เข้าสู่ระบบสำเร็จ")
      },
      error: error => {
          console.error('There was an error!', error);
          this.toast.error("โปรดลองอีกครั้ง", 'ชื่อหรือรหัสผ่านไม่ถูกต้อง')
      }
    })
  }
}
