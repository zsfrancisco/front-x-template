import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SuggestedService } from 'src/app/services/suggested.service';
import { SuggestedNews } from 'src/app/types';

@Component({
  selector: 'app-suggested-news',
  templateUrl: './suggested-news.component.html',
  styleUrls: ['./suggested-news.component.scss']
})
export class SuggestedNewsComponent {
  suggestedNewsList$: Observable<SuggestedNews[]> = of([]);

  constructor(private suggestedService: SuggestedService) { }

  ngOnInit(): void {
    this.getSuggestedNewsList();
  }

  getSuggestedNewsList(): void {
    this.suggestedNewsList$ = this.suggestedService.getSuggestedNews();
  }
}
