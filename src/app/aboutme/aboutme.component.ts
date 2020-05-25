import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Enquiry } from '../data-models/enquiry';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {
  public createEnquiryForm: FormGroup;
  public enquiry: Enquiry;
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.enquiry = new Enquiry();
    this.createEnquiryForm = new FormGroup({
      title: new FormControl(this.enquiry.title, [Validators.required, Validators.minLength(10)]),
      query: new FormControl(this.enquiry.query, [Validators.required, Validators.minLength(10)]),
      email: new FormControl(this.enquiry.email, Validators.required),
      contact: new FormControl(this.enquiry.contact, Validators.required),
    });
  }

  public getErrorMessage() {
    if (this.createEnquiryForm.controls.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.createEnquiryForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  public submit() {
    if (this.createEnquiryForm.valid) {
      this.postService.createEnquiry(this.enquiry).subscribe((response) => {
        this.router.navigateByUrl('');
      });
    }
  }


}
