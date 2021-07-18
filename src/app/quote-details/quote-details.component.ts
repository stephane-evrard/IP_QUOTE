import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { QuoteService } from '../quote.service';



@Component({
    selector: 'app-quote-details',
    templateUrl: './quote-details.component.html',
    styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
    id;
    quote;
    constructor(private service: QuoteService, private route: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.paramMap.get("id");
        this.quote = this.service.getQuote(this.id);
        console.log(this.quote);
    }


    deleteQuote(id) {
        this.service.deleteQuote(id);
    }

}
