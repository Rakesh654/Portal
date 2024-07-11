import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  const cloneRequest = req.clone({
    setHeaders: {
      Roleid: '43375134326F4F7130564F3748766963514E48574E413D3D',
      Tenantid: '443171707A4441775A5867467146762F6834424461413D3D',
    },
  });
  return next(cloneRequest);
};
