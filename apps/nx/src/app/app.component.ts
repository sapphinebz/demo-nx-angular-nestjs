import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message, PokemonPaginator } from '@demo-nx/api-interfaces';

@Component({
  selector: 'demo-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  pokemon$ = this.http.get<PokemonPaginator>('/api/pokemon');
  constructor(private http: HttpClient) {}
}
