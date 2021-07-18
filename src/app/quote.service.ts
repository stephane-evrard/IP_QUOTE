import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class QuoteService {
    quote;
    quotes = [
        {
            authorName: "Bill Gate",
            quote: "We always overestimate the change that will occur in the next two years and underestimate the change that will occur in the next ten. Don't let yourself be lulled into inaction.",
            nameOfPublisher: "XYZ",
            id: 1,
            like: 100,
            disLike: 5,
            date: '2019-02-02',
        },
        {
            authorName: "Steve Jobs",
            quote: "Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple. But it’s worth it in the end because once you get there, you can move mountains.",
            nameOfPublisher: "Maxwell",
            id: 2,
            like: 10,
            disLike: 0,
            date: '2020-10-10',
        },
        {
            authorName: "Warren Buffett",
            quote: "The difference between successful people and really successful people is that really successful people say no to almost everything.\n You’ve gotta keep control of your time, and you can’t unless you say no. You can’t let people set your agenda in life.”",
            nameOfPublisher: "Stephen",
            id: 3,
            like: 25,
            disLike: 1,
            date: '2018-05-09',
        },
        {
            authorName: "Jeff Bezos",
            quote: "What we need to do is always lean into the future; when the world changes around you and when it changes against you – what used to be a tail wind is now a head wind – you have to lean into that and figure out what to do because complaining isn’t a strategy.",
            nameOfPublisher: "Rajah",
            id: 4,
            like: 40,
            disLike: 0,
            date: '2021-04-01',
        },
        {
          authorName: "David Gerrold",
          quote: "To say that a writer’s hold on reality is tenuous is an understatement – it’s like saying the Titanic had a rough crossing. Writers build their own realities, move into them and occasionally send letters home. The only difference between a writer and a crazy person is that a writer gets paid for it.",
          nameOfPublisher: "Stephen",
          id: 3,
          like: 25,
          disLike: 1,
          date: '2018-05-09',
      },
      {
          authorName: "Jeff Bezos",
          quote: "If you have any young friends who aspire to become writers, the second greatest favour you can do them is to present them with copies of The Elements of Style. The first greatest, of course, is to shoot them now, while they’re happy.",
          nameOfPublisher: "Dorothy Parker",
          id: 4,
          like: 40,
          disLike: 0,
          date: '2011-04-08',
      }
    ];


    constructor(private route: Router) { }

    getQuotes() {
        return this.quotes;
    }

    addQuote(data) {
        this.quotes.push(data.value);
        this.route.navigateByUrl('/quotes');
    }
    getQuote(id) {
        return this.quotes.find(p => p.id == id);
    }


    deleteQuote(id) {
        this.quotes.forEach((value, index) => {
            if (value.id == id) this.quotes.splice(index, 1);
        });
        this.route.navigateByUrl('/quotes');
    }
}
