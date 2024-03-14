import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
onSubmit() {
throw new Error('Method not implemented.');
}
onCancel() {
throw new Error('Method not implemented.');
}

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group( {
      name:[null],
      category: [null]
    });
  }

ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}


