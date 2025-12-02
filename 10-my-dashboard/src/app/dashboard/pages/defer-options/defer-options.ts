import { HeavyLoadersFast } from '@/app/shared/heavy-loaders/heavy-loaders-fast';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from "@/app/shared/title/title";

@Component({
  selector: 'app-defer-options',
  imports: [HeavyLoadersFast, Title],
  templateUrl: './defer-options.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferOptions {}
