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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  loginDisplay = false;
  displayedColumns: string[] = ['claim', 'value'];
  dataSource: any = [];

  constructor(
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService
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
        this.getClaims(
          this.authService.instance.getActiveAccount()?.idTokenClaims as Record<
            string,
            any
          >
        );
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
}
