import { Component, Input } from '@angular/core';
import { XPost } from 'src/app/types';

@Component({
  selector: 'app-x-post',
  templateUrl: './x-post.component.html',
  styleUrls: ['./x-post.component.scss']
})
export class XPostComponent {
  @Input() post: XPost;
}
