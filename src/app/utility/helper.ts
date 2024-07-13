import { AdminUserConfig } from '../interface/AdminUserConfig.interface';

export function GetCurrentTenant(value: string) {
  let config: AdminUserConfig | null = null;
  const storedTenant = localStorage.getItem('currentTenant');
  if (storedTenant) {
    config = JSON.parse(storedTenant) as AdminUserConfig;
  }
  return config;
}
