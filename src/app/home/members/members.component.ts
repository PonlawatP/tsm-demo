import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  members = [
    {
        username: "foo",
        name: "ฟูจิ",
        surname: "สิบาระ",
        address: "69 หมู่ 18",
        t_address: "หนองโก",
        a_address: "กระนวน",
        p_address: "ขอนแก่น",
        zipcode: "40170",
        tel: "0880870777",
        dateofregis: "2023-02-04 10:45:21"
    },
    {
        username: "boo",
        name: "บาบิ",
        surname: "ไลลา",
        address: "69 หมู่ 18",
        t_address: "หนองโก",
        a_address: "กระนวน",
        p_address: "ขอนแก่น",
        zipcode: "40170",
        tel: "098890045",
        dateofregis: "2023-02-04 15:46:17"
    },
    {
        username: "bee",
        name: "กีกี้",
        surname: "นานิกะ",
        address: "69 หมู่ 18",
        t_address: "หนองโก",
        a_address: "กระนวน",
        p_address: "ขอนแก่น",
        zipcode: "40170",
        tel: "0093322234",
        dateofregis: "2023-02-06 08:33:25"
    },
    {
        username: "bong",
        name: "เนียงสรัน",
        surname: "บองเอย",
        address: "69 หมู่ 18",
        t_address: "หนองโก",
        a_address: "กระนวน",
        p_address: "ขอนแก่น",
        zipcode: "40170",
        tel: "034377349",
        dateofregis: "2023-02-06 08:36:33"
    },
    {
        username: "bang",
        name: "สรัน",
        surname: "สะสมทรัพย์",
        address: "69 หมู่ 18",
        t_address: "หนองโก",
        a_address: "กระนวน",
        p_address: "ขอนแก่น",
        zipcode: "40170",
        tel: "034345673",
        dateofregis: "2023-02-06 08:43:00"
    },
    {
        username: "bang",
        name: "สรัน",
        surname: "สะสมทรัพย์",
        address: "69 หมู่ 18",
        t_address: "หนองโก",
        a_address: "กระนวน",
        p_address: "ขอนแก่น",
        zipcode: "40170",
        tel: "034345673",
        dateofregis: "2023-02-10 19:47:06"
    },
    {
      username: "bang",
        name: "สรัน",
        surname: "สะสมทรัพย์",
        address: "69 หมู่ 18",
        t_address: "หนองโก",
        a_address: "กระนวน",
        p_address: "ขอนแก่น",
        zipcode: "40170",
        tel: "034345673",
        dateofregis: "2023-02-11 18:30:46"
    },
    {
        username: "bang",
        name: "สรัน",
        surname: "สะสมทรัพย์",
        address: "69 หมู่ 18",
        t_address: "หนองโก",
        a_address: "กระนวน",
        p_address: "ขอนแก่น",
        zipcode: "40170",
        tel: "034345673",
        dateofregis: "2023-02-11 20:31:23"
    }
]

}
