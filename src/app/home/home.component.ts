import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MsalService, MsalBroadcastService } from '@azure/msal-angular';
import {
  EventMessage,
  AuthenticationResult,
  InteractionStatus,
  EventType,
} from '@azure/msal-browser';
import { filter } from 'rxjs';
import { environment } from '../../environments/environment';
import { OnDemandLab } from '../interface/on-demand-lab.interface';
import { HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  loginDisplay = false;
  dataSource: any = [];
  ELEMENT_DATA: OnDemandLab[] | any = [];
  displayedColumns: string[] = ['id', 'title', 'expiry', 'template'];

  constructor(
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS)
      )
      .subscribe((result: EventMessage) => {
        console.log(result);
        const payload = result.payload as AuthenticationResult;
        this.authService.instance.setActiveAccount(payload.account);
      });

    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None)
      )
      .subscribe(() => {
        this.setLoginDisplay();
        this.getOnDemandLab(environment.apiConfig.uri);
      });
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

  getClaims(claims: Record<string, any>) {
    if (claims) {
      Object.entries(claims).forEach(
        (claim: [string, unknown], index: number) => {
          this.dataSource.push({ id: index, claim: claim[0], value: claim[1] });
        }
      );
    }
  }
  getOnDemandLab(url: string) {
    this.http
      .post(`${url}/OnDemandLab/GetOnDemandLabs`, {
        InstructorId: null,
        State: '2',
        StartIndex: 100,
        PageCount: 1,
      })
      .subscribe((response) => {
        this.ELEMENT_DATA = response;
      });
  }
}
