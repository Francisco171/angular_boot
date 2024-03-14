import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { CoursesService } from './../services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {


  courses:Observable<Course[]>;
  displayedColumns = ['name', 'category', 'actions'];

  constructor(
    private coursesService: CoursesService,
    // public dialog: MatDialog,
    private router: Router
    )

    {
    this.courses = this.coursesService.list();

  }

  ngOnInit(): void {

  }

  onAdd() {
    //this.router.navigate(commands:['courses/new']);
    }
}
