import { Change } from './../../model/Change';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-change-edit',
  templateUrl: './change-edit.component.html',
  styleUrls: ['./change-edit.component.css']
})

export class ChangeEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  changeData: Change[];
  ChangeProfile: any = ['CBRE', 'CW', 'Mccain', 'JC', 'Sulzer']

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateChange();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getChange(id);
    this.editForm = this.fb.group({
      changeid: ['', [Validators.required]],
      changetaskid: ['', [Validators.required]],
      changetitle: ['', [Validators.required]],
      account: ['', [Validators.required]],
      execby: ['', [Validators.required]]
    })
  }

  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('account').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getChange(id) {
    this.apiService.getChange(id).subscribe(data => {
      this.editForm.setValue({
        changeid: data['changeid'],
        changetaskid: data['changetaskid'],
        changetitle: data['changetitle'],
        account: data['account'],
        execby: data['execby'],
      });
    });
  }

  updateChange() {
    this.editForm = this.fb.group({
      changeid: ['', [Validators.required]],
      changetaskid: ['', [Validators.required]],
      changetitle: ['', [Validators.required]],
      account: ['', [Validators.required]],
      execby: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateChange(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/changes-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}
