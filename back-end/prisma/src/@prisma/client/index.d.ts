
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model author
 * 
 */
export type author = $Result.DefaultSelection<Prisma.$authorPayload>
/**
 * Model author_relation
 * 
 */
export type author_relation = $Result.DefaultSelection<Prisma.$author_relationPayload>
/**
 * Model history_type
 * 
 */
export type history_type = $Result.DefaultSelection<Prisma.$history_typePayload>
/**
 * Model phrase
 * 
 */
export type phrase = $Result.DefaultSelection<Prisma.$phrasePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Authors
 * const authors = await prisma.author.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Authors
   * const authors = await prisma.author.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.author`: Exposes CRUD operations for the **author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.authorDelegate<ExtArgs>;

  /**
   * `prisma.author_relation`: Exposes CRUD operations for the **author_relation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Author_relations
    * const author_relations = await prisma.author_relation.findMany()
    * ```
    */
  get author_relation(): Prisma.author_relationDelegate<ExtArgs>;

  /**
   * `prisma.history_type`: Exposes CRUD operations for the **history_type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more History_types
    * const history_types = await prisma.history_type.findMany()
    * ```
    */
  get history_type(): Prisma.history_typeDelegate<ExtArgs>;

  /**
   * `prisma.phrase`: Exposes CRUD operations for the **phrase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Phrases
    * const phrases = await prisma.phrase.findMany()
    * ```
    */
  get phrase(): Prisma.phraseDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    author: 'author',
    author_relation: 'author_relation',
    history_type: 'history_type',
    phrase: 'phrase'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'author' | 'author_relation' | 'history_type' | 'phrase'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      author: {
        payload: Prisma.$authorPayload<ExtArgs>
        fields: Prisma.authorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.authorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$authorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.authorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          findFirst: {
            args: Prisma.authorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$authorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.authorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          findMany: {
            args: Prisma.authorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$authorPayload>[]
          }
          create: {
            args: Prisma.authorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          createMany: {
            args: Prisma.authorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.authorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          update: {
            args: Prisma.authorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          deleteMany: {
            args: Prisma.authorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.authorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.authorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAuthor>
          }
          groupBy: {
            args: Prisma.authorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.authorCountArgs<ExtArgs>,
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number
          }
        }
      }
      author_relation: {
        payload: Prisma.$author_relationPayload<ExtArgs>
        fields: Prisma.author_relationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.author_relationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$author_relationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.author_relationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$author_relationPayload>
          }
          findFirst: {
            args: Prisma.author_relationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$author_relationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.author_relationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$author_relationPayload>
          }
          findMany: {
            args: Prisma.author_relationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$author_relationPayload>[]
          }
          create: {
            args: Prisma.author_relationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$author_relationPayload>
          }
          createMany: {
            args: Prisma.author_relationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.author_relationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$author_relationPayload>
          }
          update: {
            args: Prisma.author_relationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$author_relationPayload>
          }
          deleteMany: {
            args: Prisma.author_relationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.author_relationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.author_relationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$author_relationPayload>
          }
          aggregate: {
            args: Prisma.Author_relationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAuthor_relation>
          }
          groupBy: {
            args: Prisma.author_relationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Author_relationGroupByOutputType>[]
          }
          count: {
            args: Prisma.author_relationCountArgs<ExtArgs>,
            result: $Utils.Optional<Author_relationCountAggregateOutputType> | number
          }
        }
      }
      history_type: {
        payload: Prisma.$history_typePayload<ExtArgs>
        fields: Prisma.history_typeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.history_typeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$history_typePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.history_typeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$history_typePayload>
          }
          findFirst: {
            args: Prisma.history_typeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$history_typePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.history_typeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$history_typePayload>
          }
          findMany: {
            args: Prisma.history_typeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$history_typePayload>[]
          }
          create: {
            args: Prisma.history_typeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$history_typePayload>
          }
          createMany: {
            args: Prisma.history_typeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.history_typeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$history_typePayload>
          }
          update: {
            args: Prisma.history_typeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$history_typePayload>
          }
          deleteMany: {
            args: Prisma.history_typeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.history_typeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.history_typeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$history_typePayload>
          }
          aggregate: {
            args: Prisma.History_typeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHistory_type>
          }
          groupBy: {
            args: Prisma.history_typeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<History_typeGroupByOutputType>[]
          }
          count: {
            args: Prisma.history_typeCountArgs<ExtArgs>,
            result: $Utils.Optional<History_typeCountAggregateOutputType> | number
          }
        }
      }
      phrase: {
        payload: Prisma.$phrasePayload<ExtArgs>
        fields: Prisma.phraseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.phraseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$phrasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.phraseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$phrasePayload>
          }
          findFirst: {
            args: Prisma.phraseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$phrasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.phraseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$phrasePayload>
          }
          findMany: {
            args: Prisma.phraseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$phrasePayload>[]
          }
          create: {
            args: Prisma.phraseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$phrasePayload>
          }
          createMany: {
            args: Prisma.phraseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.phraseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$phrasePayload>
          }
          update: {
            args: Prisma.phraseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$phrasePayload>
          }
          deleteMany: {
            args: Prisma.phraseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.phraseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.phraseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$phrasePayload>
          }
          aggregate: {
            args: Prisma.PhraseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePhrase>
          }
          groupBy: {
            args: Prisma.phraseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PhraseGroupByOutputType>[]
          }
          count: {
            args: Prisma.phraseCountArgs<ExtArgs>,
            result: $Utils.Optional<PhraseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AuthorCountOutputType
   */

  export type AuthorCountOutputType = {
    author_relation_author_relation_author_idToauthor: number
    author_relation_author_relation_author_relationed_idToauthor: number
    phrase: number
  }

  export type AuthorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author_relation_author_relation_author_idToauthor?: boolean | AuthorCountOutputTypeCountAuthor_relation_author_relation_author_idToauthorArgs
    author_relation_author_relation_author_relationed_idToauthor?: boolean | AuthorCountOutputTypeCountAuthor_relation_author_relation_author_relationed_idToauthorArgs
    phrase?: boolean | AuthorCountOutputTypeCountPhraseArgs
  }

  // Custom InputTypes

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountAuthor_relation_author_relation_author_idToauthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: author_relationWhereInput
  }


  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountAuthor_relation_author_relation_author_relationed_idToauthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: author_relationWhereInput
  }


  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountPhraseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: phraseWhereInput
  }



  /**
   * Count Type History_typeCountOutputType
   */

  export type History_typeCountOutputType = {
    author_relation: number
  }

  export type History_typeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author_relation?: boolean | History_typeCountOutputTypeCountAuthor_relationArgs
  }

  // Custom InputTypes

  /**
   * History_typeCountOutputType without action
   */
  export type History_typeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History_typeCountOutputType
     */
    select?: History_typeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * History_typeCountOutputType without action
   */
  export type History_typeCountOutputTypeCountAuthor_relationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: author_relationWhereInput
  }



  /**
   * Models
   */

  /**
   * Model author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorAvgAggregateOutputType = {
    id: number | null
  }

  export type AuthorSumAggregateOutputType = {
    id: number | null
  }

  export type AuthorMinAggregateOutputType = {
    id: number | null
    name: string | null
    last_name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AuthorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    last_name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AuthorCountAggregateOutputType = {
    id: number
    name: number
    last_name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AuthorAvgAggregateInputType = {
    id?: true
  }

  export type AuthorSumAggregateInputType = {
    id?: true
  }

  export type AuthorMinAggregateInputType = {
    id?: true
    name?: true
    last_name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type AuthorMaxAggregateInputType = {
    id?: true
    name?: true
    last_name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type AuthorCountAggregateInputType = {
    id?: true
    name?: true
    last_name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which author to aggregate.
     */
    where?: authorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type authorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authorWhereInput
    orderBy?: authorOrderByWithAggregationInput | authorOrderByWithAggregationInput[]
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum
    having?: authorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _avg?: AuthorAvgAggregateInputType
    _sum?: AuthorSumAggregateInputType
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }

  export type AuthorGroupByOutputType = {
    id: number
    name: string
    last_name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends authorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type authorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    last_name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    author_relation_author_relation_author_idToauthor?: boolean | author$author_relation_author_relation_author_idToauthorArgs<ExtArgs>
    author_relation_author_relation_author_relationed_idToauthor?: boolean | author$author_relation_author_relation_author_relationed_idToauthorArgs<ExtArgs>
    phrase?: boolean | author$phraseArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type authorSelectScalar = {
    id?: boolean
    name?: boolean
    last_name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type authorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author_relation_author_relation_author_idToauthor?: boolean | author$author_relation_author_relation_author_idToauthorArgs<ExtArgs>
    author_relation_author_relation_author_relationed_idToauthor?: boolean | author$author_relation_author_relation_author_relationed_idToauthorArgs<ExtArgs>
    phrase?: boolean | author$phraseArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $authorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "author"
    objects: {
      author_relation_author_relation_author_idToauthor: Prisma.$author_relationPayload<ExtArgs>[]
      author_relation_author_relation_author_relationed_idToauthor: Prisma.$author_relationPayload<ExtArgs>[]
      phrase: Prisma.$phrasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      last_name: string | null
      description: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["author"]>
    composites: {}
  }


  type authorGetPayload<S extends boolean | null | undefined | authorDefaultArgs> = $Result.GetResult<Prisma.$authorPayload, S>

  type authorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<authorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuthorCountAggregateInputType | true
    }

  export interface authorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['author'], meta: { name: 'author' } }
    /**
     * Find zero or one Author that matches the filter.
     * @param {authorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends authorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, authorFindUniqueArgs<ExtArgs>>
    ): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Author that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {authorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends authorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, authorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends authorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, authorFindFirstArgs<ExtArgs>>
    ): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends authorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, authorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends authorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, authorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Author.
     * @param {authorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
    **/
    create<T extends authorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, authorCreateArgs<ExtArgs>>
    ): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Authors.
     *     @param {authorCreateManyArgs} args - Arguments to create many Authors.
     *     @example
     *     // Create many Authors
     *     const author = await prisma.author.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends authorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, authorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Author.
     * @param {authorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
    **/
    delete<T extends authorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, authorDeleteArgs<ExtArgs>>
    ): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Author.
     * @param {authorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends authorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, authorUpdateArgs<ExtArgs>>
    ): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Authors.
     * @param {authorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends authorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, authorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends authorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, authorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Author.
     * @param {authorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
    **/
    upsert<T extends authorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, authorUpsertArgs<ExtArgs>>
    ): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends authorCountArgs>(
      args?: Subset<T, authorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): Prisma.PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends authorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authorGroupByArgs['orderBy'] }
        : { orderBy?: authorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, authorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the author model
   */
  readonly fields: authorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author_relation_author_relation_author_idToauthor<T extends author$author_relation_author_relation_author_idToauthorArgs<ExtArgs> = {}>(args?: Subset<T, author$author_relation_author_relation_author_idToauthorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$author_relationPayload<ExtArgs>, T, 'findMany'> | Null>;

    author_relation_author_relation_author_relationed_idToauthor<T extends author$author_relation_author_relation_author_relationed_idToauthorArgs<ExtArgs> = {}>(args?: Subset<T, author$author_relation_author_relation_author_relationed_idToauthorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$author_relationPayload<ExtArgs>, T, 'findMany'> | Null>;

    phrase<T extends author$phraseArgs<ExtArgs> = {}>(args?: Subset<T, author$phraseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$phrasePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the author model
   */ 
  interface authorFieldRefs {
    readonly id: FieldRef<"author", 'Int'>
    readonly name: FieldRef<"author", 'String'>
    readonly last_name: FieldRef<"author", 'String'>
    readonly description: FieldRef<"author", 'String'>
    readonly created_at: FieldRef<"author", 'DateTime'>
    readonly updated_at: FieldRef<"author", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * author findUnique
   */
  export type authorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which author to fetch.
     */
    where: authorWhereUniqueInput
  }


  /**
   * author findUniqueOrThrow
   */
  export type authorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which author to fetch.
     */
    where: authorWhereUniqueInput
  }


  /**
   * author findFirst
   */
  export type authorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which author to fetch.
     */
    where?: authorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authors.
     */
    cursor?: authorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }


  /**
   * author findFirstOrThrow
   */
  export type authorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which author to fetch.
     */
    where?: authorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authors.
     */
    cursor?: authorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }


  /**
   * author findMany
   */
  export type authorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which authors to fetch.
     */
    where?: authorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authors.
     */
    cursor?: authorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }


  /**
   * author create
   */
  export type authorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * The data needed to create a author.
     */
    data: XOR<authorCreateInput, authorUncheckedCreateInput>
  }


  /**
   * author createMany
   */
  export type authorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authors.
     */
    data: authorCreateManyInput | authorCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * author update
   */
  export type authorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * The data needed to update a author.
     */
    data: XOR<authorUpdateInput, authorUncheckedUpdateInput>
    /**
     * Choose, which author to update.
     */
    where: authorWhereUniqueInput
  }


  /**
   * author updateMany
   */
  export type authorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authors.
     */
    data: XOR<authorUpdateManyMutationInput, authorUncheckedUpdateManyInput>
    /**
     * Filter which authors to update
     */
    where?: authorWhereInput
  }


  /**
   * author upsert
   */
  export type authorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * The filter to search for the author to update in case it exists.
     */
    where: authorWhereUniqueInput
    /**
     * In case the author found by the `where` argument doesn't exist, create a new author with this data.
     */
    create: XOR<authorCreateInput, authorUncheckedCreateInput>
    /**
     * In case the author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authorUpdateInput, authorUncheckedUpdateInput>
  }


  /**
   * author delete
   */
  export type authorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter which author to delete.
     */
    where: authorWhereUniqueInput
  }


  /**
   * author deleteMany
   */
  export type authorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authors to delete
     */
    where?: authorWhereInput
  }


  /**
   * author.author_relation_author_relation_author_idToauthor
   */
  export type author$author_relation_author_relation_author_idToauthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_relation
     */
    select?: author_relationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: author_relationInclude<ExtArgs> | null
    where?: author_relationWhereInput
    orderBy?: author_relationOrderByWithRelationInput | author_relationOrderByWithRelationInput[]
    cursor?: author_relationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Author_relationScalarFieldEnum | Author_relationScalarFieldEnum[]
  }


  /**
   * author.author_relation_author_relation_author_relationed_idToauthor
   */
  export type author$author_relation_author_relation_author_relationed_idToauthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_relation
     */
    select?: author_relationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: author_relationInclude<ExtArgs> | null
    where?: author_relationWhereInput
    orderBy?: author_relationOrderByWithRelationInput | author_relationOrderByWithRelationInput[]
    cursor?: author_relationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Author_relationScalarFieldEnum | Author_relationScalarFieldEnum[]
  }


  /**
   * author.phrase
   */
  export type author$phraseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phrase
     */
    select?: phraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: phraseInclude<ExtArgs> | null
    where?: phraseWhereInput
    orderBy?: phraseOrderByWithRelationInput | phraseOrderByWithRelationInput[]
    cursor?: phraseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhraseScalarFieldEnum | PhraseScalarFieldEnum[]
  }


  /**
   * author without action
   */
  export type authorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: authorInclude<ExtArgs> | null
  }



  /**
   * Model author_relation
   */

  export type AggregateAuthor_relation = {
    _count: Author_relationCountAggregateOutputType | null
    _avg: Author_relationAvgAggregateOutputType | null
    _sum: Author_relationSumAggregateOutputType | null
    _min: Author_relationMinAggregateOutputType | null
    _max: Author_relationMaxAggregateOutputType | null
  }

  export type Author_relationAvgAggregateOutputType = {
    id: number | null
    author_id: number | null
    author_relationed_id: number | null
    history_type_id: number | null
  }

  export type Author_relationSumAggregateOutputType = {
    id: number | null
    author_id: number | null
    author_relationed_id: number | null
    history_type_id: number | null
  }

  export type Author_relationMinAggregateOutputType = {
    id: number | null
    name_relation: string | null
    type_relation: string | null
    created_at: Date | null
    updated_at: Date | null
    author_id: number | null
    author_relationed_id: number | null
    history_type_id: number | null
  }

  export type Author_relationMaxAggregateOutputType = {
    id: number | null
    name_relation: string | null
    type_relation: string | null
    created_at: Date | null
    updated_at: Date | null
    author_id: number | null
    author_relationed_id: number | null
    history_type_id: number | null
  }

  export type Author_relationCountAggregateOutputType = {
    id: number
    name_relation: number
    type_relation: number
    created_at: number
    updated_at: number
    author_id: number
    author_relationed_id: number
    history_type_id: number
    _all: number
  }


  export type Author_relationAvgAggregateInputType = {
    id?: true
    author_id?: true
    author_relationed_id?: true
    history_type_id?: true
  }

  export type Author_relationSumAggregateInputType = {
    id?: true
    author_id?: true
    author_relationed_id?: true
    history_type_id?: true
  }

  export type Author_relationMinAggregateInputType = {
    id?: true
    name_relation?: true
    type_relation?: true
    created_at?: true
    updated_at?: true
    author_id?: true
    author_relationed_id?: true
    history_type_id?: true
  }

  export type Author_relationMaxAggregateInputType = {
    id?: true
    name_relation?: true
    type_relation?: true
    created_at?: true
    updated_at?: true
    author_id?: true
    author_relationed_id?: true
    history_type_id?: true
  }

  export type Author_relationCountAggregateInputType = {
    id?: true
    name_relation?: true
    type_relation?: true
    created_at?: true
    updated_at?: true
    author_id?: true
    author_relationed_id?: true
    history_type_id?: true
    _all?: true
  }

  export type Author_relationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which author_relation to aggregate.
     */
    where?: author_relationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of author_relations to fetch.
     */
    orderBy?: author_relationOrderByWithRelationInput | author_relationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: author_relationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` author_relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` author_relations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned author_relations
    **/
    _count?: true | Author_relationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Author_relationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Author_relationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Author_relationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Author_relationMaxAggregateInputType
  }

  export type GetAuthor_relationAggregateType<T extends Author_relationAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor_relation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor_relation[P]>
      : GetScalarType<T[P], AggregateAuthor_relation[P]>
  }




  export type author_relationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: author_relationWhereInput
    orderBy?: author_relationOrderByWithAggregationInput | author_relationOrderByWithAggregationInput[]
    by: Author_relationScalarFieldEnum[] | Author_relationScalarFieldEnum
    having?: author_relationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Author_relationCountAggregateInputType | true
    _avg?: Author_relationAvgAggregateInputType
    _sum?: Author_relationSumAggregateInputType
    _min?: Author_relationMinAggregateInputType
    _max?: Author_relationMaxAggregateInputType
  }

  export type Author_relationGroupByOutputType = {
    id: number
    name_relation: string
    type_relation: string
    created_at: Date | null
    updated_at: Date | null
    author_id: number
    author_relationed_id: number
    history_type_id: number
    _count: Author_relationCountAggregateOutputType | null
    _avg: Author_relationAvgAggregateOutputType | null
    _sum: Author_relationSumAggregateOutputType | null
    _min: Author_relationMinAggregateOutputType | null
    _max: Author_relationMaxAggregateOutputType | null
  }

  type GetAuthor_relationGroupByPayload<T extends author_relationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Author_relationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Author_relationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Author_relationGroupByOutputType[P]>
            : GetScalarType<T[P], Author_relationGroupByOutputType[P]>
        }
      >
    >


  export type author_relationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_relation?: boolean
    type_relation?: boolean
    created_at?: boolean
    updated_at?: boolean
    author_id?: boolean
    author_relationed_id?: boolean
    history_type_id?: boolean
    author_author_relation_author_idToauthor?: boolean | authorDefaultArgs<ExtArgs>
    author_author_relation_author_relationed_idToauthor?: boolean | authorDefaultArgs<ExtArgs>
    history_type?: boolean | history_typeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author_relation"]>

  export type author_relationSelectScalar = {
    id?: boolean
    name_relation?: boolean
    type_relation?: boolean
    created_at?: boolean
    updated_at?: boolean
    author_id?: boolean
    author_relationed_id?: boolean
    history_type_id?: boolean
  }

  export type author_relationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author_author_relation_author_idToauthor?: boolean | authorDefaultArgs<ExtArgs>
    author_author_relation_author_relationed_idToauthor?: boolean | authorDefaultArgs<ExtArgs>
    history_type?: boolean | history_typeDefaultArgs<ExtArgs>
  }


  export type $author_relationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "author_relation"
    objects: {
      author_author_relation_author_idToauthor: Prisma.$authorPayload<ExtArgs>
      author_author_relation_author_relationed_idToauthor: Prisma.$authorPayload<ExtArgs>
      history_type: Prisma.$history_typePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name_relation: string
      type_relation: string
      created_at: Date | null
      updated_at: Date | null
      author_id: number
      author_relationed_id: number
      history_type_id: number
    }, ExtArgs["result"]["author_relation"]>
    composites: {}
  }


  type author_relationGetPayload<S extends boolean | null | undefined | author_relationDefaultArgs> = $Result.GetResult<Prisma.$author_relationPayload, S>

  type author_relationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<author_relationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Author_relationCountAggregateInputType | true
    }

  export interface author_relationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['author_relation'], meta: { name: 'author_relation' } }
    /**
     * Find zero or one Author_relation that matches the filter.
     * @param {author_relationFindUniqueArgs} args - Arguments to find a Author_relation
     * @example
     * // Get one Author_relation
     * const author_relation = await prisma.author_relation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends author_relationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, author_relationFindUniqueArgs<ExtArgs>>
    ): Prisma__author_relationClient<$Result.GetResult<Prisma.$author_relationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Author_relation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {author_relationFindUniqueOrThrowArgs} args - Arguments to find a Author_relation
     * @example
     * // Get one Author_relation
     * const author_relation = await prisma.author_relation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends author_relationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, author_relationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__author_relationClient<$Result.GetResult<Prisma.$author_relationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Author_relation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {author_relationFindFirstArgs} args - Arguments to find a Author_relation
     * @example
     * // Get one Author_relation
     * const author_relation = await prisma.author_relation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends author_relationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, author_relationFindFirstArgs<ExtArgs>>
    ): Prisma__author_relationClient<$Result.GetResult<Prisma.$author_relationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Author_relation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {author_relationFindFirstOrThrowArgs} args - Arguments to find a Author_relation
     * @example
     * // Get one Author_relation
     * const author_relation = await prisma.author_relation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends author_relationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, author_relationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__author_relationClient<$Result.GetResult<Prisma.$author_relationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Author_relations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {author_relationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Author_relations
     * const author_relations = await prisma.author_relation.findMany()
     * 
     * // Get first 10 Author_relations
     * const author_relations = await prisma.author_relation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const author_relationWithIdOnly = await prisma.author_relation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends author_relationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, author_relationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$author_relationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Author_relation.
     * @param {author_relationCreateArgs} args - Arguments to create a Author_relation.
     * @example
     * // Create one Author_relation
     * const Author_relation = await prisma.author_relation.create({
     *   data: {
     *     // ... data to create a Author_relation
     *   }
     * })
     * 
    **/
    create<T extends author_relationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, author_relationCreateArgs<ExtArgs>>
    ): Prisma__author_relationClient<$Result.GetResult<Prisma.$author_relationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Author_relations.
     *     @param {author_relationCreateManyArgs} args - Arguments to create many Author_relations.
     *     @example
     *     // Create many Author_relations
     *     const author_relation = await prisma.author_relation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends author_relationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, author_relationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Author_relation.
     * @param {author_relationDeleteArgs} args - Arguments to delete one Author_relation.
     * @example
     * // Delete one Author_relation
     * const Author_relation = await prisma.author_relation.delete({
     *   where: {
     *     // ... filter to delete one Author_relation
     *   }
     * })
     * 
    **/
    delete<T extends author_relationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, author_relationDeleteArgs<ExtArgs>>
    ): Prisma__author_relationClient<$Result.GetResult<Prisma.$author_relationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Author_relation.
     * @param {author_relationUpdateArgs} args - Arguments to update one Author_relation.
     * @example
     * // Update one Author_relation
     * const author_relation = await prisma.author_relation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends author_relationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, author_relationUpdateArgs<ExtArgs>>
    ): Prisma__author_relationClient<$Result.GetResult<Prisma.$author_relationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Author_relations.
     * @param {author_relationDeleteManyArgs} args - Arguments to filter Author_relations to delete.
     * @example
     * // Delete a few Author_relations
     * const { count } = await prisma.author_relation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends author_relationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, author_relationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Author_relations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {author_relationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Author_relations
     * const author_relation = await prisma.author_relation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends author_relationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, author_relationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Author_relation.
     * @param {author_relationUpsertArgs} args - Arguments to update or create a Author_relation.
     * @example
     * // Update or create a Author_relation
     * const author_relation = await prisma.author_relation.upsert({
     *   create: {
     *     // ... data to create a Author_relation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author_relation we want to update
     *   }
     * })
    **/
    upsert<T extends author_relationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, author_relationUpsertArgs<ExtArgs>>
    ): Prisma__author_relationClient<$Result.GetResult<Prisma.$author_relationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Author_relations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {author_relationCountArgs} args - Arguments to filter Author_relations to count.
     * @example
     * // Count the number of Author_relations
     * const count = await prisma.author_relation.count({
     *   where: {
     *     // ... the filter for the Author_relations we want to count
     *   }
     * })
    **/
    count<T extends author_relationCountArgs>(
      args?: Subset<T, author_relationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Author_relationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author_relation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Author_relationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Author_relationAggregateArgs>(args: Subset<T, Author_relationAggregateArgs>): Prisma.PrismaPromise<GetAuthor_relationAggregateType<T>>

    /**
     * Group by Author_relation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {author_relationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends author_relationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: author_relationGroupByArgs['orderBy'] }
        : { orderBy?: author_relationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, author_relationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthor_relationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the author_relation model
   */
  readonly fields: author_relationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for author_relation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__author_relationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author_author_relation_author_idToauthor<T extends authorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, authorDefaultArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    author_author_relation_author_relationed_idToauthor<T extends authorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, authorDefaultArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    history_type<T extends history_typeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, history_typeDefaultArgs<ExtArgs>>): Prisma__history_typeClient<$Result.GetResult<Prisma.$history_typePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the author_relation model
   */ 
  interface author_relationFieldRefs {
    readonly id: FieldRef<"author_relation", 'Int'>
    readonly name_relation: FieldRef<"author_relation", 'String'>
    readonly type_relation: FieldRef<"author_relation", 'String'>
    readonly created_at: FieldRef<"author_relation", 'DateTime'>
    readonly updated_at: FieldRef<"author_relation", 'DateTime'>
    readonly author_id: FieldRef<"author_relation", 'Int'>
    readonly author_relationed_id: FieldRef<"author_relation", 'Int'>
    readonly history_type_id: FieldRef<"author_relation", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * author_relation findUnique
   */
  export type author_relationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_relation
     */
    select?: author_relationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: author_relationInclude<ExtArgs> | null
    /**
     * Filter, which author_relation to fetch.
     */
    where: author_relationWhereUniqueInput
  }


  /**
   * author_relation findUniqueOrThrow
   */
  export type author_relationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_relation
     */
    select?: author_relationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: author_relationInclude<ExtArgs> | null
    /**
     * Filter, which author_relation to fetch.
     */
    where: author_relationWhereUniqueInput
  }


  /**
   * author_relation findFirst
   */
  export type author_relationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_relation
     */
    select?: author_relationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: author_relationInclude<ExtArgs> | null
    /**
     * Filter, which author_relation to fetch.
     */
    where?: author_relationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of author_relations to fetch.
     */
    orderBy?: author_relationOrderByWithRelationInput | author_relationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for author_relations.
     */
    cursor?: author_relationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` author_relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` author_relations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of author_relations.
     */
    distinct?: Author_relationScalarFieldEnum | Author_relationScalarFieldEnum[]
  }


  /**
   * author_relation findFirstOrThrow
   */
  export type author_relationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_relation
     */
    select?: author_relationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: author_relationInclude<ExtArgs> | null
    /**
     * Filter, which author_relation to fetch.
     */
    where?: author_relationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of author_relations to fetch.
     */
    orderBy?: author_relationOrderByWithRelationInput | author_relationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for author_relations.
     */
    cursor?: author_relationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` author_relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` author_relations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of author_relations.
     */
    distinct?: Author_relationScalarFieldEnum | Author_relationScalarFieldEnum[]
  }


  /**
   * author_relation findMany
   */
  export type author_relationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_relation
     */
    select?: author_relationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: author_relationInclude<ExtArgs> | null
    /**
     * Filter, which author_relations to fetch.
     */
    where?: author_relationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of author_relations to fetch.
     */
    orderBy?: author_relationOrderByWithRelationInput | author_relationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing author_relations.
     */
    cursor?: author_relationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` author_relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` author_relations.
     */
    skip?: number
    distinct?: Author_relationScalarFieldEnum | Author_relationScalarFieldEnum[]
  }


  /**
   * author_relation create
   */
  export type author_relationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_relation
     */
    select?: author_relationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: author_relationInclude<ExtArgs> | null
    /**
     * The data needed to create a author_relation.
     */
    data: XOR<author_relationCreateInput, author_relationUncheckedCreateInput>
  }


  /**
   * author_relation createMany
   */
  export type author_relationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many author_relations.
     */
    data: author_relationCreateManyInput | author_relationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * author_relation update
   */
  export type author_relationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_relation
     */
    select?: author_relationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: author_relationInclude<ExtArgs> | null
    /**
     * The data needed to update a author_relation.
     */
    data: XOR<author_relationUpdateInput, author_relationUncheckedUpdateInput>
    /**
     * Choose, which author_relation to update.
     */
    where: author_relationWhereUniqueInput
  }


  /**
   * author_relation updateMany
   */
  export type author_relationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update author_relations.
     */
    data: XOR<author_relationUpdateManyMutationInput, author_relationUncheckedUpdateManyInput>
    /**
     * Filter which author_relations to update
     */
    where?: author_relationWhereInput
  }


  /**
   * author_relation upsert
   */
  export type author_relationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_relation
     */
    select?: author_relationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: author_relationInclude<ExtArgs> | null
    /**
     * The filter to search for the author_relation to update in case it exists.
     */
    where: author_relationWhereUniqueInput
    /**
     * In case the author_relation found by the `where` argument doesn't exist, create a new author_relation with this data.
     */
    create: XOR<author_relationCreateInput, author_relationUncheckedCreateInput>
    /**
     * In case the author_relation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<author_relationUpdateInput, author_relationUncheckedUpdateInput>
  }


  /**
   * author_relation delete
   */
  export type author_relationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_relation
     */
    select?: author_relationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: author_relationInclude<ExtArgs> | null
    /**
     * Filter which author_relation to delete.
     */
    where: author_relationWhereUniqueInput
  }


  /**
   * author_relation deleteMany
   */
  export type author_relationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which author_relations to delete
     */
    where?: author_relationWhereInput
  }


  /**
   * author_relation without action
   */
  export type author_relationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_relation
     */
    select?: author_relationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: author_relationInclude<ExtArgs> | null
  }



  /**
   * Model history_type
   */

  export type AggregateHistory_type = {
    _count: History_typeCountAggregateOutputType | null
    _avg: History_typeAvgAggregateOutputType | null
    _sum: History_typeSumAggregateOutputType | null
    _min: History_typeMinAggregateOutputType | null
    _max: History_typeMaxAggregateOutputType | null
  }

  export type History_typeAvgAggregateOutputType = {
    id: number | null
  }

  export type History_typeSumAggregateOutputType = {
    id: number | null
  }

  export type History_typeMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type History_typeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type History_typeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type History_typeAvgAggregateInputType = {
    id?: true
  }

  export type History_typeSumAggregateInputType = {
    id?: true
  }

  export type History_typeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type History_typeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type History_typeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type History_typeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which history_type to aggregate.
     */
    where?: history_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of history_types to fetch.
     */
    orderBy?: history_typeOrderByWithRelationInput | history_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: history_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` history_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` history_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned history_types
    **/
    _count?: true | History_typeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: History_typeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: History_typeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: History_typeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: History_typeMaxAggregateInputType
  }

  export type GetHistory_typeAggregateType<T extends History_typeAggregateArgs> = {
        [P in keyof T & keyof AggregateHistory_type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistory_type[P]>
      : GetScalarType<T[P], AggregateHistory_type[P]>
  }




  export type history_typeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: history_typeWhereInput
    orderBy?: history_typeOrderByWithAggregationInput | history_typeOrderByWithAggregationInput[]
    by: History_typeScalarFieldEnum[] | History_typeScalarFieldEnum
    having?: history_typeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: History_typeCountAggregateInputType | true
    _avg?: History_typeAvgAggregateInputType
    _sum?: History_typeSumAggregateInputType
    _min?: History_typeMinAggregateInputType
    _max?: History_typeMaxAggregateInputType
  }

  export type History_typeGroupByOutputType = {
    id: number
    name: string
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: History_typeCountAggregateOutputType | null
    _avg: History_typeAvgAggregateOutputType | null
    _sum: History_typeSumAggregateOutputType | null
    _min: History_typeMinAggregateOutputType | null
    _max: History_typeMaxAggregateOutputType | null
  }

  type GetHistory_typeGroupByPayload<T extends history_typeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<History_typeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof History_typeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], History_typeGroupByOutputType[P]>
            : GetScalarType<T[P], History_typeGroupByOutputType[P]>
        }
      >
    >


  export type history_typeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    author_relation?: boolean | history_type$author_relationArgs<ExtArgs>
    _count?: boolean | History_typeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["history_type"]>

  export type history_typeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type history_typeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author_relation?: boolean | history_type$author_relationArgs<ExtArgs>
    _count?: boolean | History_typeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $history_typePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "history_type"
    objects: {
      author_relation: Prisma.$author_relationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["history_type"]>
    composites: {}
  }


  type history_typeGetPayload<S extends boolean | null | undefined | history_typeDefaultArgs> = $Result.GetResult<Prisma.$history_typePayload, S>

  type history_typeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<history_typeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: History_typeCountAggregateInputType | true
    }

  export interface history_typeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['history_type'], meta: { name: 'history_type' } }
    /**
     * Find zero or one History_type that matches the filter.
     * @param {history_typeFindUniqueArgs} args - Arguments to find a History_type
     * @example
     * // Get one History_type
     * const history_type = await prisma.history_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends history_typeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, history_typeFindUniqueArgs<ExtArgs>>
    ): Prisma__history_typeClient<$Result.GetResult<Prisma.$history_typePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one History_type that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {history_typeFindUniqueOrThrowArgs} args - Arguments to find a History_type
     * @example
     * // Get one History_type
     * const history_type = await prisma.history_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends history_typeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, history_typeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__history_typeClient<$Result.GetResult<Prisma.$history_typePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first History_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {history_typeFindFirstArgs} args - Arguments to find a History_type
     * @example
     * // Get one History_type
     * const history_type = await prisma.history_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends history_typeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, history_typeFindFirstArgs<ExtArgs>>
    ): Prisma__history_typeClient<$Result.GetResult<Prisma.$history_typePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first History_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {history_typeFindFirstOrThrowArgs} args - Arguments to find a History_type
     * @example
     * // Get one History_type
     * const history_type = await prisma.history_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends history_typeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, history_typeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__history_typeClient<$Result.GetResult<Prisma.$history_typePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more History_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {history_typeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all History_types
     * const history_types = await prisma.history_type.findMany()
     * 
     * // Get first 10 History_types
     * const history_types = await prisma.history_type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const history_typeWithIdOnly = await prisma.history_type.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends history_typeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, history_typeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$history_typePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a History_type.
     * @param {history_typeCreateArgs} args - Arguments to create a History_type.
     * @example
     * // Create one History_type
     * const History_type = await prisma.history_type.create({
     *   data: {
     *     // ... data to create a History_type
     *   }
     * })
     * 
    **/
    create<T extends history_typeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, history_typeCreateArgs<ExtArgs>>
    ): Prisma__history_typeClient<$Result.GetResult<Prisma.$history_typePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many History_types.
     *     @param {history_typeCreateManyArgs} args - Arguments to create many History_types.
     *     @example
     *     // Create many History_types
     *     const history_type = await prisma.history_type.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends history_typeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, history_typeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a History_type.
     * @param {history_typeDeleteArgs} args - Arguments to delete one History_type.
     * @example
     * // Delete one History_type
     * const History_type = await prisma.history_type.delete({
     *   where: {
     *     // ... filter to delete one History_type
     *   }
     * })
     * 
    **/
    delete<T extends history_typeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, history_typeDeleteArgs<ExtArgs>>
    ): Prisma__history_typeClient<$Result.GetResult<Prisma.$history_typePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one History_type.
     * @param {history_typeUpdateArgs} args - Arguments to update one History_type.
     * @example
     * // Update one History_type
     * const history_type = await prisma.history_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends history_typeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, history_typeUpdateArgs<ExtArgs>>
    ): Prisma__history_typeClient<$Result.GetResult<Prisma.$history_typePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more History_types.
     * @param {history_typeDeleteManyArgs} args - Arguments to filter History_types to delete.
     * @example
     * // Delete a few History_types
     * const { count } = await prisma.history_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends history_typeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, history_typeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more History_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {history_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many History_types
     * const history_type = await prisma.history_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends history_typeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, history_typeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one History_type.
     * @param {history_typeUpsertArgs} args - Arguments to update or create a History_type.
     * @example
     * // Update or create a History_type
     * const history_type = await prisma.history_type.upsert({
     *   create: {
     *     // ... data to create a History_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the History_type we want to update
     *   }
     * })
    **/
    upsert<T extends history_typeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, history_typeUpsertArgs<ExtArgs>>
    ): Prisma__history_typeClient<$Result.GetResult<Prisma.$history_typePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of History_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {history_typeCountArgs} args - Arguments to filter History_types to count.
     * @example
     * // Count the number of History_types
     * const count = await prisma.history_type.count({
     *   where: {
     *     // ... the filter for the History_types we want to count
     *   }
     * })
    **/
    count<T extends history_typeCountArgs>(
      args?: Subset<T, history_typeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], History_typeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a History_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {History_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends History_typeAggregateArgs>(args: Subset<T, History_typeAggregateArgs>): Prisma.PrismaPromise<GetHistory_typeAggregateType<T>>

    /**
     * Group by History_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {history_typeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends history_typeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: history_typeGroupByArgs['orderBy'] }
        : { orderBy?: history_typeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, history_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistory_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the history_type model
   */
  readonly fields: history_typeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for history_type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__history_typeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author_relation<T extends history_type$author_relationArgs<ExtArgs> = {}>(args?: Subset<T, history_type$author_relationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$author_relationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the history_type model
   */ 
  interface history_typeFieldRefs {
    readonly id: FieldRef<"history_type", 'Int'>
    readonly name: FieldRef<"history_type", 'String'>
    readonly description: FieldRef<"history_type", 'String'>
    readonly created_at: FieldRef<"history_type", 'DateTime'>
    readonly updated_at: FieldRef<"history_type", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * history_type findUnique
   */
  export type history_typeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history_type
     */
    select?: history_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: history_typeInclude<ExtArgs> | null
    /**
     * Filter, which history_type to fetch.
     */
    where: history_typeWhereUniqueInput
  }


  /**
   * history_type findUniqueOrThrow
   */
  export type history_typeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history_type
     */
    select?: history_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: history_typeInclude<ExtArgs> | null
    /**
     * Filter, which history_type to fetch.
     */
    where: history_typeWhereUniqueInput
  }


  /**
   * history_type findFirst
   */
  export type history_typeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history_type
     */
    select?: history_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: history_typeInclude<ExtArgs> | null
    /**
     * Filter, which history_type to fetch.
     */
    where?: history_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of history_types to fetch.
     */
    orderBy?: history_typeOrderByWithRelationInput | history_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for history_types.
     */
    cursor?: history_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` history_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` history_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of history_types.
     */
    distinct?: History_typeScalarFieldEnum | History_typeScalarFieldEnum[]
  }


  /**
   * history_type findFirstOrThrow
   */
  export type history_typeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history_type
     */
    select?: history_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: history_typeInclude<ExtArgs> | null
    /**
     * Filter, which history_type to fetch.
     */
    where?: history_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of history_types to fetch.
     */
    orderBy?: history_typeOrderByWithRelationInput | history_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for history_types.
     */
    cursor?: history_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` history_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` history_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of history_types.
     */
    distinct?: History_typeScalarFieldEnum | History_typeScalarFieldEnum[]
  }


  /**
   * history_type findMany
   */
  export type history_typeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history_type
     */
    select?: history_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: history_typeInclude<ExtArgs> | null
    /**
     * Filter, which history_types to fetch.
     */
    where?: history_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of history_types to fetch.
     */
    orderBy?: history_typeOrderByWithRelationInput | history_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing history_types.
     */
    cursor?: history_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` history_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` history_types.
     */
    skip?: number
    distinct?: History_typeScalarFieldEnum | History_typeScalarFieldEnum[]
  }


  /**
   * history_type create
   */
  export type history_typeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history_type
     */
    select?: history_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: history_typeInclude<ExtArgs> | null
    /**
     * The data needed to create a history_type.
     */
    data: XOR<history_typeCreateInput, history_typeUncheckedCreateInput>
  }


  /**
   * history_type createMany
   */
  export type history_typeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many history_types.
     */
    data: history_typeCreateManyInput | history_typeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * history_type update
   */
  export type history_typeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history_type
     */
    select?: history_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: history_typeInclude<ExtArgs> | null
    /**
     * The data needed to update a history_type.
     */
    data: XOR<history_typeUpdateInput, history_typeUncheckedUpdateInput>
    /**
     * Choose, which history_type to update.
     */
    where: history_typeWhereUniqueInput
  }


  /**
   * history_type updateMany
   */
  export type history_typeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update history_types.
     */
    data: XOR<history_typeUpdateManyMutationInput, history_typeUncheckedUpdateManyInput>
    /**
     * Filter which history_types to update
     */
    where?: history_typeWhereInput
  }


  /**
   * history_type upsert
   */
  export type history_typeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history_type
     */
    select?: history_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: history_typeInclude<ExtArgs> | null
    /**
     * The filter to search for the history_type to update in case it exists.
     */
    where: history_typeWhereUniqueInput
    /**
     * In case the history_type found by the `where` argument doesn't exist, create a new history_type with this data.
     */
    create: XOR<history_typeCreateInput, history_typeUncheckedCreateInput>
    /**
     * In case the history_type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<history_typeUpdateInput, history_typeUncheckedUpdateInput>
  }


  /**
   * history_type delete
   */
  export type history_typeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history_type
     */
    select?: history_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: history_typeInclude<ExtArgs> | null
    /**
     * Filter which history_type to delete.
     */
    where: history_typeWhereUniqueInput
  }


  /**
   * history_type deleteMany
   */
  export type history_typeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which history_types to delete
     */
    where?: history_typeWhereInput
  }


  /**
   * history_type.author_relation
   */
  export type history_type$author_relationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_relation
     */
    select?: author_relationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: author_relationInclude<ExtArgs> | null
    where?: author_relationWhereInput
    orderBy?: author_relationOrderByWithRelationInput | author_relationOrderByWithRelationInput[]
    cursor?: author_relationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Author_relationScalarFieldEnum | Author_relationScalarFieldEnum[]
  }


  /**
   * history_type without action
   */
  export type history_typeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history_type
     */
    select?: history_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: history_typeInclude<ExtArgs> | null
  }



  /**
   * Model phrase
   */

  export type AggregatePhrase = {
    _count: PhraseCountAggregateOutputType | null
    _avg: PhraseAvgAggregateOutputType | null
    _sum: PhraseSumAggregateOutputType | null
    _min: PhraseMinAggregateOutputType | null
    _max: PhraseMaxAggregateOutputType | null
  }

  export type PhraseAvgAggregateOutputType = {
    id: number | null
    author_id: number | null
  }

  export type PhraseSumAggregateOutputType = {
    id: number | null
    author_id: number | null
  }

  export type PhraseMinAggregateOutputType = {
    id: number | null
    phrase: string | null
    date: Date | null
    created_at: Date | null
    updated_at: Date | null
    author_id: number | null
  }

  export type PhraseMaxAggregateOutputType = {
    id: number | null
    phrase: string | null
    date: Date | null
    created_at: Date | null
    updated_at: Date | null
    author_id: number | null
  }

  export type PhraseCountAggregateOutputType = {
    id: number
    phrase: number
    date: number
    created_at: number
    updated_at: number
    author_id: number
    _all: number
  }


  export type PhraseAvgAggregateInputType = {
    id?: true
    author_id?: true
  }

  export type PhraseSumAggregateInputType = {
    id?: true
    author_id?: true
  }

  export type PhraseMinAggregateInputType = {
    id?: true
    phrase?: true
    date?: true
    created_at?: true
    updated_at?: true
    author_id?: true
  }

  export type PhraseMaxAggregateInputType = {
    id?: true
    phrase?: true
    date?: true
    created_at?: true
    updated_at?: true
    author_id?: true
  }

  export type PhraseCountAggregateInputType = {
    id?: true
    phrase?: true
    date?: true
    created_at?: true
    updated_at?: true
    author_id?: true
    _all?: true
  }

  export type PhraseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which phrase to aggregate.
     */
    where?: phraseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phrases to fetch.
     */
    orderBy?: phraseOrderByWithRelationInput | phraseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: phraseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phrases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phrases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned phrases
    **/
    _count?: true | PhraseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhraseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhraseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhraseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhraseMaxAggregateInputType
  }

  export type GetPhraseAggregateType<T extends PhraseAggregateArgs> = {
        [P in keyof T & keyof AggregatePhrase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhrase[P]>
      : GetScalarType<T[P], AggregatePhrase[P]>
  }




  export type phraseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: phraseWhereInput
    orderBy?: phraseOrderByWithAggregationInput | phraseOrderByWithAggregationInput[]
    by: PhraseScalarFieldEnum[] | PhraseScalarFieldEnum
    having?: phraseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhraseCountAggregateInputType | true
    _avg?: PhraseAvgAggregateInputType
    _sum?: PhraseSumAggregateInputType
    _min?: PhraseMinAggregateInputType
    _max?: PhraseMaxAggregateInputType
  }

  export type PhraseGroupByOutputType = {
    id: number
    phrase: string
    date: Date | null
    created_at: Date | null
    updated_at: Date | null
    author_id: number
    _count: PhraseCountAggregateOutputType | null
    _avg: PhraseAvgAggregateOutputType | null
    _sum: PhraseSumAggregateOutputType | null
    _min: PhraseMinAggregateOutputType | null
    _max: PhraseMaxAggregateOutputType | null
  }

  type GetPhraseGroupByPayload<T extends phraseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhraseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhraseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhraseGroupByOutputType[P]>
            : GetScalarType<T[P], PhraseGroupByOutputType[P]>
        }
      >
    >


  export type phraseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phrase?: boolean
    date?: boolean
    created_at?: boolean
    updated_at?: boolean
    author_id?: boolean
    author?: boolean | authorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phrase"]>

  export type phraseSelectScalar = {
    id?: boolean
    phrase?: boolean
    date?: boolean
    created_at?: boolean
    updated_at?: boolean
    author_id?: boolean
  }

  export type phraseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | authorDefaultArgs<ExtArgs>
  }


  export type $phrasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "phrase"
    objects: {
      author: Prisma.$authorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      phrase: string
      date: Date | null
      created_at: Date | null
      updated_at: Date | null
      author_id: number
    }, ExtArgs["result"]["phrase"]>
    composites: {}
  }


  type phraseGetPayload<S extends boolean | null | undefined | phraseDefaultArgs> = $Result.GetResult<Prisma.$phrasePayload, S>

  type phraseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<phraseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PhraseCountAggregateInputType | true
    }

  export interface phraseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['phrase'], meta: { name: 'phrase' } }
    /**
     * Find zero or one Phrase that matches the filter.
     * @param {phraseFindUniqueArgs} args - Arguments to find a Phrase
     * @example
     * // Get one Phrase
     * const phrase = await prisma.phrase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends phraseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, phraseFindUniqueArgs<ExtArgs>>
    ): Prisma__phraseClient<$Result.GetResult<Prisma.$phrasePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Phrase that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {phraseFindUniqueOrThrowArgs} args - Arguments to find a Phrase
     * @example
     * // Get one Phrase
     * const phrase = await prisma.phrase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends phraseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, phraseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__phraseClient<$Result.GetResult<Prisma.$phrasePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Phrase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phraseFindFirstArgs} args - Arguments to find a Phrase
     * @example
     * // Get one Phrase
     * const phrase = await prisma.phrase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends phraseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, phraseFindFirstArgs<ExtArgs>>
    ): Prisma__phraseClient<$Result.GetResult<Prisma.$phrasePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Phrase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phraseFindFirstOrThrowArgs} args - Arguments to find a Phrase
     * @example
     * // Get one Phrase
     * const phrase = await prisma.phrase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends phraseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, phraseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__phraseClient<$Result.GetResult<Prisma.$phrasePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Phrases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phraseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Phrases
     * const phrases = await prisma.phrase.findMany()
     * 
     * // Get first 10 Phrases
     * const phrases = await prisma.phrase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phraseWithIdOnly = await prisma.phrase.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends phraseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, phraseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$phrasePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Phrase.
     * @param {phraseCreateArgs} args - Arguments to create a Phrase.
     * @example
     * // Create one Phrase
     * const Phrase = await prisma.phrase.create({
     *   data: {
     *     // ... data to create a Phrase
     *   }
     * })
     * 
    **/
    create<T extends phraseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, phraseCreateArgs<ExtArgs>>
    ): Prisma__phraseClient<$Result.GetResult<Prisma.$phrasePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Phrases.
     *     @param {phraseCreateManyArgs} args - Arguments to create many Phrases.
     *     @example
     *     // Create many Phrases
     *     const phrase = await prisma.phrase.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends phraseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, phraseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Phrase.
     * @param {phraseDeleteArgs} args - Arguments to delete one Phrase.
     * @example
     * // Delete one Phrase
     * const Phrase = await prisma.phrase.delete({
     *   where: {
     *     // ... filter to delete one Phrase
     *   }
     * })
     * 
    **/
    delete<T extends phraseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, phraseDeleteArgs<ExtArgs>>
    ): Prisma__phraseClient<$Result.GetResult<Prisma.$phrasePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Phrase.
     * @param {phraseUpdateArgs} args - Arguments to update one Phrase.
     * @example
     * // Update one Phrase
     * const phrase = await prisma.phrase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends phraseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, phraseUpdateArgs<ExtArgs>>
    ): Prisma__phraseClient<$Result.GetResult<Prisma.$phrasePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Phrases.
     * @param {phraseDeleteManyArgs} args - Arguments to filter Phrases to delete.
     * @example
     * // Delete a few Phrases
     * const { count } = await prisma.phrase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends phraseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, phraseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phrases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phraseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Phrases
     * const phrase = await prisma.phrase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends phraseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, phraseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Phrase.
     * @param {phraseUpsertArgs} args - Arguments to update or create a Phrase.
     * @example
     * // Update or create a Phrase
     * const phrase = await prisma.phrase.upsert({
     *   create: {
     *     // ... data to create a Phrase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Phrase we want to update
     *   }
     * })
    **/
    upsert<T extends phraseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, phraseUpsertArgs<ExtArgs>>
    ): Prisma__phraseClient<$Result.GetResult<Prisma.$phrasePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Phrases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phraseCountArgs} args - Arguments to filter Phrases to count.
     * @example
     * // Count the number of Phrases
     * const count = await prisma.phrase.count({
     *   where: {
     *     // ... the filter for the Phrases we want to count
     *   }
     * })
    **/
    count<T extends phraseCountArgs>(
      args?: Subset<T, phraseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhraseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Phrase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhraseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhraseAggregateArgs>(args: Subset<T, PhraseAggregateArgs>): Prisma.PrismaPromise<GetPhraseAggregateType<T>>

    /**
     * Group by Phrase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phraseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends phraseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: phraseGroupByArgs['orderBy'] }
        : { orderBy?: phraseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, phraseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhraseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the phrase model
   */
  readonly fields: phraseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for phrase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__phraseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends authorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, authorDefaultArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the phrase model
   */ 
  interface phraseFieldRefs {
    readonly id: FieldRef<"phrase", 'Int'>
    readonly phrase: FieldRef<"phrase", 'String'>
    readonly date: FieldRef<"phrase", 'DateTime'>
    readonly created_at: FieldRef<"phrase", 'DateTime'>
    readonly updated_at: FieldRef<"phrase", 'DateTime'>
    readonly author_id: FieldRef<"phrase", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * phrase findUnique
   */
  export type phraseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phrase
     */
    select?: phraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: phraseInclude<ExtArgs> | null
    /**
     * Filter, which phrase to fetch.
     */
    where: phraseWhereUniqueInput
  }


  /**
   * phrase findUniqueOrThrow
   */
  export type phraseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phrase
     */
    select?: phraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: phraseInclude<ExtArgs> | null
    /**
     * Filter, which phrase to fetch.
     */
    where: phraseWhereUniqueInput
  }


  /**
   * phrase findFirst
   */
  export type phraseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phrase
     */
    select?: phraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: phraseInclude<ExtArgs> | null
    /**
     * Filter, which phrase to fetch.
     */
    where?: phraseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phrases to fetch.
     */
    orderBy?: phraseOrderByWithRelationInput | phraseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for phrases.
     */
    cursor?: phraseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phrases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phrases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of phrases.
     */
    distinct?: PhraseScalarFieldEnum | PhraseScalarFieldEnum[]
  }


  /**
   * phrase findFirstOrThrow
   */
  export type phraseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phrase
     */
    select?: phraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: phraseInclude<ExtArgs> | null
    /**
     * Filter, which phrase to fetch.
     */
    where?: phraseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phrases to fetch.
     */
    orderBy?: phraseOrderByWithRelationInput | phraseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for phrases.
     */
    cursor?: phraseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phrases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phrases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of phrases.
     */
    distinct?: PhraseScalarFieldEnum | PhraseScalarFieldEnum[]
  }


  /**
   * phrase findMany
   */
  export type phraseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phrase
     */
    select?: phraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: phraseInclude<ExtArgs> | null
    /**
     * Filter, which phrases to fetch.
     */
    where?: phraseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phrases to fetch.
     */
    orderBy?: phraseOrderByWithRelationInput | phraseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing phrases.
     */
    cursor?: phraseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phrases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phrases.
     */
    skip?: number
    distinct?: PhraseScalarFieldEnum | PhraseScalarFieldEnum[]
  }


  /**
   * phrase create
   */
  export type phraseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phrase
     */
    select?: phraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: phraseInclude<ExtArgs> | null
    /**
     * The data needed to create a phrase.
     */
    data: XOR<phraseCreateInput, phraseUncheckedCreateInput>
  }


  /**
   * phrase createMany
   */
  export type phraseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many phrases.
     */
    data: phraseCreateManyInput | phraseCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * phrase update
   */
  export type phraseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phrase
     */
    select?: phraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: phraseInclude<ExtArgs> | null
    /**
     * The data needed to update a phrase.
     */
    data: XOR<phraseUpdateInput, phraseUncheckedUpdateInput>
    /**
     * Choose, which phrase to update.
     */
    where: phraseWhereUniqueInput
  }


  /**
   * phrase updateMany
   */
  export type phraseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update phrases.
     */
    data: XOR<phraseUpdateManyMutationInput, phraseUncheckedUpdateManyInput>
    /**
     * Filter which phrases to update
     */
    where?: phraseWhereInput
  }


  /**
   * phrase upsert
   */
  export type phraseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phrase
     */
    select?: phraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: phraseInclude<ExtArgs> | null
    /**
     * The filter to search for the phrase to update in case it exists.
     */
    where: phraseWhereUniqueInput
    /**
     * In case the phrase found by the `where` argument doesn't exist, create a new phrase with this data.
     */
    create: XOR<phraseCreateInput, phraseUncheckedCreateInput>
    /**
     * In case the phrase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<phraseUpdateInput, phraseUncheckedUpdateInput>
  }


  /**
   * phrase delete
   */
  export type phraseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phrase
     */
    select?: phraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: phraseInclude<ExtArgs> | null
    /**
     * Filter which phrase to delete.
     */
    where: phraseWhereUniqueInput
  }


  /**
   * phrase deleteMany
   */
  export type phraseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which phrases to delete
     */
    where?: phraseWhereInput
  }


  /**
   * phrase without action
   */
  export type phraseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phrase
     */
    select?: phraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: phraseInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AuthorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    last_name: 'last_name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const Author_relationScalarFieldEnum: {
    id: 'id',
    name_relation: 'name_relation',
    type_relation: 'type_relation',
    created_at: 'created_at',
    updated_at: 'updated_at',
    author_id: 'author_id',
    author_relationed_id: 'author_relationed_id',
    history_type_id: 'history_type_id'
  };

  export type Author_relationScalarFieldEnum = (typeof Author_relationScalarFieldEnum)[keyof typeof Author_relationScalarFieldEnum]


  export const History_typeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type History_typeScalarFieldEnum = (typeof History_typeScalarFieldEnum)[keyof typeof History_typeScalarFieldEnum]


  export const PhraseScalarFieldEnum: {
    id: 'id',
    phrase: 'phrase',
    date: 'date',
    created_at: 'created_at',
    updated_at: 'updated_at',
    author_id: 'author_id'
  };

  export type PhraseScalarFieldEnum = (typeof PhraseScalarFieldEnum)[keyof typeof PhraseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type authorWhereInput = {
    AND?: authorWhereInput | authorWhereInput[]
    OR?: authorWhereInput[]
    NOT?: authorWhereInput | authorWhereInput[]
    id?: IntFilter<"author"> | number
    name?: StringFilter<"author"> | string
    last_name?: StringNullableFilter<"author"> | string | null
    description?: StringNullableFilter<"author"> | string | null
    created_at?: DateTimeNullableFilter<"author"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"author"> | Date | string | null
    author_relation_author_relation_author_idToauthor?: Author_relationListRelationFilter
    author_relation_author_relation_author_relationed_idToauthor?: Author_relationListRelationFilter
    phrase?: PhraseListRelationFilter
  }

  export type authorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    author_relation_author_relation_author_idToauthor?: author_relationOrderByRelationAggregateInput
    author_relation_author_relation_author_relationed_idToauthor?: author_relationOrderByRelationAggregateInput
    phrase?: phraseOrderByRelationAggregateInput
  }

  export type authorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: authorWhereInput | authorWhereInput[]
    OR?: authorWhereInput[]
    NOT?: authorWhereInput | authorWhereInput[]
    name?: StringFilter<"author"> | string
    last_name?: StringNullableFilter<"author"> | string | null
    description?: StringNullableFilter<"author"> | string | null
    created_at?: DateTimeNullableFilter<"author"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"author"> | Date | string | null
    author_relation_author_relation_author_idToauthor?: Author_relationListRelationFilter
    author_relation_author_relation_author_relationed_idToauthor?: Author_relationListRelationFilter
    phrase?: PhraseListRelationFilter
  }, "id" | "id">

  export type authorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: authorCountOrderByAggregateInput
    _avg?: authorAvgOrderByAggregateInput
    _max?: authorMaxOrderByAggregateInput
    _min?: authorMinOrderByAggregateInput
    _sum?: authorSumOrderByAggregateInput
  }

  export type authorScalarWhereWithAggregatesInput = {
    AND?: authorScalarWhereWithAggregatesInput | authorScalarWhereWithAggregatesInput[]
    OR?: authorScalarWhereWithAggregatesInput[]
    NOT?: authorScalarWhereWithAggregatesInput | authorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"author"> | number
    name?: StringWithAggregatesFilter<"author"> | string
    last_name?: StringNullableWithAggregatesFilter<"author"> | string | null
    description?: StringNullableWithAggregatesFilter<"author"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"author"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"author"> | Date | string | null
  }

  export type author_relationWhereInput = {
    AND?: author_relationWhereInput | author_relationWhereInput[]
    OR?: author_relationWhereInput[]
    NOT?: author_relationWhereInput | author_relationWhereInput[]
    id?: IntFilter<"author_relation"> | number
    name_relation?: StringFilter<"author_relation"> | string
    type_relation?: StringFilter<"author_relation"> | string
    created_at?: DateTimeNullableFilter<"author_relation"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"author_relation"> | Date | string | null
    author_id?: IntFilter<"author_relation"> | number
    author_relationed_id?: IntFilter<"author_relation"> | number
    history_type_id?: IntFilter<"author_relation"> | number
    author_author_relation_author_idToauthor?: XOR<AuthorRelationFilter, authorWhereInput>
    author_author_relation_author_relationed_idToauthor?: XOR<AuthorRelationFilter, authorWhereInput>
    history_type?: XOR<History_typeRelationFilter, history_typeWhereInput>
  }

  export type author_relationOrderByWithRelationInput = {
    id?: SortOrder
    name_relation?: SortOrder
    type_relation?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    author_id?: SortOrder
    author_relationed_id?: SortOrder
    history_type_id?: SortOrder
    author_author_relation_author_idToauthor?: authorOrderByWithRelationInput
    author_author_relation_author_relationed_idToauthor?: authorOrderByWithRelationInput
    history_type?: history_typeOrderByWithRelationInput
  }

  export type author_relationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: author_relationWhereInput | author_relationWhereInput[]
    OR?: author_relationWhereInput[]
    NOT?: author_relationWhereInput | author_relationWhereInput[]
    name_relation?: StringFilter<"author_relation"> | string
    type_relation?: StringFilter<"author_relation"> | string
    created_at?: DateTimeNullableFilter<"author_relation"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"author_relation"> | Date | string | null
    author_id?: IntFilter<"author_relation"> | number
    author_relationed_id?: IntFilter<"author_relation"> | number
    history_type_id?: IntFilter<"author_relation"> | number
    author_author_relation_author_idToauthor?: XOR<AuthorRelationFilter, authorWhereInput>
    author_author_relation_author_relationed_idToauthor?: XOR<AuthorRelationFilter, authorWhereInput>
    history_type?: XOR<History_typeRelationFilter, history_typeWhereInput>
  }, "id" | "id">

  export type author_relationOrderByWithAggregationInput = {
    id?: SortOrder
    name_relation?: SortOrder
    type_relation?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    author_id?: SortOrder
    author_relationed_id?: SortOrder
    history_type_id?: SortOrder
    _count?: author_relationCountOrderByAggregateInput
    _avg?: author_relationAvgOrderByAggregateInput
    _max?: author_relationMaxOrderByAggregateInput
    _min?: author_relationMinOrderByAggregateInput
    _sum?: author_relationSumOrderByAggregateInput
  }

  export type author_relationScalarWhereWithAggregatesInput = {
    AND?: author_relationScalarWhereWithAggregatesInput | author_relationScalarWhereWithAggregatesInput[]
    OR?: author_relationScalarWhereWithAggregatesInput[]
    NOT?: author_relationScalarWhereWithAggregatesInput | author_relationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"author_relation"> | number
    name_relation?: StringWithAggregatesFilter<"author_relation"> | string
    type_relation?: StringWithAggregatesFilter<"author_relation"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"author_relation"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"author_relation"> | Date | string | null
    author_id?: IntWithAggregatesFilter<"author_relation"> | number
    author_relationed_id?: IntWithAggregatesFilter<"author_relation"> | number
    history_type_id?: IntWithAggregatesFilter<"author_relation"> | number
  }

  export type history_typeWhereInput = {
    AND?: history_typeWhereInput | history_typeWhereInput[]
    OR?: history_typeWhereInput[]
    NOT?: history_typeWhereInput | history_typeWhereInput[]
    id?: IntFilter<"history_type"> | number
    name?: StringFilter<"history_type"> | string
    description?: StringNullableFilter<"history_type"> | string | null
    created_at?: DateTimeNullableFilter<"history_type"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"history_type"> | Date | string | null
    author_relation?: Author_relationListRelationFilter
  }

  export type history_typeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    author_relation?: author_relationOrderByRelationAggregateInput
  }

  export type history_typeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: history_typeWhereInput | history_typeWhereInput[]
    OR?: history_typeWhereInput[]
    NOT?: history_typeWhereInput | history_typeWhereInput[]
    name?: StringFilter<"history_type"> | string
    description?: StringNullableFilter<"history_type"> | string | null
    created_at?: DateTimeNullableFilter<"history_type"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"history_type"> | Date | string | null
    author_relation?: Author_relationListRelationFilter
  }, "id" | "id">

  export type history_typeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: history_typeCountOrderByAggregateInput
    _avg?: history_typeAvgOrderByAggregateInput
    _max?: history_typeMaxOrderByAggregateInput
    _min?: history_typeMinOrderByAggregateInput
    _sum?: history_typeSumOrderByAggregateInput
  }

  export type history_typeScalarWhereWithAggregatesInput = {
    AND?: history_typeScalarWhereWithAggregatesInput | history_typeScalarWhereWithAggregatesInput[]
    OR?: history_typeScalarWhereWithAggregatesInput[]
    NOT?: history_typeScalarWhereWithAggregatesInput | history_typeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"history_type"> | number
    name?: StringWithAggregatesFilter<"history_type"> | string
    description?: StringNullableWithAggregatesFilter<"history_type"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"history_type"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"history_type"> | Date | string | null
  }

  export type phraseWhereInput = {
    AND?: phraseWhereInput | phraseWhereInput[]
    OR?: phraseWhereInput[]
    NOT?: phraseWhereInput | phraseWhereInput[]
    id?: IntFilter<"phrase"> | number
    phrase?: StringFilter<"phrase"> | string
    date?: DateTimeNullableFilter<"phrase"> | Date | string | null
    created_at?: DateTimeNullableFilter<"phrase"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"phrase"> | Date | string | null
    author_id?: IntFilter<"phrase"> | number
    author?: XOR<AuthorRelationFilter, authorWhereInput>
  }

  export type phraseOrderByWithRelationInput = {
    id?: SortOrder
    phrase?: SortOrder
    date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    author_id?: SortOrder
    author?: authorOrderByWithRelationInput
  }

  export type phraseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: phraseWhereInput | phraseWhereInput[]
    OR?: phraseWhereInput[]
    NOT?: phraseWhereInput | phraseWhereInput[]
    phrase?: StringFilter<"phrase"> | string
    date?: DateTimeNullableFilter<"phrase"> | Date | string | null
    created_at?: DateTimeNullableFilter<"phrase"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"phrase"> | Date | string | null
    author_id?: IntFilter<"phrase"> | number
    author?: XOR<AuthorRelationFilter, authorWhereInput>
  }, "id" | "id">

  export type phraseOrderByWithAggregationInput = {
    id?: SortOrder
    phrase?: SortOrder
    date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    author_id?: SortOrder
    _count?: phraseCountOrderByAggregateInput
    _avg?: phraseAvgOrderByAggregateInput
    _max?: phraseMaxOrderByAggregateInput
    _min?: phraseMinOrderByAggregateInput
    _sum?: phraseSumOrderByAggregateInput
  }

  export type phraseScalarWhereWithAggregatesInput = {
    AND?: phraseScalarWhereWithAggregatesInput | phraseScalarWhereWithAggregatesInput[]
    OR?: phraseScalarWhereWithAggregatesInput[]
    NOT?: phraseScalarWhereWithAggregatesInput | phraseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"phrase"> | number
    phrase?: StringWithAggregatesFilter<"phrase"> | string
    date?: DateTimeNullableWithAggregatesFilter<"phrase"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"phrase"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"phrase"> | Date | string | null
    author_id?: IntWithAggregatesFilter<"phrase"> | number
  }

  export type authorCreateInput = {
    name: string
    last_name?: string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_relation_author_relation_author_idToauthor?: author_relationCreateNestedManyWithoutAuthor_author_relation_author_idToauthorInput
    author_relation_author_relation_author_relationed_idToauthor?: author_relationCreateNestedManyWithoutAuthor_author_relation_author_relationed_idToauthorInput
    phrase?: phraseCreateNestedManyWithoutAuthorInput
  }

  export type authorUncheckedCreateInput = {
    id?: number
    name: string
    last_name?: string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_relation_author_relation_author_idToauthor?: author_relationUncheckedCreateNestedManyWithoutAuthor_author_relation_author_idToauthorInput
    author_relation_author_relation_author_relationed_idToauthor?: author_relationUncheckedCreateNestedManyWithoutAuthor_author_relation_author_relationed_idToauthorInput
    phrase?: phraseUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type authorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_relation_author_relation_author_idToauthor?: author_relationUpdateManyWithoutAuthor_author_relation_author_idToauthorNestedInput
    author_relation_author_relation_author_relationed_idToauthor?: author_relationUpdateManyWithoutAuthor_author_relation_author_relationed_idToauthorNestedInput
    phrase?: phraseUpdateManyWithoutAuthorNestedInput
  }

  export type authorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_relation_author_relation_author_idToauthor?: author_relationUncheckedUpdateManyWithoutAuthor_author_relation_author_idToauthorNestedInput
    author_relation_author_relation_author_relationed_idToauthor?: author_relationUncheckedUpdateManyWithoutAuthor_author_relation_author_relationed_idToauthorNestedInput
    phrase?: phraseUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type authorCreateManyInput = {
    id?: number
    name: string
    last_name?: string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type authorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type authorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type author_relationCreateInput = {
    name_relation: string
    type_relation: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_author_relation_author_idToauthor: authorCreateNestedOneWithoutAuthor_relation_author_relation_author_idToauthorInput
    author_author_relation_author_relationed_idToauthor: authorCreateNestedOneWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput
    history_type: history_typeCreateNestedOneWithoutAuthor_relationInput
  }

  export type author_relationUncheckedCreateInput = {
    id?: number
    name_relation: string
    type_relation: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_id: number
    author_relationed_id: number
    history_type_id: number
  }

  export type author_relationUpdateInput = {
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_author_relation_author_idToauthor?: authorUpdateOneRequiredWithoutAuthor_relation_author_relation_author_idToauthorNestedInput
    author_author_relation_author_relationed_idToauthor?: authorUpdateOneRequiredWithoutAuthor_relation_author_relation_author_relationed_idToauthorNestedInput
    history_type?: history_typeUpdateOneRequiredWithoutAuthor_relationNestedInput
  }

  export type author_relationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_id?: IntFieldUpdateOperationsInput | number
    author_relationed_id?: IntFieldUpdateOperationsInput | number
    history_type_id?: IntFieldUpdateOperationsInput | number
  }

  export type author_relationCreateManyInput = {
    id?: number
    name_relation: string
    type_relation: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_id: number
    author_relationed_id: number
    history_type_id: number
  }

  export type author_relationUpdateManyMutationInput = {
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type author_relationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_id?: IntFieldUpdateOperationsInput | number
    author_relationed_id?: IntFieldUpdateOperationsInput | number
    history_type_id?: IntFieldUpdateOperationsInput | number
  }

  export type history_typeCreateInput = {
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_relation?: author_relationCreateNestedManyWithoutHistory_typeInput
  }

  export type history_typeUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_relation?: author_relationUncheckedCreateNestedManyWithoutHistory_typeInput
  }

  export type history_typeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_relation?: author_relationUpdateManyWithoutHistory_typeNestedInput
  }

  export type history_typeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_relation?: author_relationUncheckedUpdateManyWithoutHistory_typeNestedInput
  }

  export type history_typeCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type history_typeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type history_typeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type phraseCreateInput = {
    phrase: string
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author: authorCreateNestedOneWithoutPhraseInput
  }

  export type phraseUncheckedCreateInput = {
    id?: number
    phrase: string
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_id: number
  }

  export type phraseUpdateInput = {
    phrase?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: authorUpdateOneRequiredWithoutPhraseNestedInput
  }

  export type phraseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    phrase?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_id?: IntFieldUpdateOperationsInput | number
  }

  export type phraseCreateManyInput = {
    id?: number
    phrase: string
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_id: number
  }

  export type phraseUpdateManyMutationInput = {
    phrase?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type phraseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    phrase?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Author_relationListRelationFilter = {
    every?: author_relationWhereInput
    some?: author_relationWhereInput
    none?: author_relationWhereInput
  }

  export type PhraseListRelationFilter = {
    every?: phraseWhereInput
    some?: phraseWhereInput
    none?: phraseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type author_relationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type phraseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type authorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type authorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type authorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type authorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type authorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AuthorRelationFilter = {
    is?: authorWhereInput
    isNot?: authorWhereInput
  }

  export type History_typeRelationFilter = {
    is?: history_typeWhereInput
    isNot?: history_typeWhereInput
  }

  export type author_relationCountOrderByAggregateInput = {
    id?: SortOrder
    name_relation?: SortOrder
    type_relation?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    author_id?: SortOrder
    author_relationed_id?: SortOrder
    history_type_id?: SortOrder
  }

  export type author_relationAvgOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    author_relationed_id?: SortOrder
    history_type_id?: SortOrder
  }

  export type author_relationMaxOrderByAggregateInput = {
    id?: SortOrder
    name_relation?: SortOrder
    type_relation?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    author_id?: SortOrder
    author_relationed_id?: SortOrder
    history_type_id?: SortOrder
  }

  export type author_relationMinOrderByAggregateInput = {
    id?: SortOrder
    name_relation?: SortOrder
    type_relation?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    author_id?: SortOrder
    author_relationed_id?: SortOrder
    history_type_id?: SortOrder
  }

  export type author_relationSumOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    author_relationed_id?: SortOrder
    history_type_id?: SortOrder
  }

  export type history_typeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type history_typeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type history_typeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type history_typeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type history_typeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type phraseCountOrderByAggregateInput = {
    id?: SortOrder
    phrase?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    author_id?: SortOrder
  }

  export type phraseAvgOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
  }

  export type phraseMaxOrderByAggregateInput = {
    id?: SortOrder
    phrase?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    author_id?: SortOrder
  }

  export type phraseMinOrderByAggregateInput = {
    id?: SortOrder
    phrase?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    author_id?: SortOrder
  }

  export type phraseSumOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
  }

  export type author_relationCreateNestedManyWithoutAuthor_author_relation_author_idToauthorInput = {
    create?: XOR<author_relationCreateWithoutAuthor_author_relation_author_idToauthorInput, author_relationUncheckedCreateWithoutAuthor_author_relation_author_idToauthorInput> | author_relationCreateWithoutAuthor_author_relation_author_idToauthorInput[] | author_relationUncheckedCreateWithoutAuthor_author_relation_author_idToauthorInput[]
    connectOrCreate?: author_relationCreateOrConnectWithoutAuthor_author_relation_author_idToauthorInput | author_relationCreateOrConnectWithoutAuthor_author_relation_author_idToauthorInput[]
    createMany?: author_relationCreateManyAuthor_author_relation_author_idToauthorInputEnvelope
    connect?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
  }

  export type author_relationCreateNestedManyWithoutAuthor_author_relation_author_relationed_idToauthorInput = {
    create?: XOR<author_relationCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput, author_relationUncheckedCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput> | author_relationCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput[] | author_relationUncheckedCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    connectOrCreate?: author_relationCreateOrConnectWithoutAuthor_author_relation_author_relationed_idToauthorInput | author_relationCreateOrConnectWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    createMany?: author_relationCreateManyAuthor_author_relation_author_relationed_idToauthorInputEnvelope
    connect?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
  }

  export type phraseCreateNestedManyWithoutAuthorInput = {
    create?: XOR<phraseCreateWithoutAuthorInput, phraseUncheckedCreateWithoutAuthorInput> | phraseCreateWithoutAuthorInput[] | phraseUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: phraseCreateOrConnectWithoutAuthorInput | phraseCreateOrConnectWithoutAuthorInput[]
    createMany?: phraseCreateManyAuthorInputEnvelope
    connect?: phraseWhereUniqueInput | phraseWhereUniqueInput[]
  }

  export type author_relationUncheckedCreateNestedManyWithoutAuthor_author_relation_author_idToauthorInput = {
    create?: XOR<author_relationCreateWithoutAuthor_author_relation_author_idToauthorInput, author_relationUncheckedCreateWithoutAuthor_author_relation_author_idToauthorInput> | author_relationCreateWithoutAuthor_author_relation_author_idToauthorInput[] | author_relationUncheckedCreateWithoutAuthor_author_relation_author_idToauthorInput[]
    connectOrCreate?: author_relationCreateOrConnectWithoutAuthor_author_relation_author_idToauthorInput | author_relationCreateOrConnectWithoutAuthor_author_relation_author_idToauthorInput[]
    createMany?: author_relationCreateManyAuthor_author_relation_author_idToauthorInputEnvelope
    connect?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
  }

  export type author_relationUncheckedCreateNestedManyWithoutAuthor_author_relation_author_relationed_idToauthorInput = {
    create?: XOR<author_relationCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput, author_relationUncheckedCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput> | author_relationCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput[] | author_relationUncheckedCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    connectOrCreate?: author_relationCreateOrConnectWithoutAuthor_author_relation_author_relationed_idToauthorInput | author_relationCreateOrConnectWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    createMany?: author_relationCreateManyAuthor_author_relation_author_relationed_idToauthorInputEnvelope
    connect?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
  }

  export type phraseUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<phraseCreateWithoutAuthorInput, phraseUncheckedCreateWithoutAuthorInput> | phraseCreateWithoutAuthorInput[] | phraseUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: phraseCreateOrConnectWithoutAuthorInput | phraseCreateOrConnectWithoutAuthorInput[]
    createMany?: phraseCreateManyAuthorInputEnvelope
    connect?: phraseWhereUniqueInput | phraseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type author_relationUpdateManyWithoutAuthor_author_relation_author_idToauthorNestedInput = {
    create?: XOR<author_relationCreateWithoutAuthor_author_relation_author_idToauthorInput, author_relationUncheckedCreateWithoutAuthor_author_relation_author_idToauthorInput> | author_relationCreateWithoutAuthor_author_relation_author_idToauthorInput[] | author_relationUncheckedCreateWithoutAuthor_author_relation_author_idToauthorInput[]
    connectOrCreate?: author_relationCreateOrConnectWithoutAuthor_author_relation_author_idToauthorInput | author_relationCreateOrConnectWithoutAuthor_author_relation_author_idToauthorInput[]
    upsert?: author_relationUpsertWithWhereUniqueWithoutAuthor_author_relation_author_idToauthorInput | author_relationUpsertWithWhereUniqueWithoutAuthor_author_relation_author_idToauthorInput[]
    createMany?: author_relationCreateManyAuthor_author_relation_author_idToauthorInputEnvelope
    set?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
    disconnect?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
    delete?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
    connect?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
    update?: author_relationUpdateWithWhereUniqueWithoutAuthor_author_relation_author_idToauthorInput | author_relationUpdateWithWhereUniqueWithoutAuthor_author_relation_author_idToauthorInput[]
    updateMany?: author_relationUpdateManyWithWhereWithoutAuthor_author_relation_author_idToauthorInput | author_relationUpdateManyWithWhereWithoutAuthor_author_relation_author_idToauthorInput[]
    deleteMany?: author_relationScalarWhereInput | author_relationScalarWhereInput[]
  }

  export type author_relationUpdateManyWithoutAuthor_author_relation_author_relationed_idToauthorNestedInput = {
    create?: XOR<author_relationCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput, author_relationUncheckedCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput> | author_relationCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput[] | author_relationUncheckedCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    connectOrCreate?: author_relationCreateOrConnectWithoutAuthor_author_relation_author_relationed_idToauthorInput | author_relationCreateOrConnectWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    upsert?: author_relationUpsertWithWhereUniqueWithoutAuthor_author_relation_author_relationed_idToauthorInput | author_relationUpsertWithWhereUniqueWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    createMany?: author_relationCreateManyAuthor_author_relation_author_relationed_idToauthorInputEnvelope
    set?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
    disconnect?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
    delete?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
    connect?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
    update?: author_relationUpdateWithWhereUniqueWithoutAuthor_author_relation_author_relationed_idToauthorInput | author_relationUpdateWithWhereUniqueWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    updateMany?: author_relationUpdateManyWithWhereWithoutAuthor_author_relation_author_relationed_idToauthorInput | author_relationUpdateManyWithWhereWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    deleteMany?: author_relationScalarWhereInput | author_relationScalarWhereInput[]
  }

  export type phraseUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<phraseCreateWithoutAuthorInput, phraseUncheckedCreateWithoutAuthorInput> | phraseCreateWithoutAuthorInput[] | phraseUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: phraseCreateOrConnectWithoutAuthorInput | phraseCreateOrConnectWithoutAuthorInput[]
    upsert?: phraseUpsertWithWhereUniqueWithoutAuthorInput | phraseUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: phraseCreateManyAuthorInputEnvelope
    set?: phraseWhereUniqueInput | phraseWhereUniqueInput[]
    disconnect?: phraseWhereUniqueInput | phraseWhereUniqueInput[]
    delete?: phraseWhereUniqueInput | phraseWhereUniqueInput[]
    connect?: phraseWhereUniqueInput | phraseWhereUniqueInput[]
    update?: phraseUpdateWithWhereUniqueWithoutAuthorInput | phraseUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: phraseUpdateManyWithWhereWithoutAuthorInput | phraseUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: phraseScalarWhereInput | phraseScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type author_relationUncheckedUpdateManyWithoutAuthor_author_relation_author_idToauthorNestedInput = {
    create?: XOR<author_relationCreateWithoutAuthor_author_relation_author_idToauthorInput, author_relationUncheckedCreateWithoutAuthor_author_relation_author_idToauthorInput> | author_relationCreateWithoutAuthor_author_relation_author_idToauthorInput[] | author_relationUncheckedCreateWithoutAuthor_author_relation_author_idToauthorInput[]
    connectOrCreate?: author_relationCreateOrConnectWithoutAuthor_author_relation_author_idToauthorInput | author_relationCreateOrConnectWithoutAuthor_author_relation_author_idToauthorInput[]
    upsert?: author_relationUpsertWithWhereUniqueWithoutAuthor_author_relation_author_idToauthorInput | author_relationUpsertWithWhereUniqueWithoutAuthor_author_relation_author_idToauthorInput[]
    createMany?: author_relationCreateManyAuthor_author_relation_author_idToauthorInputEnvelope
    set?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
    disconnect?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
    delete?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
    connect?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
    update?: author_relationUpdateWithWhereUniqueWithoutAuthor_author_relation_author_idToauthorInput | author_relationUpdateWithWhereUniqueWithoutAuthor_author_relation_author_idToauthorInput[]
    updateMany?: author_relationUpdateManyWithWhereWithoutAuthor_author_relation_author_idToauthorInput | author_relationUpdateManyWithWhereWithoutAuthor_author_relation_author_idToauthorInput[]
    deleteMany?: author_relationScalarWhereInput | author_relationScalarWhereInput[]
  }

  export type author_relationUncheckedUpdateManyWithoutAuthor_author_relation_author_relationed_idToauthorNestedInput = {
    create?: XOR<author_relationCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput, author_relationUncheckedCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput> | author_relationCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput[] | author_relationUncheckedCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    connectOrCreate?: author_relationCreateOrConnectWithoutAuthor_author_relation_author_relationed_idToauthorInput | author_relationCreateOrConnectWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    upsert?: author_relationUpsertWithWhereUniqueWithoutAuthor_author_relation_author_relationed_idToauthorInput | author_relationUpsertWithWhereUniqueWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    createMany?: author_relationCreateManyAuthor_author_relation_author_relationed_idToauthorInputEnvelope
    set?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
    disconnect?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
    delete?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
    connect?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
    update?: author_relationUpdateWithWhereUniqueWithoutAuthor_author_relation_author_relationed_idToauthorInput | author_relationUpdateWithWhereUniqueWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    updateMany?: author_relationUpdateManyWithWhereWithoutAuthor_author_relation_author_relationed_idToauthorInput | author_relationUpdateManyWithWhereWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    deleteMany?: author_relationScalarWhereInput | author_relationScalarWhereInput[]
  }

  export type phraseUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<phraseCreateWithoutAuthorInput, phraseUncheckedCreateWithoutAuthorInput> | phraseCreateWithoutAuthorInput[] | phraseUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: phraseCreateOrConnectWithoutAuthorInput | phraseCreateOrConnectWithoutAuthorInput[]
    upsert?: phraseUpsertWithWhereUniqueWithoutAuthorInput | phraseUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: phraseCreateManyAuthorInputEnvelope
    set?: phraseWhereUniqueInput | phraseWhereUniqueInput[]
    disconnect?: phraseWhereUniqueInput | phraseWhereUniqueInput[]
    delete?: phraseWhereUniqueInput | phraseWhereUniqueInput[]
    connect?: phraseWhereUniqueInput | phraseWhereUniqueInput[]
    update?: phraseUpdateWithWhereUniqueWithoutAuthorInput | phraseUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: phraseUpdateManyWithWhereWithoutAuthorInput | phraseUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: phraseScalarWhereInput | phraseScalarWhereInput[]
  }

  export type authorCreateNestedOneWithoutAuthor_relation_author_relation_author_idToauthorInput = {
    create?: XOR<authorCreateWithoutAuthor_relation_author_relation_author_idToauthorInput, authorUncheckedCreateWithoutAuthor_relation_author_relation_author_idToauthorInput>
    connectOrCreate?: authorCreateOrConnectWithoutAuthor_relation_author_relation_author_idToauthorInput
    connect?: authorWhereUniqueInput
  }

  export type authorCreateNestedOneWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput = {
    create?: XOR<authorCreateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput, authorUncheckedCreateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput>
    connectOrCreate?: authorCreateOrConnectWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput
    connect?: authorWhereUniqueInput
  }

  export type history_typeCreateNestedOneWithoutAuthor_relationInput = {
    create?: XOR<history_typeCreateWithoutAuthor_relationInput, history_typeUncheckedCreateWithoutAuthor_relationInput>
    connectOrCreate?: history_typeCreateOrConnectWithoutAuthor_relationInput
    connect?: history_typeWhereUniqueInput
  }

  export type authorUpdateOneRequiredWithoutAuthor_relation_author_relation_author_idToauthorNestedInput = {
    create?: XOR<authorCreateWithoutAuthor_relation_author_relation_author_idToauthorInput, authorUncheckedCreateWithoutAuthor_relation_author_relation_author_idToauthorInput>
    connectOrCreate?: authorCreateOrConnectWithoutAuthor_relation_author_relation_author_idToauthorInput
    upsert?: authorUpsertWithoutAuthor_relation_author_relation_author_idToauthorInput
    connect?: authorWhereUniqueInput
    update?: XOR<XOR<authorUpdateToOneWithWhereWithoutAuthor_relation_author_relation_author_idToauthorInput, authorUpdateWithoutAuthor_relation_author_relation_author_idToauthorInput>, authorUncheckedUpdateWithoutAuthor_relation_author_relation_author_idToauthorInput>
  }

  export type authorUpdateOneRequiredWithoutAuthor_relation_author_relation_author_relationed_idToauthorNestedInput = {
    create?: XOR<authorCreateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput, authorUncheckedCreateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput>
    connectOrCreate?: authorCreateOrConnectWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput
    upsert?: authorUpsertWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput
    connect?: authorWhereUniqueInput
    update?: XOR<XOR<authorUpdateToOneWithWhereWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput, authorUpdateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput>, authorUncheckedUpdateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput>
  }

  export type history_typeUpdateOneRequiredWithoutAuthor_relationNestedInput = {
    create?: XOR<history_typeCreateWithoutAuthor_relationInput, history_typeUncheckedCreateWithoutAuthor_relationInput>
    connectOrCreate?: history_typeCreateOrConnectWithoutAuthor_relationInput
    upsert?: history_typeUpsertWithoutAuthor_relationInput
    connect?: history_typeWhereUniqueInput
    update?: XOR<XOR<history_typeUpdateToOneWithWhereWithoutAuthor_relationInput, history_typeUpdateWithoutAuthor_relationInput>, history_typeUncheckedUpdateWithoutAuthor_relationInput>
  }

  export type author_relationCreateNestedManyWithoutHistory_typeInput = {
    create?: XOR<author_relationCreateWithoutHistory_typeInput, author_relationUncheckedCreateWithoutHistory_typeInput> | author_relationCreateWithoutHistory_typeInput[] | author_relationUncheckedCreateWithoutHistory_typeInput[]
    connectOrCreate?: author_relationCreateOrConnectWithoutHistory_typeInput | author_relationCreateOrConnectWithoutHistory_typeInput[]
    createMany?: author_relationCreateManyHistory_typeInputEnvelope
    connect?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
  }

  export type author_relationUncheckedCreateNestedManyWithoutHistory_typeInput = {
    create?: XOR<author_relationCreateWithoutHistory_typeInput, author_relationUncheckedCreateWithoutHistory_typeInput> | author_relationCreateWithoutHistory_typeInput[] | author_relationUncheckedCreateWithoutHistory_typeInput[]
    connectOrCreate?: author_relationCreateOrConnectWithoutHistory_typeInput | author_relationCreateOrConnectWithoutHistory_typeInput[]
    createMany?: author_relationCreateManyHistory_typeInputEnvelope
    connect?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
  }

  export type author_relationUpdateManyWithoutHistory_typeNestedInput = {
    create?: XOR<author_relationCreateWithoutHistory_typeInput, author_relationUncheckedCreateWithoutHistory_typeInput> | author_relationCreateWithoutHistory_typeInput[] | author_relationUncheckedCreateWithoutHistory_typeInput[]
    connectOrCreate?: author_relationCreateOrConnectWithoutHistory_typeInput | author_relationCreateOrConnectWithoutHistory_typeInput[]
    upsert?: author_relationUpsertWithWhereUniqueWithoutHistory_typeInput | author_relationUpsertWithWhereUniqueWithoutHistory_typeInput[]
    createMany?: author_relationCreateManyHistory_typeInputEnvelope
    set?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
    disconnect?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
    delete?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
    connect?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
    update?: author_relationUpdateWithWhereUniqueWithoutHistory_typeInput | author_relationUpdateWithWhereUniqueWithoutHistory_typeInput[]
    updateMany?: author_relationUpdateManyWithWhereWithoutHistory_typeInput | author_relationUpdateManyWithWhereWithoutHistory_typeInput[]
    deleteMany?: author_relationScalarWhereInput | author_relationScalarWhereInput[]
  }

  export type author_relationUncheckedUpdateManyWithoutHistory_typeNestedInput = {
    create?: XOR<author_relationCreateWithoutHistory_typeInput, author_relationUncheckedCreateWithoutHistory_typeInput> | author_relationCreateWithoutHistory_typeInput[] | author_relationUncheckedCreateWithoutHistory_typeInput[]
    connectOrCreate?: author_relationCreateOrConnectWithoutHistory_typeInput | author_relationCreateOrConnectWithoutHistory_typeInput[]
    upsert?: author_relationUpsertWithWhereUniqueWithoutHistory_typeInput | author_relationUpsertWithWhereUniqueWithoutHistory_typeInput[]
    createMany?: author_relationCreateManyHistory_typeInputEnvelope
    set?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
    disconnect?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
    delete?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
    connect?: author_relationWhereUniqueInput | author_relationWhereUniqueInput[]
    update?: author_relationUpdateWithWhereUniqueWithoutHistory_typeInput | author_relationUpdateWithWhereUniqueWithoutHistory_typeInput[]
    updateMany?: author_relationUpdateManyWithWhereWithoutHistory_typeInput | author_relationUpdateManyWithWhereWithoutHistory_typeInput[]
    deleteMany?: author_relationScalarWhereInput | author_relationScalarWhereInput[]
  }

  export type authorCreateNestedOneWithoutPhraseInput = {
    create?: XOR<authorCreateWithoutPhraseInput, authorUncheckedCreateWithoutPhraseInput>
    connectOrCreate?: authorCreateOrConnectWithoutPhraseInput
    connect?: authorWhereUniqueInput
  }

  export type authorUpdateOneRequiredWithoutPhraseNestedInput = {
    create?: XOR<authorCreateWithoutPhraseInput, authorUncheckedCreateWithoutPhraseInput>
    connectOrCreate?: authorCreateOrConnectWithoutPhraseInput
    upsert?: authorUpsertWithoutPhraseInput
    connect?: authorWhereUniqueInput
    update?: XOR<XOR<authorUpdateToOneWithWhereWithoutPhraseInput, authorUpdateWithoutPhraseInput>, authorUncheckedUpdateWithoutPhraseInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type author_relationCreateWithoutAuthor_author_relation_author_idToauthorInput = {
    name_relation: string
    type_relation: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_author_relation_author_relationed_idToauthor: authorCreateNestedOneWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput
    history_type: history_typeCreateNestedOneWithoutAuthor_relationInput
  }

  export type author_relationUncheckedCreateWithoutAuthor_author_relation_author_idToauthorInput = {
    id?: number
    name_relation: string
    type_relation: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_relationed_id: number
    history_type_id: number
  }

  export type author_relationCreateOrConnectWithoutAuthor_author_relation_author_idToauthorInput = {
    where: author_relationWhereUniqueInput
    create: XOR<author_relationCreateWithoutAuthor_author_relation_author_idToauthorInput, author_relationUncheckedCreateWithoutAuthor_author_relation_author_idToauthorInput>
  }

  export type author_relationCreateManyAuthor_author_relation_author_idToauthorInputEnvelope = {
    data: author_relationCreateManyAuthor_author_relation_author_idToauthorInput | author_relationCreateManyAuthor_author_relation_author_idToauthorInput[]
    skipDuplicates?: boolean
  }

  export type author_relationCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput = {
    name_relation: string
    type_relation: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_author_relation_author_idToauthor: authorCreateNestedOneWithoutAuthor_relation_author_relation_author_idToauthorInput
    history_type: history_typeCreateNestedOneWithoutAuthor_relationInput
  }

  export type author_relationUncheckedCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput = {
    id?: number
    name_relation: string
    type_relation: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_id: number
    history_type_id: number
  }

  export type author_relationCreateOrConnectWithoutAuthor_author_relation_author_relationed_idToauthorInput = {
    where: author_relationWhereUniqueInput
    create: XOR<author_relationCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput, author_relationUncheckedCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput>
  }

  export type author_relationCreateManyAuthor_author_relation_author_relationed_idToauthorInputEnvelope = {
    data: author_relationCreateManyAuthor_author_relation_author_relationed_idToauthorInput | author_relationCreateManyAuthor_author_relation_author_relationed_idToauthorInput[]
    skipDuplicates?: boolean
  }

  export type phraseCreateWithoutAuthorInput = {
    phrase: string
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type phraseUncheckedCreateWithoutAuthorInput = {
    id?: number
    phrase: string
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type phraseCreateOrConnectWithoutAuthorInput = {
    where: phraseWhereUniqueInput
    create: XOR<phraseCreateWithoutAuthorInput, phraseUncheckedCreateWithoutAuthorInput>
  }

  export type phraseCreateManyAuthorInputEnvelope = {
    data: phraseCreateManyAuthorInput | phraseCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type author_relationUpsertWithWhereUniqueWithoutAuthor_author_relation_author_idToauthorInput = {
    where: author_relationWhereUniqueInput
    update: XOR<author_relationUpdateWithoutAuthor_author_relation_author_idToauthorInput, author_relationUncheckedUpdateWithoutAuthor_author_relation_author_idToauthorInput>
    create: XOR<author_relationCreateWithoutAuthor_author_relation_author_idToauthorInput, author_relationUncheckedCreateWithoutAuthor_author_relation_author_idToauthorInput>
  }

  export type author_relationUpdateWithWhereUniqueWithoutAuthor_author_relation_author_idToauthorInput = {
    where: author_relationWhereUniqueInput
    data: XOR<author_relationUpdateWithoutAuthor_author_relation_author_idToauthorInput, author_relationUncheckedUpdateWithoutAuthor_author_relation_author_idToauthorInput>
  }

  export type author_relationUpdateManyWithWhereWithoutAuthor_author_relation_author_idToauthorInput = {
    where: author_relationScalarWhereInput
    data: XOR<author_relationUpdateManyMutationInput, author_relationUncheckedUpdateManyWithoutAuthor_author_relation_author_idToauthorInput>
  }

  export type author_relationScalarWhereInput = {
    AND?: author_relationScalarWhereInput | author_relationScalarWhereInput[]
    OR?: author_relationScalarWhereInput[]
    NOT?: author_relationScalarWhereInput | author_relationScalarWhereInput[]
    id?: IntFilter<"author_relation"> | number
    name_relation?: StringFilter<"author_relation"> | string
    type_relation?: StringFilter<"author_relation"> | string
    created_at?: DateTimeNullableFilter<"author_relation"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"author_relation"> | Date | string | null
    author_id?: IntFilter<"author_relation"> | number
    author_relationed_id?: IntFilter<"author_relation"> | number
    history_type_id?: IntFilter<"author_relation"> | number
  }

  export type author_relationUpsertWithWhereUniqueWithoutAuthor_author_relation_author_relationed_idToauthorInput = {
    where: author_relationWhereUniqueInput
    update: XOR<author_relationUpdateWithoutAuthor_author_relation_author_relationed_idToauthorInput, author_relationUncheckedUpdateWithoutAuthor_author_relation_author_relationed_idToauthorInput>
    create: XOR<author_relationCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput, author_relationUncheckedCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput>
  }

  export type author_relationUpdateWithWhereUniqueWithoutAuthor_author_relation_author_relationed_idToauthorInput = {
    where: author_relationWhereUniqueInput
    data: XOR<author_relationUpdateWithoutAuthor_author_relation_author_relationed_idToauthorInput, author_relationUncheckedUpdateWithoutAuthor_author_relation_author_relationed_idToauthorInput>
  }

  export type author_relationUpdateManyWithWhereWithoutAuthor_author_relation_author_relationed_idToauthorInput = {
    where: author_relationScalarWhereInput
    data: XOR<author_relationUpdateManyMutationInput, author_relationUncheckedUpdateManyWithoutAuthor_author_relation_author_relationed_idToauthorInput>
  }

  export type phraseUpsertWithWhereUniqueWithoutAuthorInput = {
    where: phraseWhereUniqueInput
    update: XOR<phraseUpdateWithoutAuthorInput, phraseUncheckedUpdateWithoutAuthorInput>
    create: XOR<phraseCreateWithoutAuthorInput, phraseUncheckedCreateWithoutAuthorInput>
  }

  export type phraseUpdateWithWhereUniqueWithoutAuthorInput = {
    where: phraseWhereUniqueInput
    data: XOR<phraseUpdateWithoutAuthorInput, phraseUncheckedUpdateWithoutAuthorInput>
  }

  export type phraseUpdateManyWithWhereWithoutAuthorInput = {
    where: phraseScalarWhereInput
    data: XOR<phraseUpdateManyMutationInput, phraseUncheckedUpdateManyWithoutAuthorInput>
  }

  export type phraseScalarWhereInput = {
    AND?: phraseScalarWhereInput | phraseScalarWhereInput[]
    OR?: phraseScalarWhereInput[]
    NOT?: phraseScalarWhereInput | phraseScalarWhereInput[]
    id?: IntFilter<"phrase"> | number
    phrase?: StringFilter<"phrase"> | string
    date?: DateTimeNullableFilter<"phrase"> | Date | string | null
    created_at?: DateTimeNullableFilter<"phrase"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"phrase"> | Date | string | null
    author_id?: IntFilter<"phrase"> | number
  }

  export type authorCreateWithoutAuthor_relation_author_relation_author_idToauthorInput = {
    name: string
    last_name?: string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_relation_author_relation_author_relationed_idToauthor?: author_relationCreateNestedManyWithoutAuthor_author_relation_author_relationed_idToauthorInput
    phrase?: phraseCreateNestedManyWithoutAuthorInput
  }

  export type authorUncheckedCreateWithoutAuthor_relation_author_relation_author_idToauthorInput = {
    id?: number
    name: string
    last_name?: string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_relation_author_relation_author_relationed_idToauthor?: author_relationUncheckedCreateNestedManyWithoutAuthor_author_relation_author_relationed_idToauthorInput
    phrase?: phraseUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type authorCreateOrConnectWithoutAuthor_relation_author_relation_author_idToauthorInput = {
    where: authorWhereUniqueInput
    create: XOR<authorCreateWithoutAuthor_relation_author_relation_author_idToauthorInput, authorUncheckedCreateWithoutAuthor_relation_author_relation_author_idToauthorInput>
  }

  export type authorCreateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput = {
    name: string
    last_name?: string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_relation_author_relation_author_idToauthor?: author_relationCreateNestedManyWithoutAuthor_author_relation_author_idToauthorInput
    phrase?: phraseCreateNestedManyWithoutAuthorInput
  }

  export type authorUncheckedCreateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput = {
    id?: number
    name: string
    last_name?: string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_relation_author_relation_author_idToauthor?: author_relationUncheckedCreateNestedManyWithoutAuthor_author_relation_author_idToauthorInput
    phrase?: phraseUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type authorCreateOrConnectWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput = {
    where: authorWhereUniqueInput
    create: XOR<authorCreateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput, authorUncheckedCreateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput>
  }

  export type history_typeCreateWithoutAuthor_relationInput = {
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type history_typeUncheckedCreateWithoutAuthor_relationInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type history_typeCreateOrConnectWithoutAuthor_relationInput = {
    where: history_typeWhereUniqueInput
    create: XOR<history_typeCreateWithoutAuthor_relationInput, history_typeUncheckedCreateWithoutAuthor_relationInput>
  }

  export type authorUpsertWithoutAuthor_relation_author_relation_author_idToauthorInput = {
    update: XOR<authorUpdateWithoutAuthor_relation_author_relation_author_idToauthorInput, authorUncheckedUpdateWithoutAuthor_relation_author_relation_author_idToauthorInput>
    create: XOR<authorCreateWithoutAuthor_relation_author_relation_author_idToauthorInput, authorUncheckedCreateWithoutAuthor_relation_author_relation_author_idToauthorInput>
    where?: authorWhereInput
  }

  export type authorUpdateToOneWithWhereWithoutAuthor_relation_author_relation_author_idToauthorInput = {
    where?: authorWhereInput
    data: XOR<authorUpdateWithoutAuthor_relation_author_relation_author_idToauthorInput, authorUncheckedUpdateWithoutAuthor_relation_author_relation_author_idToauthorInput>
  }

  export type authorUpdateWithoutAuthor_relation_author_relation_author_idToauthorInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_relation_author_relation_author_relationed_idToauthor?: author_relationUpdateManyWithoutAuthor_author_relation_author_relationed_idToauthorNestedInput
    phrase?: phraseUpdateManyWithoutAuthorNestedInput
  }

  export type authorUncheckedUpdateWithoutAuthor_relation_author_relation_author_idToauthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_relation_author_relation_author_relationed_idToauthor?: author_relationUncheckedUpdateManyWithoutAuthor_author_relation_author_relationed_idToauthorNestedInput
    phrase?: phraseUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type authorUpsertWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput = {
    update: XOR<authorUpdateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput, authorUncheckedUpdateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput>
    create: XOR<authorCreateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput, authorUncheckedCreateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput>
    where?: authorWhereInput
  }

  export type authorUpdateToOneWithWhereWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput = {
    where?: authorWhereInput
    data: XOR<authorUpdateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput, authorUncheckedUpdateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput>
  }

  export type authorUpdateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_relation_author_relation_author_idToauthor?: author_relationUpdateManyWithoutAuthor_author_relation_author_idToauthorNestedInput
    phrase?: phraseUpdateManyWithoutAuthorNestedInput
  }

  export type authorUncheckedUpdateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_relation_author_relation_author_idToauthor?: author_relationUncheckedUpdateManyWithoutAuthor_author_relation_author_idToauthorNestedInput
    phrase?: phraseUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type history_typeUpsertWithoutAuthor_relationInput = {
    update: XOR<history_typeUpdateWithoutAuthor_relationInput, history_typeUncheckedUpdateWithoutAuthor_relationInput>
    create: XOR<history_typeCreateWithoutAuthor_relationInput, history_typeUncheckedCreateWithoutAuthor_relationInput>
    where?: history_typeWhereInput
  }

  export type history_typeUpdateToOneWithWhereWithoutAuthor_relationInput = {
    where?: history_typeWhereInput
    data: XOR<history_typeUpdateWithoutAuthor_relationInput, history_typeUncheckedUpdateWithoutAuthor_relationInput>
  }

  export type history_typeUpdateWithoutAuthor_relationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type history_typeUncheckedUpdateWithoutAuthor_relationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type author_relationCreateWithoutHistory_typeInput = {
    name_relation: string
    type_relation: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_author_relation_author_idToauthor: authorCreateNestedOneWithoutAuthor_relation_author_relation_author_idToauthorInput
    author_author_relation_author_relationed_idToauthor: authorCreateNestedOneWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput
  }

  export type author_relationUncheckedCreateWithoutHistory_typeInput = {
    id?: number
    name_relation: string
    type_relation: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_id: number
    author_relationed_id: number
  }

  export type author_relationCreateOrConnectWithoutHistory_typeInput = {
    where: author_relationWhereUniqueInput
    create: XOR<author_relationCreateWithoutHistory_typeInput, author_relationUncheckedCreateWithoutHistory_typeInput>
  }

  export type author_relationCreateManyHistory_typeInputEnvelope = {
    data: author_relationCreateManyHistory_typeInput | author_relationCreateManyHistory_typeInput[]
    skipDuplicates?: boolean
  }

  export type author_relationUpsertWithWhereUniqueWithoutHistory_typeInput = {
    where: author_relationWhereUniqueInput
    update: XOR<author_relationUpdateWithoutHistory_typeInput, author_relationUncheckedUpdateWithoutHistory_typeInput>
    create: XOR<author_relationCreateWithoutHistory_typeInput, author_relationUncheckedCreateWithoutHistory_typeInput>
  }

  export type author_relationUpdateWithWhereUniqueWithoutHistory_typeInput = {
    where: author_relationWhereUniqueInput
    data: XOR<author_relationUpdateWithoutHistory_typeInput, author_relationUncheckedUpdateWithoutHistory_typeInput>
  }

  export type author_relationUpdateManyWithWhereWithoutHistory_typeInput = {
    where: author_relationScalarWhereInput
    data: XOR<author_relationUpdateManyMutationInput, author_relationUncheckedUpdateManyWithoutHistory_typeInput>
  }

  export type authorCreateWithoutPhraseInput = {
    name: string
    last_name?: string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_relation_author_relation_author_idToauthor?: author_relationCreateNestedManyWithoutAuthor_author_relation_author_idToauthorInput
    author_relation_author_relation_author_relationed_idToauthor?: author_relationCreateNestedManyWithoutAuthor_author_relation_author_relationed_idToauthorInput
  }

  export type authorUncheckedCreateWithoutPhraseInput = {
    id?: number
    name: string
    last_name?: string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_relation_author_relation_author_idToauthor?: author_relationUncheckedCreateNestedManyWithoutAuthor_author_relation_author_idToauthorInput
    author_relation_author_relation_author_relationed_idToauthor?: author_relationUncheckedCreateNestedManyWithoutAuthor_author_relation_author_relationed_idToauthorInput
  }

  export type authorCreateOrConnectWithoutPhraseInput = {
    where: authorWhereUniqueInput
    create: XOR<authorCreateWithoutPhraseInput, authorUncheckedCreateWithoutPhraseInput>
  }

  export type authorUpsertWithoutPhraseInput = {
    update: XOR<authorUpdateWithoutPhraseInput, authorUncheckedUpdateWithoutPhraseInput>
    create: XOR<authorCreateWithoutPhraseInput, authorUncheckedCreateWithoutPhraseInput>
    where?: authorWhereInput
  }

  export type authorUpdateToOneWithWhereWithoutPhraseInput = {
    where?: authorWhereInput
    data: XOR<authorUpdateWithoutPhraseInput, authorUncheckedUpdateWithoutPhraseInput>
  }

  export type authorUpdateWithoutPhraseInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_relation_author_relation_author_idToauthor?: author_relationUpdateManyWithoutAuthor_author_relation_author_idToauthorNestedInput
    author_relation_author_relation_author_relationed_idToauthor?: author_relationUpdateManyWithoutAuthor_author_relation_author_relationed_idToauthorNestedInput
  }

  export type authorUncheckedUpdateWithoutPhraseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_relation_author_relation_author_idToauthor?: author_relationUncheckedUpdateManyWithoutAuthor_author_relation_author_idToauthorNestedInput
    author_relation_author_relation_author_relationed_idToauthor?: author_relationUncheckedUpdateManyWithoutAuthor_author_relation_author_relationed_idToauthorNestedInput
  }

  export type author_relationCreateManyAuthor_author_relation_author_idToauthorInput = {
    id?: number
    name_relation: string
    type_relation: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_relationed_id: number
    history_type_id: number
  }

  export type author_relationCreateManyAuthor_author_relation_author_relationed_idToauthorInput = {
    id?: number
    name_relation: string
    type_relation: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_id: number
    history_type_id: number
  }

  export type phraseCreateManyAuthorInput = {
    id?: number
    phrase: string
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type author_relationUpdateWithoutAuthor_author_relation_author_idToauthorInput = {
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_author_relation_author_relationed_idToauthor?: authorUpdateOneRequiredWithoutAuthor_relation_author_relation_author_relationed_idToauthorNestedInput
    history_type?: history_typeUpdateOneRequiredWithoutAuthor_relationNestedInput
  }

  export type author_relationUncheckedUpdateWithoutAuthor_author_relation_author_idToauthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_relationed_id?: IntFieldUpdateOperationsInput | number
    history_type_id?: IntFieldUpdateOperationsInput | number
  }

  export type author_relationUncheckedUpdateManyWithoutAuthor_author_relation_author_idToauthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_relationed_id?: IntFieldUpdateOperationsInput | number
    history_type_id?: IntFieldUpdateOperationsInput | number
  }

  export type author_relationUpdateWithoutAuthor_author_relation_author_relationed_idToauthorInput = {
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_author_relation_author_idToauthor?: authorUpdateOneRequiredWithoutAuthor_relation_author_relation_author_idToauthorNestedInput
    history_type?: history_typeUpdateOneRequiredWithoutAuthor_relationNestedInput
  }

  export type author_relationUncheckedUpdateWithoutAuthor_author_relation_author_relationed_idToauthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_id?: IntFieldUpdateOperationsInput | number
    history_type_id?: IntFieldUpdateOperationsInput | number
  }

  export type author_relationUncheckedUpdateManyWithoutAuthor_author_relation_author_relationed_idToauthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_id?: IntFieldUpdateOperationsInput | number
    history_type_id?: IntFieldUpdateOperationsInput | number
  }

  export type phraseUpdateWithoutAuthorInput = {
    phrase?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type phraseUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    phrase?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type phraseUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    phrase?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type author_relationCreateManyHistory_typeInput = {
    id?: number
    name_relation: string
    type_relation: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_id: number
    author_relationed_id: number
  }

  export type author_relationUpdateWithoutHistory_typeInput = {
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_author_relation_author_idToauthor?: authorUpdateOneRequiredWithoutAuthor_relation_author_relation_author_idToauthorNestedInput
    author_author_relation_author_relationed_idToauthor?: authorUpdateOneRequiredWithoutAuthor_relation_author_relation_author_relationed_idToauthorNestedInput
  }

  export type author_relationUncheckedUpdateWithoutHistory_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_id?: IntFieldUpdateOperationsInput | number
    author_relationed_id?: IntFieldUpdateOperationsInput | number
  }

  export type author_relationUncheckedUpdateManyWithoutHistory_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_id?: IntFieldUpdateOperationsInput | number
    author_relationed_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AuthorCountOutputTypeDefaultArgs instead
     */
    export type AuthorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuthorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use History_typeCountOutputTypeDefaultArgs instead
     */
    export type History_typeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = History_typeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use authorDefaultArgs instead
     */
    export type authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = authorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use author_relationDefaultArgs instead
     */
    export type author_relationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = author_relationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use history_typeDefaultArgs instead
     */
    export type history_typeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = history_typeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use phraseDefaultArgs instead
     */
    export type phraseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = phraseDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}