import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { XService } from 'src/app/services/x.service';
import { XPost } from 'src/app/types';

@Component({
  selector: 'app-news-post-list',
  templateUrl: './news-post-list.component.html',
  styleUrls: ['./news-post-list.component.scss']
})
export class NewsPostListComponent implements OnInit {
  xPostList$: Observable<XPost[]> = of([]);

  constructor(private xService: XService) { }

  ngOnInit(): void {
    this.getXPosts()
  }

  getXPosts(): void {
    this.xPostList$ = this.xService.getXPosts();
  }
}
