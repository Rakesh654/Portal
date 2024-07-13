import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Partner } from '../interface/partner.interface';
import { AdminUserConfig } from '../interface/AdminUserConfig.interface';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  partnerData: Partner | any = null;
  path = 'partneruser/GetPartnerForProfile';
  selectedTenant: AdminUserConfig | any = null;
  // ELEMENT_DATA: OnDemandLab[] | any = [];

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getValue(environment.apiConfig.uri);
    // this.getOnDemandLab(environment.apiConfig.uri);
  }

  // Option/Countries

  getValue(url: string) {
    this.http.get(`${url}/${this.path}`).subscribe((data) => {
      console.log(data);
      this.partnerData = data;
    });
  }
}

// getOnDemandLab(url: string) {
//   this.http
//     .post(`${url}/OnDemandLab/GetOnDemandLabs`, {
//       InstructorId: null,
//       State: '2',
//       StartIndex: 100,
//       PageCount: 1,
//     })
//     .subscribe((response) => {
//       console.log(response);
//       this.ELEMENT_DATA = response;
//     });
// }

// .post(`${url}/OnDemandLab/GetOnDemandLabs`, {
//         InstructorId: null,
//         State: '5',
//         StartIndex: 100,
//         PageCount: 1,
//       }
