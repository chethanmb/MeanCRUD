import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-change-create',
  templateUrl: './change-create.component.html',
  styleUrls: ['./change-create.component.css']
})

export class ChangeCreateComponent implements OnInit {
  submitted = false;
  changeForm: FormGroup;
  ChangeProfile:any = ['CBRE', 'CW', 'Mccain', 'JC', 'Sulzer']

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.changeForm = this.fb.group({
      changeid: ['', [Validators.required]],
      changetaskid: ['', [Validators.required]],
      changetitle: ['', [Validators.required]],
      account: ['', [Validators.required]],
      execby: ['', [Validators.required]]
    })
  }

  // Choose designation with select dropdown
  updateProfile(e){
    this.changeForm.get('account').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.changeForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.changeForm.valid) {
      return false;
    } else {
      this.apiService.createChange(this.changeForm.value).subscribe(
        (res) => {
          console.log('Change successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/changes-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
