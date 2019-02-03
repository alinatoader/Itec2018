import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'app-courses-create',
    templateUrl: 'courses-create.component.html'
})
export class CoursesCreateComponent implements OnInit {
    id: any;
    courses: any;
    courseCreateForm: FormGroup;

    constructor(private coursesService: CoursesService, private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.courseCreateForm = new FormGroup({
            id: new FormControl(0),
            name: new FormControl(''),
            description: new FormControl(''),
            teacherName: new FormControl(''),
        });
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.getcourseByName(this.id);
        }
    }

    addcourse() {
        this.coursesService.create(this.courseCreateForm.value)
            .subscribe(response => {
                console.log(response);
                this.router.navigateByUrl('/admin/courses');
            }, error => {
                console.log(error);
            }
            );
    }

    savecourse() {
        if (this.id) {
            this.updatecourse();
        } else {
            this.addcourse();
        }
    }

    updatecourse() {
        this.coursesService.update(this.id, this.courseCreateForm.value)
            .subscribe(response => {
                console.log(response);
                this.router.navigateByUrl('/admin/courses');
            }, error => {
                console.log(error);
            }
            );
    }

    getcourseByName(id: number) {
        this.coursesService.getById(id).subscribe(
            response => {
                console.log(response);
                this.courseCreateForm.setValue(response);
            }, error => console.log(error)
        );
    }
}