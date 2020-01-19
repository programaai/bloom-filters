import { BloomFilter as BF } from 'bloom-filters';

export type maybe = true;
export type bit = 0b0 | 0b1;

export class BloomFilter {
  private _allItems: Set<string>
  private _bloomFilter: BF<string>
  private _errorRate: number
  private _capacity: number

  constructor(capacity: number, errorRate: number, items?: Set<string>) {
    this._allItems = items ?? new Set()
    this._errorRate = errorRate;

    this._capacity = capacity
    this._bloomFilter = BF.create(capacity, errorRate)
    this._allItems.forEach(i => this._bloomFilter.add(i))
  }

  public get capacity(): number {
    return this._capacity
  }

  public get size(): number {
    return this._bloomFilter.size;
  }

  public get length(): number {
    return this._allItems.size
  }

  public get errorRate(): number {
    return this._errorRate;
  }

  public get items(): string[] {
    return Array.from(this._allItems).sort();
  }

  public get filter(): bit[] {
    return this._bloomFilter._filter;
  }

  public add(item: string): BloomFilter {
    return new BloomFilter(this._capacity, this._errorRate, this._allItems.add(item))
  }

  public has(item: string): false | maybe {
    return this._bloomFilter.has(item)
  }
}
