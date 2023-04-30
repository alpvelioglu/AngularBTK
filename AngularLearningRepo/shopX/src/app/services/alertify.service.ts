import { Injectable } from '@angular/core';

declare let alertify:any;

// @Injectable({
//   providedIn: 'root' // Global olacağını söylüyor app.module den provider'a eklersen buraya gerek yok
// })
@Injectable()
export class AlertifyService {

  constructor() { }

  success(message:string)
  {
    alertify.success(message);
  }

  error(message:string)
  {
    alertify.error(message);
  }

  warning(message:string)
  {
    alertify.warning(message);
  }
}

// @Injectable decoratoru -- Global servisler uygulamanın her yerinden kullanılabilir.
