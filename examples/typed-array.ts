// Copyright (c) 2017 Victorien Elvinger
//
// Licensed under the zlib license (https://opensource.org/licenses/zlib).

import {
    ReadonlyTypeableArray,
    TypeableArray,
    TypeableArrayConstructor
} from "../"


// Untyped array

const arr: TypeableArray<number> = [0, 1]

// Untyped array constructor

const arrC: TypeableArrayConstructor<number> = Array


// Typed arrays

const i8a: TypeableArray<number> = new Int8Array([0, 1])
const u8a: TypeableArray<number> = new Uint8Array([0, 1])
const uc8a: TypeableArray<number> = new Uint8ClampedArray([0, 1])
const i16a: TypeableArray<number> = new Int16Array([0, 1])
const u16a: TypeableArray<number> = new Uint16Array([0, 1])
const i32a: TypeableArray<number> = new Int32Array([0, 1])
const u32a: TypeableArray<number> = new Uint32Array([0, 1])

const f32a: TypeableArray<number> = new Float32Array([0, 1])
const f64a: TypeableArray<number> = new Float64Array([0, 1])

// Typed array constructors

const i8aC: TypeableArrayConstructor<number> = Int8Array
const u8aC: TypeableArrayConstructor<number> = Uint8Array
const uc8aC: TypeableArrayConstructor<number> = Uint8ClampedArray
const i16aC: TypeableArrayConstructor<number> = Int16Array
const u16aC: TypeableArrayConstructor<number> = Uint16Array
const i32aC: TypeableArrayConstructor<number> = Int32Array
const u32aC: TypeableArrayConstructor<number> = Uint32Array

const f32aC: TypeableArrayConstructor<number> = Float32Array
const f64aC: TypeableArrayConstructor<number> = Float64Array

