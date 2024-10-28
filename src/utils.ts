export const colors = {
  white: '#FFFFFF',
  white_off: '#E3E3E4',
  white_polar: '#BFBFC04D',
  black_text: '#434141',
  grey_text: '#BFBFC0',
  background: '#FBFAFF',
  pink: '#EC537E',
};

export const sizes = {
  //the comment helps in IDE hit
  /* xxs: 2 */
  xxs: 2,
  /* xs: 4 */
  xs: 4,
  /* s: 8 */
  s: 8,
  /* m: 16 */
  m: 16,
  /* l: 24 */
  l: 24,
  /* xl: 32 */
  xl: 32,
  /* card height */
  cardHeight: 446,
  /* switch width */
  switchWidth: 84,
  /* switch height */
  switchHeight: 28,
  /* toggle width */
  toggleWidth: 40,
  /* toggle height */
  toggleHeight: 24,
  /* circle button */
  button: 54,
};

export enum GAME_TYPE {
  LIKE = 'LIKE',
  STAR = 'STAR'
}

export interface Cat {
  id: string;
  url: string;
  breeds: {
    id: string;
    name: string;
    origin: string;
    affection_level: number;
  }[];
}

export interface MappedCat {
  id: string;
  url: string;
  name: string;
  origin: string;
  affectionLevel: number;
}
