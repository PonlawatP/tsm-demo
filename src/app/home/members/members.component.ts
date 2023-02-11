import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  constructor(private toast : ToastrService, private http:HttpClient, private router:Router) { }
  members: any = []
  srh = '';

  ngOnInit(): void {
    const opt = {
        headers: {
            Authorization: 'Bearer ' + (JSON.parse(localStorage.getItem('auth_data') || '{}').token || '')
        }
    }
    this.http.get('/api/customers', opt).subscribe({
        next: (data:any) => {
            this.members = data
        },
        error: (error:any) => {
            localStorage.removeItem('auth_data')
            this.router.navigateByUrl("/account/login")
        }
      })
  }

  logout():void {
    localStorage.removeItem('auth_data')
    this.router.navigateByUrl("/account/login")
  }
  search(): void {

  }
}
