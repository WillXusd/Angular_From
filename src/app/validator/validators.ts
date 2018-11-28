import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

//普通校验器
export function mobileValidator(control: FormControl): any
{
  var myreg = /^1[34578]\d{9}$/;
  let valid = myreg.test(control.value);
  console.log("mobile的校验结果是:" + valid);
  return valid ? null : { mobile: true };//校验器返回null表示校验通过
}

//异步校验器
//export function mobileAsyncValidator(control: FormControl): any {
//  var myreg = /^1[34578]\d{9}$/;
//  let valid = myreg.test(control.value);
//  console.log("mobile的校验结果是:" + valid);
//  return Observable.of(valid ? null : { mobile: true });
//}

//formGroup的校验器
export function equalValidator(group: FormGroup): any {
  let password: FormControl = group.get("password") as FormControl;
  let pconfirm: FormControl = group.get("pconfirm") as FormControl;

  if (password && pconfirm) {
    let valid: boolean = (password.value === pconfirm.value);
    console.log("password.value->", password);
    console.log("密码校验结果->", valid);
    return valid ? null : {
      equal: { desc: "密码和确认密码不匹配" }
    };
  }
  
}
