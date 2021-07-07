import { Message, PokemonPaginator } from '@demo-nx/api-interfaces';
import { Controller, Get, HttpService } from '@nestjs/common';
import { of } from 'rxjs';
import { AppService } from './app.service';
import { map } from 'rxjs/operators';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private httpService: HttpService
  ) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('pokemon')
  getPokemons() {
    return this.httpService
      .get<PokemonPaginator>(
        'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'
      )
      .pipe(map((response) => response.data));
  }
}
