import { Title } from '@/app/shared/title/title';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '@interfaces/request-response';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '@/app/services/users';

@Component({
  selector: 'app-user',
  imports: [Title],
  templateUrl: './user.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class User {

  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({ id }) => this.usersService.getUserById( id ) )
    )
  )

  full_name = computed( () => {
    if( this.user() ) {
      return this.user()?.first_name + ' ' + this.user()?.last_name
    }
    return 'User Information';
  } )

}
