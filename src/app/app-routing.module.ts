import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuoteAddComponent } from './quote-add/quote-add.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteComponent } from './quote/quote.component';

const routes: Routes = [
  {path:'',redirectTo:'quotes', pathMatch: 'full' },
  { path: 'quotes',  component: QuoteComponent },
  { path: 'detailView/:id', component: QuoteDetailsComponent },
  { path: 'quote-add', component: QuoteAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
