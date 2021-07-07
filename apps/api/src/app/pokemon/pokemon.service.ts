import { PokemonByUrl, PokemonPaginator } from '@demo-nx/api-interfaces';
import { HttpService, Injectable } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { map, mergeAll, switchMap, toArray } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
@Injectable()
export class PokemonService {
  constructor(private http: HttpService) {}

  getPokemonPaginator(limit: number, offset: number) {
    return this.http
      .get<PokemonPaginator>(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      )
      .pipe(this.JSONData());
  }

  getPokemonOriginPaginator(limit: number, offset: number) {
    return this.getPokemonPaginator(limit, offset).pipe(
      switchMap((response) => {
        return from(
          response.results.map((po) => this.getPokemonByUrl(po.url))
        ).pipe(mergeAll(), toArray());
      })
    );
  }

  private JSONData<T>() {
    return (source: Observable<AxiosResponse<T>>) =>
      source.pipe(map((response) => response.data));
  }

  private getPokemonByUrl(url: string) {
    return this.http.get<PokemonByUrl>(url).pipe(this.JSONData());
  }
}
