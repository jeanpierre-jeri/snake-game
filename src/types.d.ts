type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

type NumberBetween1And30 = IntRange<1, 31>
export type Position = [NumberBetween1And30, NumberBetween1And30]
export type Speed = 0 | 1 | -1
