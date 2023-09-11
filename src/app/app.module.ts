import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuggestedComponent } from './components/suggested/suggested.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NewsComponent } from './components/news/news.component';
import { SuggestedFollowComponent } from './components/suggested/suggested-follow/suggested-follow.component';
import { SuggestedNewsComponent } from './components/suggested/suggested-news/suggested-news.component';
import { SuggestedNewsItemComponent } from './components/suggested/suggested-news/suggested-news-item/suggested-news-item.component';
import { SuggestedFollowItemComponent } from './components/suggested/suggested-follow/suggested-follow-item/suggested-follow-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SuggestedComponent,
    SideNavComponent,
    NewsComponent,
    SuggestedFollowComponent,
    SuggestedNewsComponent,
    SuggestedNewsItemComponent,
    SuggestedFollowItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
