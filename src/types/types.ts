export interface Country {
  name: { common: string };
  capital: string[];
  region: string;
  population: number;
  flag: { svg: string; alt?: string };
  cca3: string;
}
