import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  title= " Form";



   public testForm!:FormGroup;
  items!:FormArray;
  index: any;


  constructor( private fb: FormBuilder ) { 
    this.lists=[];
  }


  ngOnInit(): void {
    this.testForm = new FormGroup({

  items:new FormArray([]),

  
      
      // 'firstname': new FormControl('', Validators.required),
      // 'lastname': new FormControl(''),
      // 'gender': new FormControl('', Validators.required),
      // 'dob': new FormControl('', Validators.required),
      // 'phone': new FormControl('', Validators.required),
      // 'email': new FormControl('', [Validators.required, Validators.required])

    });
  }
 


  createItem(): FormGroup{
    return this.fb.group({
      firstname:['',  Validators.required, Validators.maxLength(10)],
      lastname:[''],
      gender:['', Validators.required],
      dob:['', Validators.required],
      phone:['', Validators.required, Validators.minLength(10)],
      email:['', Validators.required, Validators.email]
    })    
  }

  addNewuser(): void {  
    this.items = this.testForm.get('items') as FormArray;  
    this.items.push(this.createItem());  
    
  }
  removeFeature(index:any): void {
    this.items.removeAt(index);
    console.log(this.index);
  }





listArray=[
  {
    firstname:"",
    lastname:"",
    gender:"",
    dob:"",
    phone:"",
    email:"",
    isEdit:false
  }
]

  
submitted=false;
lists:any;




  

 
 
  onSubmit(){
    this.submitted=true;
    console.log(this.testForm.value.items);
    if (this.testForm.invalid) {
      return;
  }else{this.lists.push(this.testForm.value)
    this.testForm.reset()}
    


  }
 

  deleteData(data:any){
    this.lists.forEach((value:any,index:any) => {
       if(value==data){
this.lists.splice(index,1)
       }      
    });

  }
  
  onEdit(item:any){
    item.isEdit=true;
  }
}


