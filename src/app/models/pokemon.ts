export interface PokemonResult {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonSimple[];
}

export interface PokemonSimple {
  name: string;
  url: string;
}

export interface PokemonDetailModel {
  id: number;
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      }
    }
  }
}
