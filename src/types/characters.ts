export interface CharacterData {
  age: string;
  gender: string;
  homePlanet: string;
  id: number;
  species: string;
  images: {
    headShot: string;
    main: string;
  };
  name: {
    first: string;
    middle: string;
    last: string;
  };
  occupation: string;
  saying: [string];
}
