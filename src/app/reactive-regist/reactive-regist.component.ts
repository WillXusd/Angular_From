import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { equalValidator, mobileValidator } from '../validator/validators';

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
      mobile: ['',mobileValidator],
      passwordsGroup: fb.group({
        password: ['',Validators.minLength(6)], 
        pconfirm: ['']
      }, {validator:equalValidator})
    })
  }

  onSubmit() {
    let isValid: boolean = this.formModel.get("username").valid;
    console.log("校验结果-》", isValid);
    let errors: any = this.formModel.get("username").errors;
    console.log("校验信息-》", errors);
   
    if (this.formModel.valid) {
      console.log("验证成功->",this.formModel.value);
    }
  }

  ngOnInit() {
  }

}
