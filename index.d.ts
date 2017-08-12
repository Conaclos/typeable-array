// Copyright (c) 2017 Victorien Elvinger
//
// Licensed under the zlib license (https://opensource.org/licenses/zlib).


/**
 * Read-only typed or untyped array.
 */
export interface ReadonlyTypeableArray <T> {

// Access
    /**
     * @param index Zero-based index of the item to retrieve
     * @return Item attached to `n'.
     */
    readonly [index: number]: T

    /**
     * Count of elements.
     */
    readonly length: number

// Iterator
    /**
      * @return (key, value) pairs for every entry in the array.
      */
    entries (): IterableIterator<[number, T]>

    /**
      * @return Keys of the array.
      */
    keys (): IterableIterator<number>

    /**
      * @return Values of the array.
      */
    values (): IterableIterator<T>

    /**
     * Same than this.values()
     */
    [Symbol.iterator] (): IterableIterator<T>


// Logic
    /**
      * @param pred prdicate to test on the items
      * @param target Value to use as this when calling `pred'
      * @return Is `pred' satisfied by all items?
      */
    every (pred: (this: void, item: T, index: number, array: ReadonlyTypeableArray<T>) => boolean, target?: undefined): boolean
    every <Z> (pred: (this: Z, item: T, index: number, array: ReadonlyTypeableArray<T>) => boolean, target: Z): boolean

    /**
      * @param pred prdicate to test on the items
      * @param target Value to use as this when calling `pred'
      * @return Is `pred' satisfied by atleast one item?
      */
    some (pred: (this: void, item: T, i: number, array: ReadonlyTypeableArray<T>) => boolean, target?: undefined): boolean
    some <Z> (pred: (this: Z, item: T, i: number, array: ReadonlyTypeableArray<T>) => boolean, target: Z): boolean

// Loop
    /**
      * @param consumer Function to run for each item.
      * @param target Value to use as this when calling `consumer'.
      */
    forEach (consumer: (this: void, item: T, index: number, array: ReadonlyTypeableArray<T>) => void, target?: undefined): void
    forEach <Z> (consumer: (this: Z, item: T, index: number, array: ReadonlyTypeableArray<T>) => void, target: Z): void

// Searching
     /**
      * @param pred Function to run on each value in the array
      * @param target Value to use as this when calling `pred'.
      * @return An item that satisfies `pred' or undefined if none.
      */
    find (pred:
        (this: void, item: T, index: number, array: ReadonlyTypeableArray<T>) => boolean,
        target?: undefined): T | undefined
    find <Z> (pred: (this: Z, item: T, index: number, array: ReadonlyTypeableArray<T>) => boolean, target: Z): T | undefined

     /**
      * @param pred Function to run on each value in the array
      * @param target Value to use as this when calling `pred'.
      * @return Index of an item that satisfies `pred' or -1 if none.
      */
    findIndex (pred: (this: void, item: T) => boolean, target?: undefined): number
    findIndex <Z> (this: Z, pred: (item: T) => boolean, target: Z): number

    /**
      * @param item
      *     Element to locate.
      * @param fromIndex
      *     Zero-based index at which to start searching forwards.
      *     As a negative index; it indicates an offset from the end.
      *     Default: 0
      * @return Index of `item' or `-1' if not found.
      */
    indexOf (item: T, fromIndex?: number): number

    /**
      * @param item
      *     Element to locate.
      * @param fromIndex
      *     Zero-based index at which to start searching backwards.
      *     As a negative index; it indicates an offset from the start.
      *     Default: this.length - 1
      * @return Index of `item' or `-1' if not found.
      */
    lastIndexOf (item: T, fromIndex?: number): number

// Transformation and filtering
    /**
      * @param pred Function to test each element of the array.
      * @param target Value to use as this when calling `pred'.
      * @return New array with all items satisfying `pred'.
      */
    filter (pred: (this: void, item: T, i: number, array: ReadonlyTypeableArray<T>) => boolean, target?: undefined): TypeableArray<T>
    filter <Z> (pred: (this: Z, item: T, i: number, array: ReadonlyTypeableArray<T>) => boolean, target: Z): TypeableArray<T>

    /**
      * @param separator
      *     String to separate each element of the array.
      *     Default: ','
      * @return Concatenation of all items of this.
      */
    join (separator?: string): string

    /**
      * @param producer Function that produces an item of the new array.
      * @param target Value to use as this when calling `producer'.
      * @return New array mapping each item with `producer'.
      */
    map <U> (producer: (this: void, item: T, i: number, array: ReadonlyTypeableArray<T>) => U, target?: undefined): TypeableArray<U>
    map <U, Z> (producer: (this: Z, item: T, i: number, array: ReadonlyTypeableArray<T>) => U, target: Z): TypeableArray<U>

    /**
      * @param reducer Function to run for each item.
      * @param initial Intial value for `aPrev' in thefirst call to `reducer'.
      * @return Result of the reduction of the entire array.
      */
    reduce (reducer: (aPrev: T, item: T, i: number, array: ReadonlyTypeableArray<T>) => T, initial?: T): T

    /**
      * @param reducer Function to run for each item.
      * @param initial Intial value for `aPrev' in thefirst call to `reducer'.
      * @return Result of the reduction of the entire array.
      */
    reduce <U> (reducer: (aPrev: U, item: T, i: number, array: ReadonlyTypeableArray<T>) => U, initial: U): U

    /**
      * @param reducer Function to run for each item.
      * @param initial Intial value for `aPrev' in thefirst call to `reducer'.
      * @return Result of the backwards reduction of the entire array.
      */
    reduceRight (reducer: (aPrev: T, item: T, i: number, array: ReadonlyTypeableArray<T>) => T, initial?: T): T

    /**
      * @param reducer Function to run for each item.
      * @param initial Intial value for `aPrev' in thefirst call to `reducer'.
      * @return Result of the backwards reduction of the entire array.
      */
    reduceRight <U> (reducer: (aPrev: U, item: T, i: number, array: ReadonlyTypeableArray<T>) => U, initial: U): U

    /**
      * @param start
      *     Zero-based index at which to begin the slice.
      *     As a negative index; it indicates an offset from the end.
      *     Default: 0
      * @param end
      *     Zero-based index at which to end the slice.
      *     As a negative index; it indicates an offset from the end.
      *     Default: this.length - 1
      * @return New array from `start' until `end'.
      */
    slice (start?: number, end?: number): TypeableArray<T>

}

/**
 * Mutable typed or untyped array
 */
export interface TypeableArray <T> extends ReadonlyTypeableArray<T> {

    /**
     * WARNING: Assigment above this.length has no effect on typed arrays.
     * @param n Zero-based index of the item to retrieve
     * @return Item attached to `n'.
     */
    [n: number]: T

    /**
      * Mutation: Replace items from `target' with values
      *     from `start' until `end'.
      * @param target
      *     Zero-based index at which to copy the slice start .. end.
      *     As a negative index; it indicates an offset from the end.
      * @param start
      *     Zero-based index at which to start copying item from.
      *     As a negative index; it indicates an offset from the end.
      *     Default: 0
      * @param end
      *     Zero-based index at which to end copying item from.
      *     As a negative index; it indicates an offset from the end.
      *     Default: this.length - 1
      * @param this
      */
    copyWithin (target: number, start: number, end?: number): this

    /**
      * Mutation: Replace items from `start' until `end' with `item'.
      * @param item
      * @param start
      *     Zero-based index at which to start replacing.
      *     As a negative index; it indicates an offset from the end.
      *     Default: 0
      * @param end
      *     Zero-based index at which to end replacing.
      *     As a negative index; it indicates an offset from the end.
      *     Default: this.length - 1
      * @return this
      */
    fill (item: T, start?: number, end?: number): this

    /**
      * Mutation: Reverse the order of the items.
      * @return this
      */
    reverse (): this

    /**
      * Mutation: Sort the array
      * @param a3wayComparator Three-way-comparator.
      * @return this
      */
    sort (a3wayComparator?: (a: T, b: T) => number): this

}


/**
 * Typed or untyped array constructor
 */
export interface TypeableArrayConstructor <T> {

    new (aLength: number): TypeableArray<T>

    /**
     * @param ref An array-like object to convert to an array.
     * @param converter A mapping function to call on all tems of the array.
     * @param target Value used as this to call `converter'.
     * @return New array from `ref'.
     */
    from <U> (ref: ArrayLike<U>, converter: (this: void, v: U, k: number) => T, atarget?: undefined): TypeableArray<T>
    from <U, Z> (ref: ArrayLike<U>, converter: (this: Z, v: U, k: number) => T, atarget: Z): TypeableArray<T>

    /**
     * @param ref An array-like object to convert to an array.
     * @return New array from `ref'.
     */
    from (ref: ArrayLike<T>): TypeableArray<T>

    /**
     * @param items Set of items to include.
     * @return New array from `items'.
     */
    of (...items: T[]): TypeableArray<T>

    readonly prototype: TypeableArray<T>

}

