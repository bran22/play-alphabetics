export type Letter = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l'
  | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z';

export type WordList = {
  [key in Letter]: string[];
};

export const alphabet: Letter[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

export const allWords: WordList = {
  a: ['apple', 'avocado', 'aardvark'],
  b: ['banana', 'brave', 'balloon'],
  c: ['cat', 'candy', 'cricket'],
  d: ['dove', 'dog', 'domino'],
  e: ['elephant', 'ear', 'earth'],
  f: ['fish', 'fancy', 'finite'],
  g: ['glove', 'golf', 'gleam'],
  h: ['hippo', 'hotel', 'hearty'],
  i: ['iguana', 'igloo', 'impulse'],
  j: ['jester', 'jaguar', 'junction'],
  k: ['king', 'kilogram', 'knife'],
  l: ['lion', 'llama', 'laser'],
  m: ['monster', 'medicine', 'melt'],
  n: ['noun', 'nice', 'novice'],
  o: ['octopus', 'olive', 'oatmeal'],
  p: ['pencil', 'penguin', 'palindrome'],
  q: ['queen', 'quilt', 'quiver'],
  r: ['rooster', 'rat', 'realm'],
  s: ['snake', 'savannah', 'spork'],
  t: ['tulip', 'tunic', 'tasty'],
  u: ['umpire', 'uniform', 'utility'],
  v: ['velvet', 'velociraptor', 'vermin'],
  w: ['water', 'whale', 'wilt'],
  x: ['xenon', 'xylophone', 'xylem'],
  y: ['yellow', 'yarn', 'yacht'],
  z: ['zany', 'zebra', 'zipper'],
};
