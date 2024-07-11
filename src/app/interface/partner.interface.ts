export interface Partner {
  Id: number;
  EncryptedPartnerId: string | any | null;
  PartnerId: number;
  Role: number;
  RoleName: string;
  Email: string;
  Name: string;
  Organization: string;
  IsAutomatedUser: boolean;
  EventId: number | any | null;
  JobRole: string | any | null;
  JobLocation: string | any | null;
  SubPartnerOrganizationId: number | any | null;
  IsRequester: boolean;
  SysAdminAllowEventCreation: boolean;
  MakeLabRequestUniqueIdOptional: boolean;
}
