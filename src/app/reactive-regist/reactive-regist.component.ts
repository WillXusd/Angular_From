import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {

  //校验器模板
  //XXXXX(control: AbstractControl): { [key: string]: any } {
  //  return null;
  //}
  mobileValidator(control: FormControl): any
 {
  var myreg = /^1[34578]\d{9}$/;
  let valid = myreg.test(control.value);
  console.log("mobile的校验结果是:" + valid);
  return valid ? null : { mobile: true };//校验器返回null表示校验通过
  }
  //formGroup的校验器
  equalValidator(group: FormGroup): any {
    let password: FormControl = group.get("password") as FormControl;
    let pconfirm: FormControl = group.get("pconfirm") as FormControl;
    let valid: boolean = (password.value === pconfirm.value);
    console.log("密码校验结果->",valid);
    return valid ? null : { equal: true };
  }


  formModel: FormGroup;

  //constructor() {
  //  this.formModel = new FormGroup({
  //    username: new FormControl(),
  //    mobile: new FormControl(),
  //    passwordsGroup: new FormGroup({
  //      password: new FormControl(),
  //      pconfirm:new FormControl()
  //    })
  //  })
  //}

  //formBuilder
  constructor(fb:FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],//两个参数，第一个是默认值，第二个是校验器
      mobile: ['', this.mobileValidator],
      passwordsGroup: fb.group({
        password: [''],
        pconfirm: ['']
      }, {validator:this.equalValidator})
    })
  }

  onSubmit() {
    let isValid: boolean = this.formModel.get("username").valid;
    console.log("校验结果-》", isValid);
    let errors: any = this.formModel.get("username").errors;
    console.log("校验信息-》", errors);
    console.log(this.formModel.value);
  }

  ngOnInit() {
  }

}
