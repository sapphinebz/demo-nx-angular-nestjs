export interface Message {
  message: string;
}

export interface PokemonPaginator {
  count: number;
  next: string;
  previous: string;
  results: PokemonInfo[];
}

export interface PokemonInfo {
  name: string;
  url: string;
}
