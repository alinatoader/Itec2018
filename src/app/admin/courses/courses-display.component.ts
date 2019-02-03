import { Component, OnInit, ViewChild } from "@angular/core";
import { NgbTabChangeEvent, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CoursesService } from "./courses.service";
@Component({
    templateUrl: 'courses-display.component.html',
    styles: [`
    .dark-modal .modal-content {
      background-color: #009efb;
      color: white;
    }
    .dark-modal .close {
      color: white;   
    }
  `]
})
export class CoursesDisplayComponent implements OnInit {
    courses: any;
    public linkForQR: string = null;
    closeResult: string;
    emailForm: FormGroup;
    quizId = 0;
    teachers: any;
    uploadForm: FormGroup;
    course: any;

    constructor(private coursesService: CoursesService, private router: Router,
        private modalService: NgbModal, private modalService2: NgbModal) { }

    public beforeChange($event: NgbTabChangeEvent) {
        if ($event.nextId === 'tab-preventchange2') {
            $event.preventDefault();
        }
    };

    getAll() {
        this.coursesService.getAll().subscribe(courses => {
            this.courses = courses; console.log(this.courses);
            for (let i = 0; i < this.courses.length; i++) {
                this.coursesService.getFiles(this.courses[i].id).subscribe(
                    response => {
                        this.courses[i].files = response;
                    }, error => {
                        console.log(error);
                    }
                )
            }
        },
            error => {
                console.log(error);
            })
    }

    getAllTeachers() {
        this.coursesService.getAllTeachers().subscribe(teachers => {
            this.teachers = teachers;
        },
            error => {
                console.log(error);
            })
    }

    deleteCourse(id: number) {
        this.coursesService.delete(id).subscribe(_ => {
            this.getAll();
        },
            error => {
                console.log(error);
            }
        );
    }

    editCourse(id: number) {
        this.router.navigateByUrl('/admin/courses/create/' + id);
    }

    addQuiz(courseId: number) {
        this.router.navigateByUrl('/admin/courses/quiz/' + courseId);
    }

    ngOnInit(): void {
        this.getAll();
        this.getAllTeachers();
        this.emailForm = new FormGroup({
            email: new FormControl('', Validators.email)
        });
        this.uploadForm = new FormGroup({
            file: new FormControl()
        });
    }

    generateQR(quizId: number, content) {
        this.linkForQR = null;
        this.emailForm.reset();
        this.quizId = quizId;
        this.open2(content);
    }

    uploadFile(event) {
        this.coursesService.upload(this.course.id, event.target.files.item(0))
            .subscribe(_ => {
                window.location.reload();
            }, error => {
                console.log(error);
            });
    }

    uploadnewFile(content, course) {
        this.course = course;
        this.open2(content);
    }

    onEmailChange(course) {
        const emailInput = this.emailForm.get('email');
        if (emailInput.valid) {
            this.linkForQR = 'https://quizzmee.herokuapp.com/#/user/quiz/' + this.quizId + '/' + emailInput.value;
        }
    }

    open2(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    open(content) {
        this.modalService2.open(content, { windowClass: 'dark-modal' });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    search(course, statusSelect, sortSelect) {
        const searchValue = course.target.value;
        const body = {
            searchName: searchValue,
            teacherName: statusSelect.value,
            sortByDate: sortSelect.value === 'ASC' ? true : false,
            sort: sortSelect.value !== 'NONE' ? true : false
        }
        this.coursesService.filter(body)
            .subscribe(response => {
                this.courses = response;
            }, error => console.log(error));
    }

    filter(course, sortSelect, searchInput) {
        const filterStatus = course.target.value;
        const body = {
            searchName: searchInput.value,
            teacherName: filterStatus,
            sortByDate: sortSelect.value === 'ASC' ? true : false,
            sort: sortSelect.value !== 'NONE' ? true : false
        }
        this.coursesService.filter(body)
            .subscribe(response => {
                this.courses = response;
            }, error => console.log(error));
    }

    sort(course, statusSelect, searchInput) {
        const sortDir = course.target.value;
        const body = {
            searchName: searchInput.value,
            teacherName: statusSelect.value,
            sortByDate: sortDir === 'ASC' ? true : false,
            sort: sortDir !== 'NONE' ? true : false
        }
        this.coursesService.filter(body)
            .subscribe(response => {
                this.courses = response;
            }, error => console.log(error));
    }

    downloadFile(fileName: string) {
        this.coursesService.downloadFile(fileName).subscribe(
            data => {
                let blob = new Blob([data]);
                var downloadURL = window.URL.createObjectURL(data);
                var link = document.createElement('a');
                link.href = downloadURL;
                link.download = fileName;
                link.click();
            }, error => {
                console.log(error);
            }
        )
    }
}