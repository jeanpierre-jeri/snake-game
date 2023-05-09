
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export type BoardSizeRange = IntRange<1, 6>
export type Position = [BoardSizeRange, BoardSizeRange]
export type Speed = 0 | 1 | -1
