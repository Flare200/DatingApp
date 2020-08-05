import { Injectable } from '@angular/core';
import * as alerify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

// tslint:disable-next-line: typedef
confirm(message: string, okCallback: () => any) {
  alerify.confirm(message, (e: any) => {
    if (e) {
      okCallback();
    }
    else {}
  });
}

// tslint:disable-next-line: typedef
success(message: string) {
  alerify.success(message);
}

// tslint:disable-next-line: typedef
error(message: string) {
  alerify.error(message);
}

// tslint:disable-next-line: typedef
warning(message: string) {
  alerify.warning(message);
}

// tslint:disable-next-line: typedef
message(message: string) {
  alerify.message(message);
}

}
