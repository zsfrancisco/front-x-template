import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SuggestedService } from 'src/app/services/suggested.service';
import { SuggestedFollow } from 'src/app/types';

@Component({
  selector: 'app-suggested-follow',
  templateUrl: './suggested-follow.component.html',
  styleUrls: ['./suggested-follow.component.scss']
})
export class SuggestedFollowComponent implements OnInit {
  suggestedFollowList: Observable<SuggestedFollow[]> = of([]);

  constructor(private suggestedService: SuggestedService) { }

  ngOnInit(): void {
    this.getSuggestedFollowList();
  }

  getSuggestedFollowList() {
    this.suggestedFollowList = this.suggestedService.getSuggestedFollow();
  }
}
