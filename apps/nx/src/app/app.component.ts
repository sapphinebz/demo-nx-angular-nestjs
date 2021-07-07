import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message, PokemonByUrl } from '@demo-nx/api-interfaces';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'demo-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        query(':enter', [
          style({ transform: 'translateY(-30px)', opacity: 0 }),
          animate(
            '300ms ease-in',
            style({ transform: 'translateY(0px)', opacity: 1 })
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  pokemon$ = this.http.get<PokemonByUrl[]>('/api/pokemon');
  constructor(private http: HttpClient) {}
}
