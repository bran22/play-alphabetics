export type Letter = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l'
  | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z';

export type WordList = {
  [key in Letter]: string[];
};

export const alphabet: Letter[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

export const allWords: WordList = {
  a: ['apple', 'avocado'],
  b: ['banana', 'brave'],
  c: ['cat', 'candy'],
  d: ['dove', 'dog'],
  e: ['elephant', 'ear'],
  f: ['fish', 'fancy'],
  g: ['glove', 'golf'],
  h: ['hippo', 'hotel'],
  i: ['iguana', 'igloo'],
  j: ['jester', 'jaguar'],
  k: ['king', 'kilogram'],
  l: ['lion', 'llama'],
  m: ['monster', 'medicine'],
  n: ['noun', 'nice'],
  o: ['octopus', 'olive'],
  p: ['pencil', 'penguin'],
  q: ['queen', 'quilt'],
  r: ['rooster', 'rat'],
  s: ['snake', 'savannah'],
  t: ['tulip', 'tunic'],
  u: ['umpire', 'uniform'],
  v: ['velvet', 'velociraptor'],
  w: ['water', 'whale'],
  x: ['xenon', 'xylophone'],
  y: ['yellow', 'yes'],
  z: ['zany', 'zebra'],
};
