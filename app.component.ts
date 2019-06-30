import { Component } from '@angular/core';
import { FormGroup,FormBuilder,ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form:FormGroup;
  title = 'FormsApp';
 skills=["JavaScript" ,"Angular","Node JS"];

constructor(private formBuilder:FormBuilder)
{
  this.form=this.formBuilder.group({
    skills:this.formBuilder.array(this.skills.map(x=>!1))
  });
  
}

//private addCheckBoxItems()
//{
//this.skills.map((o,i) =>{
  //const control= new FormControl(i==0);
  //(this.form.controls.skills as FormArray).push(control);
//}
//)
//}

OnSubmit(value : any){
  console.log(value);
}

}
