import { Title } from '@/app/shared/title/title';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersService } from '@services/users';
import { RouterLink } from "@angular/router";
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-users',
  imports: [Title, RouterLink],
  templateUrl: './users.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Users {

  userService = inject( UsersService )

  userResource = rxResource({
    params: () => ({}),
    stream: () => this.userService.getUsers(),
  })



}
