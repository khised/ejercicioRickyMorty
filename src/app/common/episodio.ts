declare module namespace {

  export interface Info {
    count: number;
    pages: number;
    next: string;
    prev?: any;
  }

  export interface Result {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: Date;
  }

  export interface interepisodios {
    info: Info;
    results: Result[];
  }

}

