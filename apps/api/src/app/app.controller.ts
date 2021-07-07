import { Message } from '@demo-nx/api-interfaces';
import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { PokemonService } from './pokemon/pokemon.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly pokemonService: PokemonService
  ) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('pokemon')
  getPokemons(@Param('limit') limit: number, @Param('offset') offset: number) {
    return this.pokemonService.getPokemonOriginPaginator(limit, offset);
  }
}
