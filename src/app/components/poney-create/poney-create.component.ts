import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RaceService } from 'src/app/services/race.service';

@Component({
  selector: 'arl-poney-create',
  templateUrl: './poney-create.component.html',
  styleUrls: ['./poney-create.component.scss']
})
export class PoneyCreateComponent implements OnInit {

  poneyForm: FormGroup

  constructor(private raceService: RaceService) { }

  ngOnInit() {
    this.poneyForm = new FormGroup({
      name: new FormControl('', [ Validators.required ]),
      img: new FormControl('', [ Validators.required ])
    })
  }

  handleSubmit() {
    this.raceService.savePoney(this.poneyForm.value)
  }

}
