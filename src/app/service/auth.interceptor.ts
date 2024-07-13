import { HttpInterceptorFn } from '@angular/common/http';
import { GetCurrentTenant } from '../utility/helper';
export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  let config = GetCurrentTenant('currentTenant');
  const cloneRequest = req.clone({
    setHeaders: {
      Roleid: `${config?.SelectedTenant.InternalRoleId ?? null}`,
      Tenantid: `${config?.SelectedTenant.InternalPartnerId ?? null}`,
    },
  });
  return next(cloneRequest);
};
