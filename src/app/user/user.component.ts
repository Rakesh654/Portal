import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Partner } from '../interface/partner.interface';
type UserType = {
  givenName?: string;
  surname?: string;
  userPrincipalName?: string;
  id?: string;
  CountryName?: string;
};

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  // user!: UserType;
  // apiData!: Partner;
  partnerData: Partner | any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getValue(environment.apiConfig.uri);
  }

  path = 'partneruser/GetPartnerForProfile';
  // Option/Countries

  getValue(url: string) {
    this.http.get(`${url}/${this.path}`).subscribe((data) => {
      console.log(data);
      this.partnerData = data;
    });
  }
}

// .post(`${url}/OnDemandLab/GetOnDemandLabs`, {
//         InstructorId: null,
//         State: '5',
//         StartIndex: 100,
//         PageCount: 1,
//       }
