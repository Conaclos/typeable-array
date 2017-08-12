
# Typeable array

[![travis][travis-image]][travis-url]

[![Standard Version][sv-image]][sv-url]
[![NPM version][npm-image]][npm-url]

`TypeableArray` provides a common TypeScript interface for `Array` and
 Typed arrays.

`ReadonlyTypeableArray` provides a readonly interface of `TypeableArray`.

`TypeableArrayConstructor` provides a common interface fro constructors of
`Array` and Typed arrays.

All interfaces are fully generic, including `TypeableArrayConstructor`. This
 makes `TypeableArrayConstructor` more type-safe than the interfaces
 provided in TypeScript library.


## How to use

If you use one of the prvided type in at least one exported interface,
 you have to place this package as production dependency.

```bash
npm install typeable-array
```

Otherwise, you can place this package as a dev dependency.

```bash
npm install --save-dev typeable-array
```

Once installed you just need to import it:

```typescript
import { TypeableArray } from "typeable-array"
```


## Credits

This piece of code was extracted from [distile-ts][distile-ts].

### License

Licensed under the [zlib license](https://opensource.org/licenses/zlib).

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted
 for inclusion in the work by you, shall be licensed as above, without any
 additional terms or conditions.


[travis-image]:
https://img.shields.io/travis/Conaclos/typeable-rray/master.svg
[travis-url]: https://travis-ci.org/Conaclos/typeable-array
[sv-image]:
https://img.shields.io/badge/release-standard%20version-brightgreen.svg?style=flat-square
[sv-url]:
https://github.com/conventional-changelog/standard-version
[npm-image]:
https://img.shields.io/npm/v/typeable-array.svg?style=flat-square
[npm-url]:
https://www.npmjs.com/package/typeable-array
[distile-ts]: https://github.com/Conaclos/distile-ts

