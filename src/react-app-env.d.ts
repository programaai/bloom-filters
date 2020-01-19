/// <reference types="react-scripts" />

declare module 'bloom-filters' {
  namespace exportable {
    interface Exportable {
      seed: number

      constructor()
      saveAsJSON(): object
      static fromJSON(jsonObj: object): Exportable
    }
  }

  namespace utils {
    function getDefaultSeed(): number
  }

  export class BloomFilter<T> extends exportable.Exportable {
    readonly size: number
    readonly length: number

    // shouldn't be exported but it's usefult for this example
    readonly _filter: Array<0b0 | 0b1>

    constructor(size = 1000, nbHashes = 4)

    static create(items = 1000, errorRate = 0.001, seed: number = utils.getDefaultSeed()): BloomFilter
    static from(array: Array<T>, errorRate: number, seed: number = utils.getDefaultSeed()): BloomFilter<T>

    add(element: T): void
    has(element: T): boolean
    rate(): number
  }
}
