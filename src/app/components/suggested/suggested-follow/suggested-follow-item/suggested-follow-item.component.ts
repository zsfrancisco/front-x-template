import { Component, Input } from '@angular/core';
import { SuggestedFollow } from 'src/app/types';

@Component({
  selector: 'app-suggested-follow-item',
  templateUrl: './suggested-follow-item.component.html',
  styleUrls: ['./suggested-follow-item.component.scss']
})
export class SuggestedFollowItemComponent {
  @Input() suggestedFollowItem: SuggestedFollow;
}
