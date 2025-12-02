import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoadersSlow } from "@/app/shared/heavy-loaders/heavy-loaders-slow";
import { Title } from "@/app/shared/title/title";

@Component({
  selector: 'app-defer-views',
  imports: [HeavyLoadersSlow, Title],
  templateUrl: './defer-views.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferViews {}
