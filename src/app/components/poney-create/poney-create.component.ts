import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { RaceService } from 'src/app/services/race.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

type ValidatorReturnValue = undefined | ValidationErrors

@Component({
  selector: 'arl-poney-create',
  templateUrl: './poney-create.component.html',
  styleUrls: ['./poney-create.component.scss']
})
export class PoneyCreateComponent implements OnInit {

  poneyForm: FormGroup
  errorMessages: Object = {
    required: 'Ce champ est requis',
    minlength: '2 caractères minimum',
    gifrequired: 'Type requis : .gif',
    isponeynameavailable: 'Ce nom n\'est pas disponible'
  }

  constructor(private raceService: RaceService) { }

  ngOnInit() {
    this.poneyForm = new FormGroup({
      name: new FormControl('', [ Validators.required, Validators.minLength(2) ], [ this.isPoneyNameAvailable.bind(this) ]),
      img: new FormControl('', [ Validators.required, Validators.minLength(2), this.gifRequired ])
    })
  }

  gifRequired(control: FormControl): ValidatorReturnValue {
    let regExp = new RegExp(/.+\.gif$/i)
    
    return regExp.test(control.value) ? undefined : {
      gifrequired: true
    }
  }

  isPoneyNameAvailable(control: FormControl): Observable<ValidatorReturnValue> {
    return this.raceService.isPoneyNameAvailable(control.value).pipe(map(isAvailable => {
      return isAvailable ? undefined : {
        isponeynameavailable: true
      }
    }))
  }

  handleSubmit() {
    this.raceService.savePoney(this.poneyForm.value)
  }

}
