import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ["mr", "yoda"]

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      "userData": new FormGroup({
        "username": new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        "email": new FormControl(null, [Validators.required, Validators.email], this.forbbidenEmails),
      }),      
      "gender": new FormControl("female"),
      "hobbies": new FormArray([]),
    });
    /* this.signupForm.valueChanges.subscribe(
      (value) => console.log(value)
    ) */
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    )
    this.signupForm.setValue({
      "userData": {
        "username": "Santi",
        "email": "un@mail.com"
      },
      "gender": "male",
      "hobbies": []
    })
    this.signupForm.patchValue({
      "userData": {
        "username": "Manuela"
      }
    })
  }

  //el reset puede ir pelao nomas aca es para no quitar el radio buton de male
  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset({
      "userData": {
        "username": "",
        "email": ""
      },
      "gender": "male",
      "hobbies": []
    })
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
   ( <FormArray>this.signupForm.get("hobbies") ).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  forbiddenNames(control: FormControl): {[key: string]: boolean} {
    if(this.forbiddenUsernames.indexOf(control.value) != -1) {
      return {"nameIsForbbiden": true}
    }
    return null;
  }

  forbbidenEmails(control: FormControl): Promise<any> | Observable <any> {
    const promise = new Promise<any>(
      (resolve, reject ) => {
        setTimeout( () => {
          if (control.value === "mi@mail.com") {
            resolve({"emailIsForbbiden": true});
          } else {
            resolve(null)
          }
        },1500)
      });
      return promise;
  }

}
