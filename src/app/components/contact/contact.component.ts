import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// You have to love Models :o)
class ContactForm {
  name: String;
  email: String;
  message: String;
  sending: Boolean = false;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ContactComponent implements OnInit {

  contact = new ContactForm();
  output;

  constructor() { }

  submitContactForm() {
    console.log(this.contact);
    this.output = JSON.stringify(this.contact);
    this.contact = new ContactForm(); // when form sent success, clear fields
  }

  ngOnInit() {
  }

}
