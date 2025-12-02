import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-users-loader',
  imports: [],
  templateUrl: './users-loader.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersLoader { }
