interface species {
  name: string;
  url: string;
}

interface ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface form {
  name: string;
  url: string;
}

interface gameIndex {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

interface heldItem {
  item: {
    name: string;
    url: string;
  };
  version_details: Array<{
    rarity: number;
    version: {
      name: string;
      url: string;
    };
  }>;
}

interface move {
  move: {
    name: string;
    url: string;
  };
  version_group_details: Array<{
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }>;
}

interface stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface IPokemon {
  abilities?: Array<ability>;
  base_experience?: number;
  forms?: Array<form>;
  game_indices?: Array<gameIndex>;
  height?: number;
  held_items?: Array<heldItem>;
  id?: number;
  is_default?: boolean;
  location_area_encounters?: string;
  moves?: Array<move>;
  name: string;
  order?: number;
  past_types?: Array<any>;
  species?: species;
  sprites?: any;
  stats?: Array<stat>;
  types?: Array<type>;
  weight?: number;
  url: string;
}

export interface IPokemonIDandURL {
  name: string;
  url: string;
}
