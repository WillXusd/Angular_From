import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { mobileValidator } from '../validator/validators';
//指令是没有模板的，就是没模版的组件
@Directive({
  selector: '[mobile]',
  providers: [{ provide: NG_VALIDATORS, useValue: mobileValidator,multi:true}]
})
export class MobileValidatorDirective {

  constructor() { }

}
