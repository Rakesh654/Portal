// on-demand-lab.model.ts
export interface OnDemandLab extends BaseEvent {
  OnDemandLabId: number;
  EventId: number;
  Duration?: number;
  AllowUserToDeleteODL: boolean;
  InstructorId?: number;
  HasLicenses: boolean;
  HasUnAssignedHotInstances: boolean;
  QuizId?: number;
  MaxRetryCount: number;
  LabPromotionMessage: string;
  LabLaunchPageDescription: string;
  MockExamGuid?: string;
  MockExamId?: number;
  IsTrial: boolean;
  TrialEndPageURL: string;
  HasUnDeletedDeployments: boolean;
  DeploymentDuration?: number;
  SurveyGuid: string;
  LabGuideUrl: string;
  GitHubDocumentMasterFilePath: string;
  HasInlineQuestions: boolean;
  AnyManualTest: boolean;
  ConnectChannel: string;
  AllowUserToExtendLab: boolean;
  AllowedExtendDurationByAttendee?: number;
  MaxUserDurationExtension?: number;
  ACIContainerType: number;
  EnableCustomLabDetailsPage: boolean;
  LimitedAccess?: boolean;
  LabRequestId?: number;
  ComputeVMUsage: boolean;
  Country: string;
  ConsumerProfileId?: number;
  EnableLTIGrading: boolean;
  LTIBaseUrl: string;
  ResourceStartAlgorithmId: number;
  EnableAutoOrganization: boolean;
  PartnerheaderLogo: string;
  ThemeId?: number;
  TotalRows?: number;
  BannerImage: string;
  IsDecommission: boolean;
  DecommissionStatus: string;
  SubscriptionGroupType: string;
  CustomInstruction: string;
  PracticeTestGuid: string;
  MaxVmDurationExtension?: number;
  MaxsqlDurationExtension?: number;
  ResourceMonitoringTypes: ResourceMonitoringTypeModel[];
  IsRequestSchedule: boolean;
  EnableLabDurationAlgorithm: boolean;
  RequestStatusId?: number;
  LabEndTimeInUTC?: Date;
  InstructorThresholds: LabCreditNotificationModel[];
  AttendeeThresholds: LabCreditNotificationModel[];
  SystemAdminIsSupportQuest: boolean;
  DisableAutomaticSubscriptionAvailable?: boolean;
  AttendeeLabDeletionThresholds: LabCreditNotificationModel[];
  CanDeleteSharedRG: boolean;
  TermsofUseURL: string;
  SupportEmail: string;
  EnableCustomFooter: boolean;
  GrantAttendeeAccesstoCLPortal: boolean;
  HidePIIDetails?: boolean;
  GrantReadOnlyAccessToOdl?: boolean;
  LabDurationAlgorithm: string;
  IsCurrentInstrorHaveReadOnlyAccess?: boolean;
  UserLabExperienceTypes: UserLabExperienceType[];
  PreviewURL: string;
  TemplateEnableLabPreview: boolean;
  ODLEnableLabPreview: boolean;
  SubscriptionTypeId?: number;
  CanPreDeployLicenses: boolean;
  DefaultPortalURL: string;
  OpenAIEndpointGroupId?: number;
  OpenAIUserCredit?: number;
  IsOpenAILab: boolean;
  IdleTrackingSettings: IdleTrackingSettings;
  HasAttendeeTracking: boolean;
  LaaSTypeId?: number;
}

export interface BaseEvent {
  Id: number;
  LabCode: string;
  TypeId: number;
  Title: string;
  UniqueName: string;
  BitLink: string;
  TemplateId: number;
  PartnerId: number;
  PartnerName: string;
  PartnerLogo: string;
  TransparentPartnerheaderLogo: string;
  Description: string;
  LocationType?: number;
  Location: string;
  StartDate?: Date;
  EndDate?: Date;
  StartTime?: number;
  EndTime?: number;
  TimeZone: string;
  StatusId?: number;
  AllowAnonymousUsers: boolean;
  ApprovalTypeId?: number;
  SubscriptionGroupId?: number;
  ContactEmail: string;
  CustomTitle: string;
  Tags: string;
  AllowedEmailDomain: AllowedEmailDomain[];
  DoNotUseCloudSubscription: boolean;
  DoNotSendCloudCredentials: boolean;
  IsPrivate: boolean;
  AllowPersonalEmailAddressesForRegistration: boolean;
  EnableHotInstances: boolean;
  MinAvailableHotInstances: number;
  IntelligenceToSelfHeal: boolean;
  AdditionalNotes: string;
  SurveyUrl: string;
  IsForTestingPurpose: boolean;
  SponsorId?: number;
  SponsorName: string;
  BlockExpirationOfInstance: boolean;
  IsPaid: boolean;
  PaymentType?: number;
  RequiredCredits?: number;
  Language: string;
  LinkToVideo: string;
  VideoApprovalTypeId?: number;
  EnableVoucher: boolean;
  IsActive: boolean;
  InitiatedHotInstancesCount?: number;
  CreatedBy: string;
  CreatedTime: Date;
  ModifiedBy: string;
  ModifiedTime?: Date;
  TemplateName: string;
  Regions: AzureRegionModel[];
  CustomPortalData: CustomPortalConfigData[];
  EventLicenses: EventLicenseType[];
  SelectedChannelsUniqueName: string[];
  DeploymentGranularityId?: number;
  CloudPlatformId?: number;
  InternalTags: string;
  InternalId: string;
  MaxUserCount?: number;
  FeatureImageUrl: string;
  AllowExistingAD: boolean;
  EnableAzurePass: boolean;
  AzurePassDirectoryType?: number;
  EnablePrivateSubscriptions: boolean;
  PrivateSubscriptionOwnerEmail: string;
  CustomPrivacyUrl: string;
  CustomPrivacyStatement: string;
  CustomLogoUrl: string;
  EventCategory: EventCategory;
  AllowShowingInCloudLabs: boolean;
  EnableLeaderboard: boolean;
  EnableLabValidation: boolean;
  EnableSnapshot: boolean;
  BackupLimitPerVM: number;
  EnableAccessOverHttp: boolean;
  LicenseLabel: string;
  ActiveVMDurationLimit?: number;
  EnableResourceOperations: boolean;
  LabType: string;
  LinkToInstructorVideo: string;
  LabDescription: string;
  ClusterId?: number;
  UsagePurposeId?: number;
  LocalizationLanguage: string;
  FormattedLabDescription: string;
  LabEstimateInMinutes?: number;
  ACIDeploymentType?: number;
  AllowToSelectRegion: boolean;
  ParentEventId?: number;
  PurchaseOrder: string;
  EnableHotInstanceCleanUp: boolean;
  HotInstanceLifeTime?: number;
  ActiveSQLPoolDurationLimit?: number;
  ActiveDatabricksClusterDurationLimit?: number;
  EnableManagePortal: boolean;
  OptimizeHostInstancesVMCost: boolean;
  ShowUniqueId: boolean;
  EnableBannerImage: boolean;
  CustomStudentPortalURL: string;
  DelayTime?: number;
  EnableHackathon: boolean;
  EnableAnonymousGroupLeader?: boolean;
  EnableTeamsChannel: boolean;
  DefaultLanguage?: number;
  LanguageCode: string;
  IsDatabricksScript: boolean;
  DisableEmailCommunication: boolean;
  AllowEnvironmentDeleteNotification: boolean;
  IsLicenseUploadedByInstructor: boolean;
  NotificationEmail: string;
  EnableAutoSendHotInstanceDetail: boolean;
  EnableAutoLabValidation: boolean;
  AutoLabValidationTime?: number;
  EnableResourceIdlenessMonitoring: boolean;
  EnableContinuousResourceMonitoring: boolean;
  EnableInstructorToAddActivationCode: boolean;
  AllowAutomaticDeploymentReadyForInstructor: boolean;
  EnableManualStatusChange: boolean;
  EnableRunPraticeTestOnUserContext: boolean;
  MsTeamsCredentials: boolean;
  LabDurationAlgorithmId?: number;
  EnableCreditBasedAllocation?: boolean;
  CreditLimit?: number;
  CreditExpiryOperationId?: number;
  IsSupportQuest: boolean;
  EnableVoucherRetake: boolean;
  EnableLabDeletionAlert?: boolean;
  AttendeeEndDate: boolean;
  EnableWallpaperRDPoverHTTPS: boolean;
  VMUptimeAlgorithm?: number;
  EnableUptimeAlert: boolean;
  DisableValidationTab: boolean;
  EnableInlineValidation: boolean;
  PeriodicUptimeUpdateDays?: number;
  PeriodicUptimeUpdateCount?: number;
  DisplayName: string;
  SubscriptionId?: number;
  SharedRGName: string;
  PlatformId?: number;
  Badge: string;
  CatalogStateOfNonAllowedDomains: string;
  EnableUserSpecificDeploymentsForHackathon: boolean;
  CompletionCriteria?: number;
}

export interface ResourceMonitoringTypeModel {
  // Define fields for ResourceMonitoringTypeModel
}

export interface LabCreditNotificationModel {
  // Define fields for LabCreditNotificationModel
}

export interface AllowedEmailDomain {
  // Define fields for AllowedEmailDomain
}

export interface AzureRegionModel {
  // Define fields for AzureRegionModel
}

export interface CustomPortalConfigData {
  // Define fields for CustomPortalConfigData
}

export interface EventLicenseType {
  // Define fields for EventLicenseType
}

export interface EventCategory {
  // Define fields for EventCategory
}

export interface UserLabExperienceType {
  // Define fields for UserLabExperienceType
}

export interface IdleTrackingSettings {
  // Define fields for IdleTrackingSettings
}
