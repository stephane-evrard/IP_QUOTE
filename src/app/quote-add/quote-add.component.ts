import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { QuoteService } from '../quote.service';


@Component({
    selector: 'app-quote-add',
    templateUrl: './quote-add.component.html',
    styleUrls: ['./quote-add.component.css']
})
export class QuoteAddComponent implements OnInit {
    profileForm = this.fb.group({
        id: Math.floor((Math.random() * 1000) + 1),
        authorName: ['', Validators.required],
        nameOfPublisher: ['', Validators.required],
        quote: ['', Validators.required],
        like: 0,
        disLike: 0,
        date: new Date(),
    });


    constructor(private fb: FormBuilder, private service: QuoteService) { }

    ngOnInit(): void {
    }



    onSubmit() {
        // this.profileForm.value['authorName']
        console.log(this.profileForm);
        this.service.addQuote(this.profileForm);
    }

}
