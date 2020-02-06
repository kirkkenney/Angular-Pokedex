export interface PokeModel {
    abilities: Object[];
    base_experience: number;
    forms: Object[];
    game_indices: string[];
    height: number;
    held_items: Object[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Object[];
    name: string;
    order: number;
    species: Object;
    sprites: Object;
    stats: Object[];
    types: Object[];
    weight: number;
}

export interface PokemonSpeciesModel {
    base_happiness: number;
    capture_rate: number;
    color: Object;
    egg_groups: Object[];
    evolution_chain: Object;
    evolves_from_species: Object;
    flavor_text_entries: Object[];
    form_descriptions: [];
    forms_switchable: boolean;
    gender_rate: number;
    genera: Object[];
    generation: Object;
    growth_rate: number;
    habitat: Object;
    has_gender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    name: string;
    names: Object[];
    order: number;
    pal_park_encounters: Object[];
    pokedex_numbers: [];
    shape: Object;
    varieties: Object[];
}