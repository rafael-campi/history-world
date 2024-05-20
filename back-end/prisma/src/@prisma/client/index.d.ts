
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
 * Model Author
 * 
 */
export type Author = $Result.DefaultSelection<Prisma.$AuthorPayload>
/**
 * Model AuthorRelation
 * 
 */
export type AuthorRelation = $Result.DefaultSelection<Prisma.$AuthorRelationPayload>
/**
 * Model HistoryType
 * 
 */
export type HistoryType = $Result.DefaultSelection<Prisma.$HistoryTypePayload>
/**
 * Model Phrase
 * 
 */
export type Phrase = $Result.DefaultSelection<Prisma.$PhrasePayload>

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
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.AuthorDelegate<ExtArgs>;

  /**
   * `prisma.authorRelation`: Exposes CRUD operations for the **AuthorRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthorRelations
    * const authorRelations = await prisma.authorRelation.findMany()
    * ```
    */
  get authorRelation(): Prisma.AuthorRelationDelegate<ExtArgs>;

  /**
   * `prisma.historyType`: Exposes CRUD operations for the **HistoryType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoryTypes
    * const historyTypes = await prisma.historyType.findMany()
    * ```
    */
  get historyType(): Prisma.HistoryTypeDelegate<ExtArgs>;

  /**
   * `prisma.phrase`: Exposes CRUD operations for the **Phrase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Phrases
    * const phrases = await prisma.phrase.findMany()
    * ```
    */
  get phrase(): Prisma.PhraseDelegate<ExtArgs>;
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
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
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
    Author: 'Author',
    AuthorRelation: 'AuthorRelation',
    HistoryType: 'HistoryType',
    Phrase: 'Phrase'
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
      modelProps: 'author' | 'authorRelation' | 'historyType' | 'phrase'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Author: {
        payload: Prisma.$AuthorPayload<ExtArgs>
        fields: Prisma.AuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findFirst: {
            args: Prisma.AuthorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findMany: {
            args: Prisma.AuthorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          create: {
            args: Prisma.AuthorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          createMany: {
            args: Prisma.AuthorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AuthorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          update: {
            args: Prisma.AuthorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          deleteMany: {
            args: Prisma.AuthorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AuthorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAuthor>
          }
          groupBy: {
            args: Prisma.AuthorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorCountArgs<ExtArgs>,
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number
          }
        }
      }
      AuthorRelation: {
        payload: Prisma.$AuthorRelationPayload<ExtArgs>
        fields: Prisma.AuthorRelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorRelationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorRelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorRelationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorRelationPayload>
          }
          findFirst: {
            args: Prisma.AuthorRelationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorRelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorRelationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorRelationPayload>
          }
          findMany: {
            args: Prisma.AuthorRelationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorRelationPayload>[]
          }
          create: {
            args: Prisma.AuthorRelationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorRelationPayload>
          }
          createMany: {
            args: Prisma.AuthorRelationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AuthorRelationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorRelationPayload>
          }
          update: {
            args: Prisma.AuthorRelationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorRelationPayload>
          }
          deleteMany: {
            args: Prisma.AuthorRelationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorRelationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AuthorRelationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorRelationPayload>
          }
          aggregate: {
            args: Prisma.AuthorRelationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAuthorRelation>
          }
          groupBy: {
            args: Prisma.AuthorRelationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AuthorRelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorRelationCountArgs<ExtArgs>,
            result: $Utils.Optional<AuthorRelationCountAggregateOutputType> | number
          }
        }
      }
      HistoryType: {
        payload: Prisma.$HistoryTypePayload<ExtArgs>
        fields: Prisma.HistoryTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoryTypeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoryTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoryTypeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoryTypePayload>
          }
          findFirst: {
            args: Prisma.HistoryTypeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoryTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoryTypeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoryTypePayload>
          }
          findMany: {
            args: Prisma.HistoryTypeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoryTypePayload>[]
          }
          create: {
            args: Prisma.HistoryTypeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoryTypePayload>
          }
          createMany: {
            args: Prisma.HistoryTypeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HistoryTypeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoryTypePayload>
          }
          update: {
            args: Prisma.HistoryTypeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoryTypePayload>
          }
          deleteMany: {
            args: Prisma.HistoryTypeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HistoryTypeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HistoryTypeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoryTypePayload>
          }
          aggregate: {
            args: Prisma.HistoryTypeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHistoryType>
          }
          groupBy: {
            args: Prisma.HistoryTypeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HistoryTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoryTypeCountArgs<ExtArgs>,
            result: $Utils.Optional<HistoryTypeCountAggregateOutputType> | number
          }
        }
      }
      Phrase: {
        payload: Prisma.$PhrasePayload<ExtArgs>
        fields: Prisma.PhraseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhraseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhrasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhraseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhrasePayload>
          }
          findFirst: {
            args: Prisma.PhraseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhrasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhraseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhrasePayload>
          }
          findMany: {
            args: Prisma.PhraseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhrasePayload>[]
          }
          create: {
            args: Prisma.PhraseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhrasePayload>
          }
          createMany: {
            args: Prisma.PhraseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PhraseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhrasePayload>
          }
          update: {
            args: Prisma.PhraseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhrasePayload>
          }
          deleteMany: {
            args: Prisma.PhraseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PhraseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PhraseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhrasePayload>
          }
          aggregate: {
            args: Prisma.PhraseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePhrase>
          }
          groupBy: {
            args: Prisma.PhraseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PhraseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhraseCountArgs<ExtArgs>,
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
    where?: AuthorRelationWhereInput
  }


  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountAuthor_relation_author_relation_author_relationed_idToauthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorRelationWhereInput
  }


  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountPhraseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhraseWhereInput
  }



  /**
   * Count Type HistoryTypeCountOutputType
   */

  export type HistoryTypeCountOutputType = {
    author_relation: number
  }

  export type HistoryTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author_relation?: boolean | HistoryTypeCountOutputTypeCountAuthor_relationArgs
  }

  // Custom InputTypes

  /**
   * HistoryTypeCountOutputType without action
   */
  export type HistoryTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryTypeCountOutputType
     */
    select?: HistoryTypeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * HistoryTypeCountOutputType without action
   */
  export type HistoryTypeCountOutputTypeCountAuthor_relationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorRelationWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Author
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
     * Filter which Author to aggregate.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authors
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




  export type AuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorWhereInput
    orderBy?: AuthorOrderByWithAggregationInput | AuthorOrderByWithAggregationInput[]
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum
    having?: AuthorScalarWhereWithAggregatesInput
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

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> = Prisma.PrismaPromise<
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


  export type AuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    last_name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    author_relation_author_relation_author_idToauthor?: boolean | Author$author_relation_author_relation_author_idToauthorArgs<ExtArgs>
    author_relation_author_relation_author_relationed_idToauthor?: boolean | Author$author_relation_author_relation_author_relationed_idToauthorArgs<ExtArgs>
    phrase?: boolean | Author$phraseArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectScalar = {
    id?: boolean
    name?: boolean
    last_name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author_relation_author_relation_author_idToauthor?: boolean | Author$author_relation_author_relation_author_idToauthorArgs<ExtArgs>
    author_relation_author_relation_author_relationed_idToauthor?: boolean | Author$author_relation_author_relation_author_relationed_idToauthorArgs<ExtArgs>
    phrase?: boolean | Author$phraseArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Author"
    objects: {
      author_relation_author_relation_author_idToauthor: Prisma.$AuthorRelationPayload<ExtArgs>[]
      author_relation_author_relation_author_relationed_idToauthor: Prisma.$AuthorRelationPayload<ExtArgs>[]
      phrase: Prisma.$PhrasePayload<ExtArgs>[]
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


  type AuthorGetPayload<S extends boolean | null | undefined | AuthorDefaultArgs> = $Result.GetResult<Prisma.$AuthorPayload, S>

  type AuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuthorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuthorCountAggregateInputType | true
    }

  export interface AuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Author'], meta: { name: 'Author' } }
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuthorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorFindUniqueArgs<ExtArgs>>
    ): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Author that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AuthorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AuthorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuthorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorFindFirstArgs<ExtArgs>>
    ): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AuthorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    findMany<T extends AuthorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
    **/
    create<T extends AuthorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorCreateArgs<ExtArgs>>
    ): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Authors.
     *     @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     *     @example
     *     // Create many Authors
     *     const author = await prisma.author.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AuthorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
    **/
    delete<T extends AuthorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorDeleteArgs<ExtArgs>>
    ): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
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
    update<T extends AuthorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorUpdateArgs<ExtArgs>>
    ): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuthorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends AuthorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
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
    upsert<T extends AuthorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorUpsertArgs<ExtArgs>>
    ): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>,
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
     * @param {AuthorGroupByArgs} args - Group by arguments.
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
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Author model
   */
  readonly fields: AuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author_relation_author_relation_author_idToauthor<T extends Author$author_relation_author_relation_author_idToauthorArgs<ExtArgs> = {}>(args?: Subset<T, Author$author_relation_author_relation_author_idToauthorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorRelationPayload<ExtArgs>, T, 'findMany'> | Null>;

    author_relation_author_relation_author_relationed_idToauthor<T extends Author$author_relation_author_relation_author_relationed_idToauthorArgs<ExtArgs> = {}>(args?: Subset<T, Author$author_relation_author_relation_author_relationed_idToauthorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorRelationPayload<ExtArgs>, T, 'findMany'> | Null>;

    phrase<T extends Author$phraseArgs<ExtArgs> = {}>(args?: Subset<T, Author$phraseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhrasePayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Author model
   */ 
  interface AuthorFieldRefs {
    readonly id: FieldRef<"Author", 'Int'>
    readonly name: FieldRef<"Author", 'String'>
    readonly last_name: FieldRef<"Author", 'String'>
    readonly description: FieldRef<"Author", 'String'>
    readonly created_at: FieldRef<"Author", 'DateTime'>
    readonly updated_at: FieldRef<"Author", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Author findUnique
   */
  export type AuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }


  /**
   * Author findUniqueOrThrow
   */
  export type AuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }


  /**
   * Author findFirst
   */
  export type AuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }


  /**
   * Author findFirstOrThrow
   */
  export type AuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }


  /**
   * Author findMany
   */
  export type AuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }


  /**
   * Author create
   */
  export type AuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a Author.
     */
    data: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
  }


  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Author update
   */
  export type AuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a Author.
     */
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
    /**
     * Choose, which Author to update.
     */
    where: AuthorWhereUniqueInput
  }


  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
  }


  /**
   * Author upsert
   */
  export type AuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the Author to update in case it exists.
     */
    where: AuthorWhereUniqueInput
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     */
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
  }


  /**
   * Author delete
   */
  export type AuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter which Author to delete.
     */
    where: AuthorWhereUniqueInput
  }


  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authors to delete
     */
    where?: AuthorWhereInput
  }


  /**
   * Author.author_relation_author_relation_author_idToauthor
   */
  export type Author$author_relation_author_relation_author_idToauthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorRelation
     */
    select?: AuthorRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorRelationInclude<ExtArgs> | null
    where?: AuthorRelationWhereInput
    orderBy?: AuthorRelationOrderByWithRelationInput | AuthorRelationOrderByWithRelationInput[]
    cursor?: AuthorRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthorRelationScalarFieldEnum | AuthorRelationScalarFieldEnum[]
  }


  /**
   * Author.author_relation_author_relation_author_relationed_idToauthor
   */
  export type Author$author_relation_author_relation_author_relationed_idToauthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorRelation
     */
    select?: AuthorRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorRelationInclude<ExtArgs> | null
    where?: AuthorRelationWhereInput
    orderBy?: AuthorRelationOrderByWithRelationInput | AuthorRelationOrderByWithRelationInput[]
    cursor?: AuthorRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthorRelationScalarFieldEnum | AuthorRelationScalarFieldEnum[]
  }


  /**
   * Author.phrase
   */
  export type Author$phraseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phrase
     */
    select?: PhraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhraseInclude<ExtArgs> | null
    where?: PhraseWhereInput
    orderBy?: PhraseOrderByWithRelationInput | PhraseOrderByWithRelationInput[]
    cursor?: PhraseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhraseScalarFieldEnum | PhraseScalarFieldEnum[]
  }


  /**
   * Author without action
   */
  export type AuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
  }



  /**
   * Model AuthorRelation
   */

  export type AggregateAuthorRelation = {
    _count: AuthorRelationCountAggregateOutputType | null
    _avg: AuthorRelationAvgAggregateOutputType | null
    _sum: AuthorRelationSumAggregateOutputType | null
    _min: AuthorRelationMinAggregateOutputType | null
    _max: AuthorRelationMaxAggregateOutputType | null
  }

  export type AuthorRelationAvgAggregateOutputType = {
    id: number | null
    author_id: number | null
    author_relationed_id: number | null
    history_type_id: number | null
  }

  export type AuthorRelationSumAggregateOutputType = {
    id: number | null
    author_id: number | null
    author_relationed_id: number | null
    history_type_id: number | null
  }

  export type AuthorRelationMinAggregateOutputType = {
    id: number | null
    name_relation: string | null
    type_relation: string | null
    created_at: Date | null
    updated_at: Date | null
    author_id: number | null
    author_relationed_id: number | null
    history_type_id: number | null
  }

  export type AuthorRelationMaxAggregateOutputType = {
    id: number | null
    name_relation: string | null
    type_relation: string | null
    created_at: Date | null
    updated_at: Date | null
    author_id: number | null
    author_relationed_id: number | null
    history_type_id: number | null
  }

  export type AuthorRelationCountAggregateOutputType = {
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


  export type AuthorRelationAvgAggregateInputType = {
    id?: true
    author_id?: true
    author_relationed_id?: true
    history_type_id?: true
  }

  export type AuthorRelationSumAggregateInputType = {
    id?: true
    author_id?: true
    author_relationed_id?: true
    history_type_id?: true
  }

  export type AuthorRelationMinAggregateInputType = {
    id?: true
    name_relation?: true
    type_relation?: true
    created_at?: true
    updated_at?: true
    author_id?: true
    author_relationed_id?: true
    history_type_id?: true
  }

  export type AuthorRelationMaxAggregateInputType = {
    id?: true
    name_relation?: true
    type_relation?: true
    created_at?: true
    updated_at?: true
    author_id?: true
    author_relationed_id?: true
    history_type_id?: true
  }

  export type AuthorRelationCountAggregateInputType = {
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

  export type AuthorRelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthorRelation to aggregate.
     */
    where?: AuthorRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorRelations to fetch.
     */
    orderBy?: AuthorRelationOrderByWithRelationInput | AuthorRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthorRelations
    **/
    _count?: true | AuthorRelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorRelationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorRelationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorRelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorRelationMaxAggregateInputType
  }

  export type GetAuthorRelationAggregateType<T extends AuthorRelationAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthorRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthorRelation[P]>
      : GetScalarType<T[P], AggregateAuthorRelation[P]>
  }




  export type AuthorRelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorRelationWhereInput
    orderBy?: AuthorRelationOrderByWithAggregationInput | AuthorRelationOrderByWithAggregationInput[]
    by: AuthorRelationScalarFieldEnum[] | AuthorRelationScalarFieldEnum
    having?: AuthorRelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorRelationCountAggregateInputType | true
    _avg?: AuthorRelationAvgAggregateInputType
    _sum?: AuthorRelationSumAggregateInputType
    _min?: AuthorRelationMinAggregateInputType
    _max?: AuthorRelationMaxAggregateInputType
  }

  export type AuthorRelationGroupByOutputType = {
    id: number
    name_relation: string
    type_relation: string
    created_at: Date | null
    updated_at: Date | null
    author_id: number
    author_relationed_id: number
    history_type_id: number
    _count: AuthorRelationCountAggregateOutputType | null
    _avg: AuthorRelationAvgAggregateOutputType | null
    _sum: AuthorRelationSumAggregateOutputType | null
    _min: AuthorRelationMinAggregateOutputType | null
    _max: AuthorRelationMaxAggregateOutputType | null
  }

  type GetAuthorRelationGroupByPayload<T extends AuthorRelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorRelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorRelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorRelationGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorRelationGroupByOutputType[P]>
        }
      >
    >


  export type AuthorRelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_relation?: boolean
    type_relation?: boolean
    created_at?: boolean
    updated_at?: boolean
    author_id?: boolean
    author_relationed_id?: boolean
    history_type_id?: boolean
    author_author_relation_author_idToauthor?: boolean | AuthorDefaultArgs<ExtArgs>
    author_author_relation_author_relationed_idToauthor?: boolean | AuthorDefaultArgs<ExtArgs>
    history_type?: boolean | HistoryTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorRelation"]>

  export type AuthorRelationSelectScalar = {
    id?: boolean
    name_relation?: boolean
    type_relation?: boolean
    created_at?: boolean
    updated_at?: boolean
    author_id?: boolean
    author_relationed_id?: boolean
    history_type_id?: boolean
  }

  export type AuthorRelationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author_author_relation_author_idToauthor?: boolean | AuthorDefaultArgs<ExtArgs>
    author_author_relation_author_relationed_idToauthor?: boolean | AuthorDefaultArgs<ExtArgs>
    history_type?: boolean | HistoryTypeDefaultArgs<ExtArgs>
  }


  export type $AuthorRelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthorRelation"
    objects: {
      author_author_relation_author_idToauthor: Prisma.$AuthorPayload<ExtArgs>
      author_author_relation_author_relationed_idToauthor: Prisma.$AuthorPayload<ExtArgs>
      history_type: Prisma.$HistoryTypePayload<ExtArgs>
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
    }, ExtArgs["result"]["authorRelation"]>
    composites: {}
  }


  type AuthorRelationGetPayload<S extends boolean | null | undefined | AuthorRelationDefaultArgs> = $Result.GetResult<Prisma.$AuthorRelationPayload, S>

  type AuthorRelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuthorRelationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuthorRelationCountAggregateInputType | true
    }

  export interface AuthorRelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthorRelation'], meta: { name: 'AuthorRelation' } }
    /**
     * Find zero or one AuthorRelation that matches the filter.
     * @param {AuthorRelationFindUniqueArgs} args - Arguments to find a AuthorRelation
     * @example
     * // Get one AuthorRelation
     * const authorRelation = await prisma.authorRelation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuthorRelationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorRelationFindUniqueArgs<ExtArgs>>
    ): Prisma__AuthorRelationClient<$Result.GetResult<Prisma.$AuthorRelationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AuthorRelation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AuthorRelationFindUniqueOrThrowArgs} args - Arguments to find a AuthorRelation
     * @example
     * // Get one AuthorRelation
     * const authorRelation = await prisma.authorRelation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AuthorRelationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorRelationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AuthorRelationClient<$Result.GetResult<Prisma.$AuthorRelationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AuthorRelation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorRelationFindFirstArgs} args - Arguments to find a AuthorRelation
     * @example
     * // Get one AuthorRelation
     * const authorRelation = await prisma.authorRelation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuthorRelationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorRelationFindFirstArgs<ExtArgs>>
    ): Prisma__AuthorRelationClient<$Result.GetResult<Prisma.$AuthorRelationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AuthorRelation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorRelationFindFirstOrThrowArgs} args - Arguments to find a AuthorRelation
     * @example
     * // Get one AuthorRelation
     * const authorRelation = await prisma.authorRelation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AuthorRelationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorRelationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AuthorRelationClient<$Result.GetResult<Prisma.$AuthorRelationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AuthorRelations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorRelationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthorRelations
     * const authorRelations = await prisma.authorRelation.findMany()
     * 
     * // Get first 10 AuthorRelations
     * const authorRelations = await prisma.authorRelation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorRelationWithIdOnly = await prisma.authorRelation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AuthorRelationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorRelationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorRelationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AuthorRelation.
     * @param {AuthorRelationCreateArgs} args - Arguments to create a AuthorRelation.
     * @example
     * // Create one AuthorRelation
     * const AuthorRelation = await prisma.authorRelation.create({
     *   data: {
     *     // ... data to create a AuthorRelation
     *   }
     * })
     * 
    **/
    create<T extends AuthorRelationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorRelationCreateArgs<ExtArgs>>
    ): Prisma__AuthorRelationClient<$Result.GetResult<Prisma.$AuthorRelationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AuthorRelations.
     *     @param {AuthorRelationCreateManyArgs} args - Arguments to create many AuthorRelations.
     *     @example
     *     // Create many AuthorRelations
     *     const authorRelation = await prisma.authorRelation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AuthorRelationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorRelationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AuthorRelation.
     * @param {AuthorRelationDeleteArgs} args - Arguments to delete one AuthorRelation.
     * @example
     * // Delete one AuthorRelation
     * const AuthorRelation = await prisma.authorRelation.delete({
     *   where: {
     *     // ... filter to delete one AuthorRelation
     *   }
     * })
     * 
    **/
    delete<T extends AuthorRelationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorRelationDeleteArgs<ExtArgs>>
    ): Prisma__AuthorRelationClient<$Result.GetResult<Prisma.$AuthorRelationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AuthorRelation.
     * @param {AuthorRelationUpdateArgs} args - Arguments to update one AuthorRelation.
     * @example
     * // Update one AuthorRelation
     * const authorRelation = await prisma.authorRelation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AuthorRelationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorRelationUpdateArgs<ExtArgs>>
    ): Prisma__AuthorRelationClient<$Result.GetResult<Prisma.$AuthorRelationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AuthorRelations.
     * @param {AuthorRelationDeleteManyArgs} args - Arguments to filter AuthorRelations to delete.
     * @example
     * // Delete a few AuthorRelations
     * const { count } = await prisma.authorRelation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuthorRelationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorRelationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthorRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorRelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthorRelations
     * const authorRelation = await prisma.authorRelation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AuthorRelationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorRelationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuthorRelation.
     * @param {AuthorRelationUpsertArgs} args - Arguments to update or create a AuthorRelation.
     * @example
     * // Update or create a AuthorRelation
     * const authorRelation = await prisma.authorRelation.upsert({
     *   create: {
     *     // ... data to create a AuthorRelation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthorRelation we want to update
     *   }
     * })
    **/
    upsert<T extends AuthorRelationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorRelationUpsertArgs<ExtArgs>>
    ): Prisma__AuthorRelationClient<$Result.GetResult<Prisma.$AuthorRelationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AuthorRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorRelationCountArgs} args - Arguments to filter AuthorRelations to count.
     * @example
     * // Count the number of AuthorRelations
     * const count = await prisma.authorRelation.count({
     *   where: {
     *     // ... the filter for the AuthorRelations we want to count
     *   }
     * })
    **/
    count<T extends AuthorRelationCountArgs>(
      args?: Subset<T, AuthorRelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorRelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthorRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorRelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthorRelationAggregateArgs>(args: Subset<T, AuthorRelationAggregateArgs>): Prisma.PrismaPromise<GetAuthorRelationAggregateType<T>>

    /**
     * Group by AuthorRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorRelationGroupByArgs} args - Group by arguments.
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
      T extends AuthorRelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorRelationGroupByArgs['orderBy'] }
        : { orderBy?: AuthorRelationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthorRelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthorRelation model
   */
  readonly fields: AuthorRelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthorRelation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorRelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author_author_relation_author_idToauthor<T extends AuthorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthorDefaultArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    author_author_relation_author_relationed_idToauthor<T extends AuthorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthorDefaultArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    history_type<T extends HistoryTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HistoryTypeDefaultArgs<ExtArgs>>): Prisma__HistoryTypeClient<$Result.GetResult<Prisma.$HistoryTypePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the AuthorRelation model
   */ 
  interface AuthorRelationFieldRefs {
    readonly id: FieldRef<"AuthorRelation", 'Int'>
    readonly name_relation: FieldRef<"AuthorRelation", 'String'>
    readonly type_relation: FieldRef<"AuthorRelation", 'String'>
    readonly created_at: FieldRef<"AuthorRelation", 'DateTime'>
    readonly updated_at: FieldRef<"AuthorRelation", 'DateTime'>
    readonly author_id: FieldRef<"AuthorRelation", 'Int'>
    readonly author_relationed_id: FieldRef<"AuthorRelation", 'Int'>
    readonly history_type_id: FieldRef<"AuthorRelation", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * AuthorRelation findUnique
   */
  export type AuthorRelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorRelation
     */
    select?: AuthorRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorRelationInclude<ExtArgs> | null
    /**
     * Filter, which AuthorRelation to fetch.
     */
    where: AuthorRelationWhereUniqueInput
  }


  /**
   * AuthorRelation findUniqueOrThrow
   */
  export type AuthorRelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorRelation
     */
    select?: AuthorRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorRelationInclude<ExtArgs> | null
    /**
     * Filter, which AuthorRelation to fetch.
     */
    where: AuthorRelationWhereUniqueInput
  }


  /**
   * AuthorRelation findFirst
   */
  export type AuthorRelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorRelation
     */
    select?: AuthorRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorRelationInclude<ExtArgs> | null
    /**
     * Filter, which AuthorRelation to fetch.
     */
    where?: AuthorRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorRelations to fetch.
     */
    orderBy?: AuthorRelationOrderByWithRelationInput | AuthorRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthorRelations.
     */
    cursor?: AuthorRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthorRelations.
     */
    distinct?: AuthorRelationScalarFieldEnum | AuthorRelationScalarFieldEnum[]
  }


  /**
   * AuthorRelation findFirstOrThrow
   */
  export type AuthorRelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorRelation
     */
    select?: AuthorRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorRelationInclude<ExtArgs> | null
    /**
     * Filter, which AuthorRelation to fetch.
     */
    where?: AuthorRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorRelations to fetch.
     */
    orderBy?: AuthorRelationOrderByWithRelationInput | AuthorRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthorRelations.
     */
    cursor?: AuthorRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthorRelations.
     */
    distinct?: AuthorRelationScalarFieldEnum | AuthorRelationScalarFieldEnum[]
  }


  /**
   * AuthorRelation findMany
   */
  export type AuthorRelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorRelation
     */
    select?: AuthorRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorRelationInclude<ExtArgs> | null
    /**
     * Filter, which AuthorRelations to fetch.
     */
    where?: AuthorRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorRelations to fetch.
     */
    orderBy?: AuthorRelationOrderByWithRelationInput | AuthorRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthorRelations.
     */
    cursor?: AuthorRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorRelations.
     */
    skip?: number
    distinct?: AuthorRelationScalarFieldEnum | AuthorRelationScalarFieldEnum[]
  }


  /**
   * AuthorRelation create
   */
  export type AuthorRelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorRelation
     */
    select?: AuthorRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorRelationInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthorRelation.
     */
    data: XOR<AuthorRelationCreateInput, AuthorRelationUncheckedCreateInput>
  }


  /**
   * AuthorRelation createMany
   */
  export type AuthorRelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthorRelations.
     */
    data: AuthorRelationCreateManyInput | AuthorRelationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * AuthorRelation update
   */
  export type AuthorRelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorRelation
     */
    select?: AuthorRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorRelationInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthorRelation.
     */
    data: XOR<AuthorRelationUpdateInput, AuthorRelationUncheckedUpdateInput>
    /**
     * Choose, which AuthorRelation to update.
     */
    where: AuthorRelationWhereUniqueInput
  }


  /**
   * AuthorRelation updateMany
   */
  export type AuthorRelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthorRelations.
     */
    data: XOR<AuthorRelationUpdateManyMutationInput, AuthorRelationUncheckedUpdateManyInput>
    /**
     * Filter which AuthorRelations to update
     */
    where?: AuthorRelationWhereInput
  }


  /**
   * AuthorRelation upsert
   */
  export type AuthorRelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorRelation
     */
    select?: AuthorRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorRelationInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthorRelation to update in case it exists.
     */
    where: AuthorRelationWhereUniqueInput
    /**
     * In case the AuthorRelation found by the `where` argument doesn't exist, create a new AuthorRelation with this data.
     */
    create: XOR<AuthorRelationCreateInput, AuthorRelationUncheckedCreateInput>
    /**
     * In case the AuthorRelation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorRelationUpdateInput, AuthorRelationUncheckedUpdateInput>
  }


  /**
   * AuthorRelation delete
   */
  export type AuthorRelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorRelation
     */
    select?: AuthorRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorRelationInclude<ExtArgs> | null
    /**
     * Filter which AuthorRelation to delete.
     */
    where: AuthorRelationWhereUniqueInput
  }


  /**
   * AuthorRelation deleteMany
   */
  export type AuthorRelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthorRelations to delete
     */
    where?: AuthorRelationWhereInput
  }


  /**
   * AuthorRelation without action
   */
  export type AuthorRelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorRelation
     */
    select?: AuthorRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorRelationInclude<ExtArgs> | null
  }



  /**
   * Model HistoryType
   */

  export type AggregateHistoryType = {
    _count: HistoryTypeCountAggregateOutputType | null
    _avg: HistoryTypeAvgAggregateOutputType | null
    _sum: HistoryTypeSumAggregateOutputType | null
    _min: HistoryTypeMinAggregateOutputType | null
    _max: HistoryTypeMaxAggregateOutputType | null
  }

  export type HistoryTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type HistoryTypeSumAggregateOutputType = {
    id: number | null
  }

  export type HistoryTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HistoryTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HistoryTypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type HistoryTypeAvgAggregateInputType = {
    id?: true
  }

  export type HistoryTypeSumAggregateInputType = {
    id?: true
  }

  export type HistoryTypeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type HistoryTypeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type HistoryTypeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type HistoryTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoryType to aggregate.
     */
    where?: HistoryTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryTypes to fetch.
     */
    orderBy?: HistoryTypeOrderByWithRelationInput | HistoryTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoryTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoryTypes
    **/
    _count?: true | HistoryTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoryTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoryTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryTypeMaxAggregateInputType
  }

  export type GetHistoryTypeAggregateType<T extends HistoryTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoryType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoryType[P]>
      : GetScalarType<T[P], AggregateHistoryType[P]>
  }




  export type HistoryTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryTypeWhereInput
    orderBy?: HistoryTypeOrderByWithAggregationInput | HistoryTypeOrderByWithAggregationInput[]
    by: HistoryTypeScalarFieldEnum[] | HistoryTypeScalarFieldEnum
    having?: HistoryTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryTypeCountAggregateInputType | true
    _avg?: HistoryTypeAvgAggregateInputType
    _sum?: HistoryTypeSumAggregateInputType
    _min?: HistoryTypeMinAggregateInputType
    _max?: HistoryTypeMaxAggregateInputType
  }

  export type HistoryTypeGroupByOutputType = {
    id: number
    name: string
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: HistoryTypeCountAggregateOutputType | null
    _avg: HistoryTypeAvgAggregateOutputType | null
    _sum: HistoryTypeSumAggregateOutputType | null
    _min: HistoryTypeMinAggregateOutputType | null
    _max: HistoryTypeMaxAggregateOutputType | null
  }

  type GetHistoryTypeGroupByPayload<T extends HistoryTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryTypeGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryTypeGroupByOutputType[P]>
        }
      >
    >


  export type HistoryTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    author_relation?: boolean | HistoryType$author_relationArgs<ExtArgs>
    _count?: boolean | HistoryTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historyType"]>

  export type HistoryTypeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type HistoryTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author_relation?: boolean | HistoryType$author_relationArgs<ExtArgs>
    _count?: boolean | HistoryTypeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $HistoryTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoryType"
    objects: {
      author_relation: Prisma.$AuthorRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["historyType"]>
    composites: {}
  }


  type HistoryTypeGetPayload<S extends boolean | null | undefined | HistoryTypeDefaultArgs> = $Result.GetResult<Prisma.$HistoryTypePayload, S>

  type HistoryTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HistoryTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HistoryTypeCountAggregateInputType | true
    }

  export interface HistoryTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoryType'], meta: { name: 'HistoryType' } }
    /**
     * Find zero or one HistoryType that matches the filter.
     * @param {HistoryTypeFindUniqueArgs} args - Arguments to find a HistoryType
     * @example
     * // Get one HistoryType
     * const historyType = await prisma.historyType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HistoryTypeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HistoryTypeFindUniqueArgs<ExtArgs>>
    ): Prisma__HistoryTypeClient<$Result.GetResult<Prisma.$HistoryTypePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one HistoryType that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HistoryTypeFindUniqueOrThrowArgs} args - Arguments to find a HistoryType
     * @example
     * // Get one HistoryType
     * const historyType = await prisma.historyType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HistoryTypeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HistoryTypeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HistoryTypeClient<$Result.GetResult<Prisma.$HistoryTypePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first HistoryType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryTypeFindFirstArgs} args - Arguments to find a HistoryType
     * @example
     * // Get one HistoryType
     * const historyType = await prisma.historyType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HistoryTypeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HistoryTypeFindFirstArgs<ExtArgs>>
    ): Prisma__HistoryTypeClient<$Result.GetResult<Prisma.$HistoryTypePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first HistoryType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryTypeFindFirstOrThrowArgs} args - Arguments to find a HistoryType
     * @example
     * // Get one HistoryType
     * const historyType = await prisma.historyType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HistoryTypeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HistoryTypeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HistoryTypeClient<$Result.GetResult<Prisma.$HistoryTypePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more HistoryTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoryTypes
     * const historyTypes = await prisma.historyType.findMany()
     * 
     * // Get first 10 HistoryTypes
     * const historyTypes = await prisma.historyType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historyTypeWithIdOnly = await prisma.historyType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HistoryTypeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HistoryTypeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryTypePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a HistoryType.
     * @param {HistoryTypeCreateArgs} args - Arguments to create a HistoryType.
     * @example
     * // Create one HistoryType
     * const HistoryType = await prisma.historyType.create({
     *   data: {
     *     // ... data to create a HistoryType
     *   }
     * })
     * 
    **/
    create<T extends HistoryTypeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HistoryTypeCreateArgs<ExtArgs>>
    ): Prisma__HistoryTypeClient<$Result.GetResult<Prisma.$HistoryTypePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many HistoryTypes.
     *     @param {HistoryTypeCreateManyArgs} args - Arguments to create many HistoryTypes.
     *     @example
     *     // Create many HistoryTypes
     *     const historyType = await prisma.historyType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HistoryTypeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HistoryTypeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HistoryType.
     * @param {HistoryTypeDeleteArgs} args - Arguments to delete one HistoryType.
     * @example
     * // Delete one HistoryType
     * const HistoryType = await prisma.historyType.delete({
     *   where: {
     *     // ... filter to delete one HistoryType
     *   }
     * })
     * 
    **/
    delete<T extends HistoryTypeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HistoryTypeDeleteArgs<ExtArgs>>
    ): Prisma__HistoryTypeClient<$Result.GetResult<Prisma.$HistoryTypePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one HistoryType.
     * @param {HistoryTypeUpdateArgs} args - Arguments to update one HistoryType.
     * @example
     * // Update one HistoryType
     * const historyType = await prisma.historyType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HistoryTypeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HistoryTypeUpdateArgs<ExtArgs>>
    ): Prisma__HistoryTypeClient<$Result.GetResult<Prisma.$HistoryTypePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more HistoryTypes.
     * @param {HistoryTypeDeleteManyArgs} args - Arguments to filter HistoryTypes to delete.
     * @example
     * // Delete a few HistoryTypes
     * const { count } = await prisma.historyType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HistoryTypeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HistoryTypeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoryTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoryTypes
     * const historyType = await prisma.historyType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HistoryTypeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HistoryTypeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HistoryType.
     * @param {HistoryTypeUpsertArgs} args - Arguments to update or create a HistoryType.
     * @example
     * // Update or create a HistoryType
     * const historyType = await prisma.historyType.upsert({
     *   create: {
     *     // ... data to create a HistoryType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoryType we want to update
     *   }
     * })
    **/
    upsert<T extends HistoryTypeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HistoryTypeUpsertArgs<ExtArgs>>
    ): Prisma__HistoryTypeClient<$Result.GetResult<Prisma.$HistoryTypePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of HistoryTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryTypeCountArgs} args - Arguments to filter HistoryTypes to count.
     * @example
     * // Count the number of HistoryTypes
     * const count = await prisma.historyType.count({
     *   where: {
     *     // ... the filter for the HistoryTypes we want to count
     *   }
     * })
    **/
    count<T extends HistoryTypeCountArgs>(
      args?: Subset<T, HistoryTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoryType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoryTypeAggregateArgs>(args: Subset<T, HistoryTypeAggregateArgs>): Prisma.PrismaPromise<GetHistoryTypeAggregateType<T>>

    /**
     * Group by HistoryType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryTypeGroupByArgs} args - Group by arguments.
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
      T extends HistoryTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoryTypeGroupByArgs['orderBy'] }
        : { orderBy?: HistoryTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoryTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoryType model
   */
  readonly fields: HistoryTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoryType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoryTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author_relation<T extends HistoryType$author_relationArgs<ExtArgs> = {}>(args?: Subset<T, HistoryType$author_relationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorRelationPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the HistoryType model
   */ 
  interface HistoryTypeFieldRefs {
    readonly id: FieldRef<"HistoryType", 'Int'>
    readonly name: FieldRef<"HistoryType", 'String'>
    readonly description: FieldRef<"HistoryType", 'String'>
    readonly created_at: FieldRef<"HistoryType", 'DateTime'>
    readonly updated_at: FieldRef<"HistoryType", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * HistoryType findUnique
   */
  export type HistoryTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryType
     */
    select?: HistoryTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoryTypeInclude<ExtArgs> | null
    /**
     * Filter, which HistoryType to fetch.
     */
    where: HistoryTypeWhereUniqueInput
  }


  /**
   * HistoryType findUniqueOrThrow
   */
  export type HistoryTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryType
     */
    select?: HistoryTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoryTypeInclude<ExtArgs> | null
    /**
     * Filter, which HistoryType to fetch.
     */
    where: HistoryTypeWhereUniqueInput
  }


  /**
   * HistoryType findFirst
   */
  export type HistoryTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryType
     */
    select?: HistoryTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoryTypeInclude<ExtArgs> | null
    /**
     * Filter, which HistoryType to fetch.
     */
    where?: HistoryTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryTypes to fetch.
     */
    orderBy?: HistoryTypeOrderByWithRelationInput | HistoryTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoryTypes.
     */
    cursor?: HistoryTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoryTypes.
     */
    distinct?: HistoryTypeScalarFieldEnum | HistoryTypeScalarFieldEnum[]
  }


  /**
   * HistoryType findFirstOrThrow
   */
  export type HistoryTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryType
     */
    select?: HistoryTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoryTypeInclude<ExtArgs> | null
    /**
     * Filter, which HistoryType to fetch.
     */
    where?: HistoryTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryTypes to fetch.
     */
    orderBy?: HistoryTypeOrderByWithRelationInput | HistoryTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoryTypes.
     */
    cursor?: HistoryTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoryTypes.
     */
    distinct?: HistoryTypeScalarFieldEnum | HistoryTypeScalarFieldEnum[]
  }


  /**
   * HistoryType findMany
   */
  export type HistoryTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryType
     */
    select?: HistoryTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoryTypeInclude<ExtArgs> | null
    /**
     * Filter, which HistoryTypes to fetch.
     */
    where?: HistoryTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryTypes to fetch.
     */
    orderBy?: HistoryTypeOrderByWithRelationInput | HistoryTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoryTypes.
     */
    cursor?: HistoryTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryTypes.
     */
    skip?: number
    distinct?: HistoryTypeScalarFieldEnum | HistoryTypeScalarFieldEnum[]
  }


  /**
   * HistoryType create
   */
  export type HistoryTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryType
     */
    select?: HistoryTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoryTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoryType.
     */
    data: XOR<HistoryTypeCreateInput, HistoryTypeUncheckedCreateInput>
  }


  /**
   * HistoryType createMany
   */
  export type HistoryTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoryTypes.
     */
    data: HistoryTypeCreateManyInput | HistoryTypeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * HistoryType update
   */
  export type HistoryTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryType
     */
    select?: HistoryTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoryTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoryType.
     */
    data: XOR<HistoryTypeUpdateInput, HistoryTypeUncheckedUpdateInput>
    /**
     * Choose, which HistoryType to update.
     */
    where: HistoryTypeWhereUniqueInput
  }


  /**
   * HistoryType updateMany
   */
  export type HistoryTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoryTypes.
     */
    data: XOR<HistoryTypeUpdateManyMutationInput, HistoryTypeUncheckedUpdateManyInput>
    /**
     * Filter which HistoryTypes to update
     */
    where?: HistoryTypeWhereInput
  }


  /**
   * HistoryType upsert
   */
  export type HistoryTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryType
     */
    select?: HistoryTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoryTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoryType to update in case it exists.
     */
    where: HistoryTypeWhereUniqueInput
    /**
     * In case the HistoryType found by the `where` argument doesn't exist, create a new HistoryType with this data.
     */
    create: XOR<HistoryTypeCreateInput, HistoryTypeUncheckedCreateInput>
    /**
     * In case the HistoryType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoryTypeUpdateInput, HistoryTypeUncheckedUpdateInput>
  }


  /**
   * HistoryType delete
   */
  export type HistoryTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryType
     */
    select?: HistoryTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoryTypeInclude<ExtArgs> | null
    /**
     * Filter which HistoryType to delete.
     */
    where: HistoryTypeWhereUniqueInput
  }


  /**
   * HistoryType deleteMany
   */
  export type HistoryTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoryTypes to delete
     */
    where?: HistoryTypeWhereInput
  }


  /**
   * HistoryType.author_relation
   */
  export type HistoryType$author_relationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorRelation
     */
    select?: AuthorRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorRelationInclude<ExtArgs> | null
    where?: AuthorRelationWhereInput
    orderBy?: AuthorRelationOrderByWithRelationInput | AuthorRelationOrderByWithRelationInput[]
    cursor?: AuthorRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthorRelationScalarFieldEnum | AuthorRelationScalarFieldEnum[]
  }


  /**
   * HistoryType without action
   */
  export type HistoryTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryType
     */
    select?: HistoryTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoryTypeInclude<ExtArgs> | null
  }



  /**
   * Model Phrase
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
     * Filter which Phrase to aggregate.
     */
    where?: PhraseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phrases to fetch.
     */
    orderBy?: PhraseOrderByWithRelationInput | PhraseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhraseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phrases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phrases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Phrases
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




  export type PhraseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhraseWhereInput
    orderBy?: PhraseOrderByWithAggregationInput | PhraseOrderByWithAggregationInput[]
    by: PhraseScalarFieldEnum[] | PhraseScalarFieldEnum
    having?: PhraseScalarWhereWithAggregatesInput
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

  type GetPhraseGroupByPayload<T extends PhraseGroupByArgs> = Prisma.PrismaPromise<
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


  export type PhraseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phrase?: boolean
    date?: boolean
    created_at?: boolean
    updated_at?: boolean
    author_id?: boolean
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phrase"]>

  export type PhraseSelectScalar = {
    id?: boolean
    phrase?: boolean
    date?: boolean
    created_at?: boolean
    updated_at?: boolean
    author_id?: boolean
  }

  export type PhraseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }


  export type $PhrasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Phrase"
    objects: {
      author: Prisma.$AuthorPayload<ExtArgs>
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


  type PhraseGetPayload<S extends boolean | null | undefined | PhraseDefaultArgs> = $Result.GetResult<Prisma.$PhrasePayload, S>

  type PhraseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PhraseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PhraseCountAggregateInputType | true
    }

  export interface PhraseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Phrase'], meta: { name: 'Phrase' } }
    /**
     * Find zero or one Phrase that matches the filter.
     * @param {PhraseFindUniqueArgs} args - Arguments to find a Phrase
     * @example
     * // Get one Phrase
     * const phrase = await prisma.phrase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PhraseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PhraseFindUniqueArgs<ExtArgs>>
    ): Prisma__PhraseClient<$Result.GetResult<Prisma.$PhrasePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Phrase that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PhraseFindUniqueOrThrowArgs} args - Arguments to find a Phrase
     * @example
     * // Get one Phrase
     * const phrase = await prisma.phrase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PhraseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PhraseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PhraseClient<$Result.GetResult<Prisma.$PhrasePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Phrase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhraseFindFirstArgs} args - Arguments to find a Phrase
     * @example
     * // Get one Phrase
     * const phrase = await prisma.phrase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PhraseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PhraseFindFirstArgs<ExtArgs>>
    ): Prisma__PhraseClient<$Result.GetResult<Prisma.$PhrasePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Phrase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhraseFindFirstOrThrowArgs} args - Arguments to find a Phrase
     * @example
     * // Get one Phrase
     * const phrase = await prisma.phrase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PhraseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PhraseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PhraseClient<$Result.GetResult<Prisma.$PhrasePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Phrases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhraseFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    findMany<T extends PhraseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhraseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhrasePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Phrase.
     * @param {PhraseCreateArgs} args - Arguments to create a Phrase.
     * @example
     * // Create one Phrase
     * const Phrase = await prisma.phrase.create({
     *   data: {
     *     // ... data to create a Phrase
     *   }
     * })
     * 
    **/
    create<T extends PhraseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PhraseCreateArgs<ExtArgs>>
    ): Prisma__PhraseClient<$Result.GetResult<Prisma.$PhrasePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Phrases.
     *     @param {PhraseCreateManyArgs} args - Arguments to create many Phrases.
     *     @example
     *     // Create many Phrases
     *     const phrase = await prisma.phrase.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PhraseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhraseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Phrase.
     * @param {PhraseDeleteArgs} args - Arguments to delete one Phrase.
     * @example
     * // Delete one Phrase
     * const Phrase = await prisma.phrase.delete({
     *   where: {
     *     // ... filter to delete one Phrase
     *   }
     * })
     * 
    **/
    delete<T extends PhraseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PhraseDeleteArgs<ExtArgs>>
    ): Prisma__PhraseClient<$Result.GetResult<Prisma.$PhrasePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Phrase.
     * @param {PhraseUpdateArgs} args - Arguments to update one Phrase.
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
    update<T extends PhraseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PhraseUpdateArgs<ExtArgs>>
    ): Prisma__PhraseClient<$Result.GetResult<Prisma.$PhrasePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Phrases.
     * @param {PhraseDeleteManyArgs} args - Arguments to filter Phrases to delete.
     * @example
     * // Delete a few Phrases
     * const { count } = await prisma.phrase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PhraseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhraseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phrases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhraseUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends PhraseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PhraseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Phrase.
     * @param {PhraseUpsertArgs} args - Arguments to update or create a Phrase.
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
    upsert<T extends PhraseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PhraseUpsertArgs<ExtArgs>>
    ): Prisma__PhraseClient<$Result.GetResult<Prisma.$PhrasePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Phrases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhraseCountArgs} args - Arguments to filter Phrases to count.
     * @example
     * // Count the number of Phrases
     * const count = await prisma.phrase.count({
     *   where: {
     *     // ... the filter for the Phrases we want to count
     *   }
     * })
    **/
    count<T extends PhraseCountArgs>(
      args?: Subset<T, PhraseCountArgs>,
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
     * @param {PhraseGroupByArgs} args - Group by arguments.
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
      T extends PhraseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhraseGroupByArgs['orderBy'] }
        : { orderBy?: PhraseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhraseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhraseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Phrase model
   */
  readonly fields: PhraseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Phrase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhraseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends AuthorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthorDefaultArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Phrase model
   */ 
  interface PhraseFieldRefs {
    readonly id: FieldRef<"Phrase", 'Int'>
    readonly phrase: FieldRef<"Phrase", 'String'>
    readonly date: FieldRef<"Phrase", 'DateTime'>
    readonly created_at: FieldRef<"Phrase", 'DateTime'>
    readonly updated_at: FieldRef<"Phrase", 'DateTime'>
    readonly author_id: FieldRef<"Phrase", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Phrase findUnique
   */
  export type PhraseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phrase
     */
    select?: PhraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhraseInclude<ExtArgs> | null
    /**
     * Filter, which Phrase to fetch.
     */
    where: PhraseWhereUniqueInput
  }


  /**
   * Phrase findUniqueOrThrow
   */
  export type PhraseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phrase
     */
    select?: PhraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhraseInclude<ExtArgs> | null
    /**
     * Filter, which Phrase to fetch.
     */
    where: PhraseWhereUniqueInput
  }


  /**
   * Phrase findFirst
   */
  export type PhraseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phrase
     */
    select?: PhraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhraseInclude<ExtArgs> | null
    /**
     * Filter, which Phrase to fetch.
     */
    where?: PhraseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phrases to fetch.
     */
    orderBy?: PhraseOrderByWithRelationInput | PhraseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phrases.
     */
    cursor?: PhraseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phrases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phrases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phrases.
     */
    distinct?: PhraseScalarFieldEnum | PhraseScalarFieldEnum[]
  }


  /**
   * Phrase findFirstOrThrow
   */
  export type PhraseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phrase
     */
    select?: PhraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhraseInclude<ExtArgs> | null
    /**
     * Filter, which Phrase to fetch.
     */
    where?: PhraseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phrases to fetch.
     */
    orderBy?: PhraseOrderByWithRelationInput | PhraseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phrases.
     */
    cursor?: PhraseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phrases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phrases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phrases.
     */
    distinct?: PhraseScalarFieldEnum | PhraseScalarFieldEnum[]
  }


  /**
   * Phrase findMany
   */
  export type PhraseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phrase
     */
    select?: PhraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhraseInclude<ExtArgs> | null
    /**
     * Filter, which Phrases to fetch.
     */
    where?: PhraseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phrases to fetch.
     */
    orderBy?: PhraseOrderByWithRelationInput | PhraseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Phrases.
     */
    cursor?: PhraseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phrases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phrases.
     */
    skip?: number
    distinct?: PhraseScalarFieldEnum | PhraseScalarFieldEnum[]
  }


  /**
   * Phrase create
   */
  export type PhraseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phrase
     */
    select?: PhraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhraseInclude<ExtArgs> | null
    /**
     * The data needed to create a Phrase.
     */
    data: XOR<PhraseCreateInput, PhraseUncheckedCreateInput>
  }


  /**
   * Phrase createMany
   */
  export type PhraseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Phrases.
     */
    data: PhraseCreateManyInput | PhraseCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Phrase update
   */
  export type PhraseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phrase
     */
    select?: PhraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhraseInclude<ExtArgs> | null
    /**
     * The data needed to update a Phrase.
     */
    data: XOR<PhraseUpdateInput, PhraseUncheckedUpdateInput>
    /**
     * Choose, which Phrase to update.
     */
    where: PhraseWhereUniqueInput
  }


  /**
   * Phrase updateMany
   */
  export type PhraseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Phrases.
     */
    data: XOR<PhraseUpdateManyMutationInput, PhraseUncheckedUpdateManyInput>
    /**
     * Filter which Phrases to update
     */
    where?: PhraseWhereInput
  }


  /**
   * Phrase upsert
   */
  export type PhraseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phrase
     */
    select?: PhraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhraseInclude<ExtArgs> | null
    /**
     * The filter to search for the Phrase to update in case it exists.
     */
    where: PhraseWhereUniqueInput
    /**
     * In case the Phrase found by the `where` argument doesn't exist, create a new Phrase with this data.
     */
    create: XOR<PhraseCreateInput, PhraseUncheckedCreateInput>
    /**
     * In case the Phrase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhraseUpdateInput, PhraseUncheckedUpdateInput>
  }


  /**
   * Phrase delete
   */
  export type PhraseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phrase
     */
    select?: PhraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhraseInclude<ExtArgs> | null
    /**
     * Filter which Phrase to delete.
     */
    where: PhraseWhereUniqueInput
  }


  /**
   * Phrase deleteMany
   */
  export type PhraseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Phrases to delete
     */
    where?: PhraseWhereInput
  }


  /**
   * Phrase without action
   */
  export type PhraseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phrase
     */
    select?: PhraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhraseInclude<ExtArgs> | null
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


  export const AuthorRelationScalarFieldEnum: {
    id: 'id',
    name_relation: 'name_relation',
    type_relation: 'type_relation',
    created_at: 'created_at',
    updated_at: 'updated_at',
    author_id: 'author_id',
    author_relationed_id: 'author_relationed_id',
    history_type_id: 'history_type_id'
  };

  export type AuthorRelationScalarFieldEnum = (typeof AuthorRelationScalarFieldEnum)[keyof typeof AuthorRelationScalarFieldEnum]


  export const HistoryTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type HistoryTypeScalarFieldEnum = (typeof HistoryTypeScalarFieldEnum)[keyof typeof HistoryTypeScalarFieldEnum]


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


  export type AuthorWhereInput = {
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    id?: IntFilter<"Author"> | number
    name?: StringFilter<"Author"> | string
    last_name?: StringNullableFilter<"Author"> | string | null
    description?: StringNullableFilter<"Author"> | string | null
    created_at?: DateTimeNullableFilter<"Author"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Author"> | Date | string | null
    author_relation_author_relation_author_idToauthor?: AuthorRelationListRelationFilter
    author_relation_author_relation_author_relationed_idToauthor?: AuthorRelationListRelationFilter
    phrase?: PhraseListRelationFilter
  }

  export type AuthorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    author_relation_author_relation_author_idToauthor?: AuthorRelationOrderByRelationAggregateInput
    author_relation_author_relation_author_relationed_idToauthor?: AuthorRelationOrderByRelationAggregateInput
    phrase?: PhraseOrderByRelationAggregateInput
  }

  export type AuthorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    name?: StringFilter<"Author"> | string
    last_name?: StringNullableFilter<"Author"> | string | null
    description?: StringNullableFilter<"Author"> | string | null
    created_at?: DateTimeNullableFilter<"Author"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Author"> | Date | string | null
    author_relation_author_relation_author_idToauthor?: AuthorRelationListRelationFilter
    author_relation_author_relation_author_relationed_idToauthor?: AuthorRelationListRelationFilter
    phrase?: PhraseListRelationFilter
  }, "id" | "id">

  export type AuthorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: AuthorCountOrderByAggregateInput
    _avg?: AuthorAvgOrderByAggregateInput
    _max?: AuthorMaxOrderByAggregateInput
    _min?: AuthorMinOrderByAggregateInput
    _sum?: AuthorSumOrderByAggregateInput
  }

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    OR?: AuthorScalarWhereWithAggregatesInput[]
    NOT?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Author"> | number
    name?: StringWithAggregatesFilter<"Author"> | string
    last_name?: StringNullableWithAggregatesFilter<"Author"> | string | null
    description?: StringNullableWithAggregatesFilter<"Author"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Author"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Author"> | Date | string | null
  }

  export type AuthorRelationWhereInput = {
    AND?: AuthorRelationWhereInput | AuthorRelationWhereInput[]
    OR?: AuthorRelationWhereInput[]
    NOT?: AuthorRelationWhereInput | AuthorRelationWhereInput[]
    id?: IntFilter<"AuthorRelation"> | number
    name_relation?: StringFilter<"AuthorRelation"> | string
    type_relation?: StringFilter<"AuthorRelation"> | string
    created_at?: DateTimeNullableFilter<"AuthorRelation"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"AuthorRelation"> | Date | string | null
    author_id?: IntFilter<"AuthorRelation"> | number
    author_relationed_id?: IntFilter<"AuthorRelation"> | number
    history_type_id?: IntFilter<"AuthorRelation"> | number
    author_author_relation_author_idToauthor?: XOR<AuthorRelationFilter, AuthorWhereInput>
    author_author_relation_author_relationed_idToauthor?: XOR<AuthorRelationFilter, AuthorWhereInput>
    history_type?: XOR<HistoryTypeRelationFilter, HistoryTypeWhereInput>
  }

  export type AuthorRelationOrderByWithRelationInput = {
    id?: SortOrder
    name_relation?: SortOrder
    type_relation?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    author_id?: SortOrder
    author_relationed_id?: SortOrder
    history_type_id?: SortOrder
    author_author_relation_author_idToauthor?: AuthorOrderByWithRelationInput
    author_author_relation_author_relationed_idToauthor?: AuthorOrderByWithRelationInput
    history_type?: HistoryTypeOrderByWithRelationInput
  }

  export type AuthorRelationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuthorRelationWhereInput | AuthorRelationWhereInput[]
    OR?: AuthorRelationWhereInput[]
    NOT?: AuthorRelationWhereInput | AuthorRelationWhereInput[]
    name_relation?: StringFilter<"AuthorRelation"> | string
    type_relation?: StringFilter<"AuthorRelation"> | string
    created_at?: DateTimeNullableFilter<"AuthorRelation"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"AuthorRelation"> | Date | string | null
    author_id?: IntFilter<"AuthorRelation"> | number
    author_relationed_id?: IntFilter<"AuthorRelation"> | number
    history_type_id?: IntFilter<"AuthorRelation"> | number
    author_author_relation_author_idToauthor?: XOR<AuthorRelationFilter, AuthorWhereInput>
    author_author_relation_author_relationed_idToauthor?: XOR<AuthorRelationFilter, AuthorWhereInput>
    history_type?: XOR<HistoryTypeRelationFilter, HistoryTypeWhereInput>
  }, "id" | "id">

  export type AuthorRelationOrderByWithAggregationInput = {
    id?: SortOrder
    name_relation?: SortOrder
    type_relation?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    author_id?: SortOrder
    author_relationed_id?: SortOrder
    history_type_id?: SortOrder
    _count?: AuthorRelationCountOrderByAggregateInput
    _avg?: AuthorRelationAvgOrderByAggregateInput
    _max?: AuthorRelationMaxOrderByAggregateInput
    _min?: AuthorRelationMinOrderByAggregateInput
    _sum?: AuthorRelationSumOrderByAggregateInput
  }

  export type AuthorRelationScalarWhereWithAggregatesInput = {
    AND?: AuthorRelationScalarWhereWithAggregatesInput | AuthorRelationScalarWhereWithAggregatesInput[]
    OR?: AuthorRelationScalarWhereWithAggregatesInput[]
    NOT?: AuthorRelationScalarWhereWithAggregatesInput | AuthorRelationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AuthorRelation"> | number
    name_relation?: StringWithAggregatesFilter<"AuthorRelation"> | string
    type_relation?: StringWithAggregatesFilter<"AuthorRelation"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"AuthorRelation"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"AuthorRelation"> | Date | string | null
    author_id?: IntWithAggregatesFilter<"AuthorRelation"> | number
    author_relationed_id?: IntWithAggregatesFilter<"AuthorRelation"> | number
    history_type_id?: IntWithAggregatesFilter<"AuthorRelation"> | number
  }

  export type HistoryTypeWhereInput = {
    AND?: HistoryTypeWhereInput | HistoryTypeWhereInput[]
    OR?: HistoryTypeWhereInput[]
    NOT?: HistoryTypeWhereInput | HistoryTypeWhereInput[]
    id?: IntFilter<"HistoryType"> | number
    name?: StringFilter<"HistoryType"> | string
    description?: StringNullableFilter<"HistoryType"> | string | null
    created_at?: DateTimeNullableFilter<"HistoryType"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"HistoryType"> | Date | string | null
    author_relation?: AuthorRelationListRelationFilter
  }

  export type HistoryTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    author_relation?: AuthorRelationOrderByRelationAggregateInput
  }

  export type HistoryTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HistoryTypeWhereInput | HistoryTypeWhereInput[]
    OR?: HistoryTypeWhereInput[]
    NOT?: HistoryTypeWhereInput | HistoryTypeWhereInput[]
    name?: StringFilter<"HistoryType"> | string
    description?: StringNullableFilter<"HistoryType"> | string | null
    created_at?: DateTimeNullableFilter<"HistoryType"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"HistoryType"> | Date | string | null
    author_relation?: AuthorRelationListRelationFilter
  }, "id" | "id">

  export type HistoryTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: HistoryTypeCountOrderByAggregateInput
    _avg?: HistoryTypeAvgOrderByAggregateInput
    _max?: HistoryTypeMaxOrderByAggregateInput
    _min?: HistoryTypeMinOrderByAggregateInput
    _sum?: HistoryTypeSumOrderByAggregateInput
  }

  export type HistoryTypeScalarWhereWithAggregatesInput = {
    AND?: HistoryTypeScalarWhereWithAggregatesInput | HistoryTypeScalarWhereWithAggregatesInput[]
    OR?: HistoryTypeScalarWhereWithAggregatesInput[]
    NOT?: HistoryTypeScalarWhereWithAggregatesInput | HistoryTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HistoryType"> | number
    name?: StringWithAggregatesFilter<"HistoryType"> | string
    description?: StringNullableWithAggregatesFilter<"HistoryType"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"HistoryType"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"HistoryType"> | Date | string | null
  }

  export type PhraseWhereInput = {
    AND?: PhraseWhereInput | PhraseWhereInput[]
    OR?: PhraseWhereInput[]
    NOT?: PhraseWhereInput | PhraseWhereInput[]
    id?: IntFilter<"Phrase"> | number
    phrase?: StringFilter<"Phrase"> | string
    date?: DateTimeNullableFilter<"Phrase"> | Date | string | null
    created_at?: DateTimeNullableFilter<"Phrase"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Phrase"> | Date | string | null
    author_id?: IntFilter<"Phrase"> | number
    author?: XOR<AuthorRelationFilter, AuthorWhereInput>
  }

  export type PhraseOrderByWithRelationInput = {
    id?: SortOrder
    phrase?: SortOrder
    date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    author_id?: SortOrder
    author?: AuthorOrderByWithRelationInput
  }

  export type PhraseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PhraseWhereInput | PhraseWhereInput[]
    OR?: PhraseWhereInput[]
    NOT?: PhraseWhereInput | PhraseWhereInput[]
    phrase?: StringFilter<"Phrase"> | string
    date?: DateTimeNullableFilter<"Phrase"> | Date | string | null
    created_at?: DateTimeNullableFilter<"Phrase"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Phrase"> | Date | string | null
    author_id?: IntFilter<"Phrase"> | number
    author?: XOR<AuthorRelationFilter, AuthorWhereInput>
  }, "id" | "id">

  export type PhraseOrderByWithAggregationInput = {
    id?: SortOrder
    phrase?: SortOrder
    date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    author_id?: SortOrder
    _count?: PhraseCountOrderByAggregateInput
    _avg?: PhraseAvgOrderByAggregateInput
    _max?: PhraseMaxOrderByAggregateInput
    _min?: PhraseMinOrderByAggregateInput
    _sum?: PhraseSumOrderByAggregateInput
  }

  export type PhraseScalarWhereWithAggregatesInput = {
    AND?: PhraseScalarWhereWithAggregatesInput | PhraseScalarWhereWithAggregatesInput[]
    OR?: PhraseScalarWhereWithAggregatesInput[]
    NOT?: PhraseScalarWhereWithAggregatesInput | PhraseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Phrase"> | number
    phrase?: StringWithAggregatesFilter<"Phrase"> | string
    date?: DateTimeNullableWithAggregatesFilter<"Phrase"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Phrase"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Phrase"> | Date | string | null
    author_id?: IntWithAggregatesFilter<"Phrase"> | number
  }

  export type AuthorCreateInput = {
    name: string
    last_name?: string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_relation_author_relation_author_idToauthor?: AuthorRelationCreateNestedManyWithoutAuthor_author_relation_author_idToauthorInput
    author_relation_author_relation_author_relationed_idToauthor?: AuthorRelationCreateNestedManyWithoutAuthor_author_relation_author_relationed_idToauthorInput
    phrase?: PhraseCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateInput = {
    id?: number
    name: string
    last_name?: string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_relation_author_relation_author_idToauthor?: AuthorRelationUncheckedCreateNestedManyWithoutAuthor_author_relation_author_idToauthorInput
    author_relation_author_relation_author_relationed_idToauthor?: AuthorRelationUncheckedCreateNestedManyWithoutAuthor_author_relation_author_relationed_idToauthorInput
    phrase?: PhraseUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_relation_author_relation_author_idToauthor?: AuthorRelationUpdateManyWithoutAuthor_author_relation_author_idToauthorNestedInput
    author_relation_author_relation_author_relationed_idToauthor?: AuthorRelationUpdateManyWithoutAuthor_author_relation_author_relationed_idToauthorNestedInput
    phrase?: PhraseUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_relation_author_relation_author_idToauthor?: AuthorRelationUncheckedUpdateManyWithoutAuthor_author_relation_author_idToauthorNestedInput
    author_relation_author_relation_author_relationed_idToauthor?: AuthorRelationUncheckedUpdateManyWithoutAuthor_author_relation_author_relationed_idToauthorNestedInput
    phrase?: PhraseUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorCreateManyInput = {
    id?: number
    name: string
    last_name?: string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type AuthorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuthorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuthorRelationCreateInput = {
    name_relation: string
    type_relation: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_author_relation_author_idToauthor: AuthorCreateNestedOneWithoutAuthor_relation_author_relation_author_idToauthorInput
    author_author_relation_author_relationed_idToauthor: AuthorCreateNestedOneWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput
    history_type: HistoryTypeCreateNestedOneWithoutAuthor_relationInput
  }

  export type AuthorRelationUncheckedCreateInput = {
    id?: number
    name_relation: string
    type_relation: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_id: number
    author_relationed_id: number
    history_type_id: number
  }

  export type AuthorRelationUpdateInput = {
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_author_relation_author_idToauthor?: AuthorUpdateOneRequiredWithoutAuthor_relation_author_relation_author_idToauthorNestedInput
    author_author_relation_author_relationed_idToauthor?: AuthorUpdateOneRequiredWithoutAuthor_relation_author_relation_author_relationed_idToauthorNestedInput
    history_type?: HistoryTypeUpdateOneRequiredWithoutAuthor_relationNestedInput
  }

  export type AuthorRelationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_id?: IntFieldUpdateOperationsInput | number
    author_relationed_id?: IntFieldUpdateOperationsInput | number
    history_type_id?: IntFieldUpdateOperationsInput | number
  }

  export type AuthorRelationCreateManyInput = {
    id?: number
    name_relation: string
    type_relation: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_id: number
    author_relationed_id: number
    history_type_id: number
  }

  export type AuthorRelationUpdateManyMutationInput = {
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuthorRelationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_id?: IntFieldUpdateOperationsInput | number
    author_relationed_id?: IntFieldUpdateOperationsInput | number
    history_type_id?: IntFieldUpdateOperationsInput | number
  }

  export type HistoryTypeCreateInput = {
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_relation?: AuthorRelationCreateNestedManyWithoutHistory_typeInput
  }

  export type HistoryTypeUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_relation?: AuthorRelationUncheckedCreateNestedManyWithoutHistory_typeInput
  }

  export type HistoryTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_relation?: AuthorRelationUpdateManyWithoutHistory_typeNestedInput
  }

  export type HistoryTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_relation?: AuthorRelationUncheckedUpdateManyWithoutHistory_typeNestedInput
  }

  export type HistoryTypeCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type HistoryTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoryTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PhraseCreateInput = {
    phrase: string
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author: AuthorCreateNestedOneWithoutPhraseInput
  }

  export type PhraseUncheckedCreateInput = {
    id?: number
    phrase: string
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_id: number
  }

  export type PhraseUpdateInput = {
    phrase?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: AuthorUpdateOneRequiredWithoutPhraseNestedInput
  }

  export type PhraseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    phrase?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_id?: IntFieldUpdateOperationsInput | number
  }

  export type PhraseCreateManyInput = {
    id?: number
    phrase: string
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_id: number
  }

  export type PhraseUpdateManyMutationInput = {
    phrase?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PhraseUncheckedUpdateManyInput = {
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

  export type AuthorRelationListRelationFilter = {
    every?: AuthorRelationWhereInput
    some?: AuthorRelationWhereInput
    none?: AuthorRelationWhereInput
  }

  export type PhraseListRelationFilter = {
    every?: PhraseWhereInput
    some?: PhraseWhereInput
    none?: PhraseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AuthorRelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhraseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AuthorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AuthorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AuthorSumOrderByAggregateInput = {
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
    is?: AuthorWhereInput
    isNot?: AuthorWhereInput
  }

  export type HistoryTypeRelationFilter = {
    is?: HistoryTypeWhereInput
    isNot?: HistoryTypeWhereInput
  }

  export type AuthorRelationCountOrderByAggregateInput = {
    id?: SortOrder
    name_relation?: SortOrder
    type_relation?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    author_id?: SortOrder
    author_relationed_id?: SortOrder
    history_type_id?: SortOrder
  }

  export type AuthorRelationAvgOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    author_relationed_id?: SortOrder
    history_type_id?: SortOrder
  }

  export type AuthorRelationMaxOrderByAggregateInput = {
    id?: SortOrder
    name_relation?: SortOrder
    type_relation?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    author_id?: SortOrder
    author_relationed_id?: SortOrder
    history_type_id?: SortOrder
  }

  export type AuthorRelationMinOrderByAggregateInput = {
    id?: SortOrder
    name_relation?: SortOrder
    type_relation?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    author_id?: SortOrder
    author_relationed_id?: SortOrder
    history_type_id?: SortOrder
  }

  export type AuthorRelationSumOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    author_relationed_id?: SortOrder
    history_type_id?: SortOrder
  }

  export type HistoryTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HistoryTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HistoryTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HistoryTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HistoryTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PhraseCountOrderByAggregateInput = {
    id?: SortOrder
    phrase?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    author_id?: SortOrder
  }

  export type PhraseAvgOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
  }

  export type PhraseMaxOrderByAggregateInput = {
    id?: SortOrder
    phrase?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    author_id?: SortOrder
  }

  export type PhraseMinOrderByAggregateInput = {
    id?: SortOrder
    phrase?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    author_id?: SortOrder
  }

  export type PhraseSumOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
  }

  export type AuthorRelationCreateNestedManyWithoutAuthor_author_relation_author_idToauthorInput = {
    create?: XOR<AuthorRelationCreateWithoutAuthor_author_relation_author_idToauthorInput, AuthorRelationUncheckedCreateWithoutAuthor_author_relation_author_idToauthorInput> | AuthorRelationCreateWithoutAuthor_author_relation_author_idToauthorInput[] | AuthorRelationUncheckedCreateWithoutAuthor_author_relation_author_idToauthorInput[]
    connectOrCreate?: AuthorRelationCreateOrConnectWithoutAuthor_author_relation_author_idToauthorInput | AuthorRelationCreateOrConnectWithoutAuthor_author_relation_author_idToauthorInput[]
    createMany?: AuthorRelationCreateManyAuthor_author_relation_author_idToauthorInputEnvelope
    connect?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
  }

  export type AuthorRelationCreateNestedManyWithoutAuthor_author_relation_author_relationed_idToauthorInput = {
    create?: XOR<AuthorRelationCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput, AuthorRelationUncheckedCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput> | AuthorRelationCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput[] | AuthorRelationUncheckedCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    connectOrCreate?: AuthorRelationCreateOrConnectWithoutAuthor_author_relation_author_relationed_idToauthorInput | AuthorRelationCreateOrConnectWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    createMany?: AuthorRelationCreateManyAuthor_author_relation_author_relationed_idToauthorInputEnvelope
    connect?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
  }

  export type PhraseCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PhraseCreateWithoutAuthorInput, PhraseUncheckedCreateWithoutAuthorInput> | PhraseCreateWithoutAuthorInput[] | PhraseUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PhraseCreateOrConnectWithoutAuthorInput | PhraseCreateOrConnectWithoutAuthorInput[]
    createMany?: PhraseCreateManyAuthorInputEnvelope
    connect?: PhraseWhereUniqueInput | PhraseWhereUniqueInput[]
  }

  export type AuthorRelationUncheckedCreateNestedManyWithoutAuthor_author_relation_author_idToauthorInput = {
    create?: XOR<AuthorRelationCreateWithoutAuthor_author_relation_author_idToauthorInput, AuthorRelationUncheckedCreateWithoutAuthor_author_relation_author_idToauthorInput> | AuthorRelationCreateWithoutAuthor_author_relation_author_idToauthorInput[] | AuthorRelationUncheckedCreateWithoutAuthor_author_relation_author_idToauthorInput[]
    connectOrCreate?: AuthorRelationCreateOrConnectWithoutAuthor_author_relation_author_idToauthorInput | AuthorRelationCreateOrConnectWithoutAuthor_author_relation_author_idToauthorInput[]
    createMany?: AuthorRelationCreateManyAuthor_author_relation_author_idToauthorInputEnvelope
    connect?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
  }

  export type AuthorRelationUncheckedCreateNestedManyWithoutAuthor_author_relation_author_relationed_idToauthorInput = {
    create?: XOR<AuthorRelationCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput, AuthorRelationUncheckedCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput> | AuthorRelationCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput[] | AuthorRelationUncheckedCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    connectOrCreate?: AuthorRelationCreateOrConnectWithoutAuthor_author_relation_author_relationed_idToauthorInput | AuthorRelationCreateOrConnectWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    createMany?: AuthorRelationCreateManyAuthor_author_relation_author_relationed_idToauthorInputEnvelope
    connect?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
  }

  export type PhraseUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PhraseCreateWithoutAuthorInput, PhraseUncheckedCreateWithoutAuthorInput> | PhraseCreateWithoutAuthorInput[] | PhraseUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PhraseCreateOrConnectWithoutAuthorInput | PhraseCreateOrConnectWithoutAuthorInput[]
    createMany?: PhraseCreateManyAuthorInputEnvelope
    connect?: PhraseWhereUniqueInput | PhraseWhereUniqueInput[]
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

  export type AuthorRelationUpdateManyWithoutAuthor_author_relation_author_idToauthorNestedInput = {
    create?: XOR<AuthorRelationCreateWithoutAuthor_author_relation_author_idToauthorInput, AuthorRelationUncheckedCreateWithoutAuthor_author_relation_author_idToauthorInput> | AuthorRelationCreateWithoutAuthor_author_relation_author_idToauthorInput[] | AuthorRelationUncheckedCreateWithoutAuthor_author_relation_author_idToauthorInput[]
    connectOrCreate?: AuthorRelationCreateOrConnectWithoutAuthor_author_relation_author_idToauthorInput | AuthorRelationCreateOrConnectWithoutAuthor_author_relation_author_idToauthorInput[]
    upsert?: AuthorRelationUpsertWithWhereUniqueWithoutAuthor_author_relation_author_idToauthorInput | AuthorRelationUpsertWithWhereUniqueWithoutAuthor_author_relation_author_idToauthorInput[]
    createMany?: AuthorRelationCreateManyAuthor_author_relation_author_idToauthorInputEnvelope
    set?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
    disconnect?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
    delete?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
    connect?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
    update?: AuthorRelationUpdateWithWhereUniqueWithoutAuthor_author_relation_author_idToauthorInput | AuthorRelationUpdateWithWhereUniqueWithoutAuthor_author_relation_author_idToauthorInput[]
    updateMany?: AuthorRelationUpdateManyWithWhereWithoutAuthor_author_relation_author_idToauthorInput | AuthorRelationUpdateManyWithWhereWithoutAuthor_author_relation_author_idToauthorInput[]
    deleteMany?: AuthorRelationScalarWhereInput | AuthorRelationScalarWhereInput[]
  }

  export type AuthorRelationUpdateManyWithoutAuthor_author_relation_author_relationed_idToauthorNestedInput = {
    create?: XOR<AuthorRelationCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput, AuthorRelationUncheckedCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput> | AuthorRelationCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput[] | AuthorRelationUncheckedCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    connectOrCreate?: AuthorRelationCreateOrConnectWithoutAuthor_author_relation_author_relationed_idToauthorInput | AuthorRelationCreateOrConnectWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    upsert?: AuthorRelationUpsertWithWhereUniqueWithoutAuthor_author_relation_author_relationed_idToauthorInput | AuthorRelationUpsertWithWhereUniqueWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    createMany?: AuthorRelationCreateManyAuthor_author_relation_author_relationed_idToauthorInputEnvelope
    set?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
    disconnect?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
    delete?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
    connect?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
    update?: AuthorRelationUpdateWithWhereUniqueWithoutAuthor_author_relation_author_relationed_idToauthorInput | AuthorRelationUpdateWithWhereUniqueWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    updateMany?: AuthorRelationUpdateManyWithWhereWithoutAuthor_author_relation_author_relationed_idToauthorInput | AuthorRelationUpdateManyWithWhereWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    deleteMany?: AuthorRelationScalarWhereInput | AuthorRelationScalarWhereInput[]
  }

  export type PhraseUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PhraseCreateWithoutAuthorInput, PhraseUncheckedCreateWithoutAuthorInput> | PhraseCreateWithoutAuthorInput[] | PhraseUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PhraseCreateOrConnectWithoutAuthorInput | PhraseCreateOrConnectWithoutAuthorInput[]
    upsert?: PhraseUpsertWithWhereUniqueWithoutAuthorInput | PhraseUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PhraseCreateManyAuthorInputEnvelope
    set?: PhraseWhereUniqueInput | PhraseWhereUniqueInput[]
    disconnect?: PhraseWhereUniqueInput | PhraseWhereUniqueInput[]
    delete?: PhraseWhereUniqueInput | PhraseWhereUniqueInput[]
    connect?: PhraseWhereUniqueInput | PhraseWhereUniqueInput[]
    update?: PhraseUpdateWithWhereUniqueWithoutAuthorInput | PhraseUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PhraseUpdateManyWithWhereWithoutAuthorInput | PhraseUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PhraseScalarWhereInput | PhraseScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AuthorRelationUncheckedUpdateManyWithoutAuthor_author_relation_author_idToauthorNestedInput = {
    create?: XOR<AuthorRelationCreateWithoutAuthor_author_relation_author_idToauthorInput, AuthorRelationUncheckedCreateWithoutAuthor_author_relation_author_idToauthorInput> | AuthorRelationCreateWithoutAuthor_author_relation_author_idToauthorInput[] | AuthorRelationUncheckedCreateWithoutAuthor_author_relation_author_idToauthorInput[]
    connectOrCreate?: AuthorRelationCreateOrConnectWithoutAuthor_author_relation_author_idToauthorInput | AuthorRelationCreateOrConnectWithoutAuthor_author_relation_author_idToauthorInput[]
    upsert?: AuthorRelationUpsertWithWhereUniqueWithoutAuthor_author_relation_author_idToauthorInput | AuthorRelationUpsertWithWhereUniqueWithoutAuthor_author_relation_author_idToauthorInput[]
    createMany?: AuthorRelationCreateManyAuthor_author_relation_author_idToauthorInputEnvelope
    set?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
    disconnect?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
    delete?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
    connect?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
    update?: AuthorRelationUpdateWithWhereUniqueWithoutAuthor_author_relation_author_idToauthorInput | AuthorRelationUpdateWithWhereUniqueWithoutAuthor_author_relation_author_idToauthorInput[]
    updateMany?: AuthorRelationUpdateManyWithWhereWithoutAuthor_author_relation_author_idToauthorInput | AuthorRelationUpdateManyWithWhereWithoutAuthor_author_relation_author_idToauthorInput[]
    deleteMany?: AuthorRelationScalarWhereInput | AuthorRelationScalarWhereInput[]
  }

  export type AuthorRelationUncheckedUpdateManyWithoutAuthor_author_relation_author_relationed_idToauthorNestedInput = {
    create?: XOR<AuthorRelationCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput, AuthorRelationUncheckedCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput> | AuthorRelationCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput[] | AuthorRelationUncheckedCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    connectOrCreate?: AuthorRelationCreateOrConnectWithoutAuthor_author_relation_author_relationed_idToauthorInput | AuthorRelationCreateOrConnectWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    upsert?: AuthorRelationUpsertWithWhereUniqueWithoutAuthor_author_relation_author_relationed_idToauthorInput | AuthorRelationUpsertWithWhereUniqueWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    createMany?: AuthorRelationCreateManyAuthor_author_relation_author_relationed_idToauthorInputEnvelope
    set?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
    disconnect?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
    delete?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
    connect?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
    update?: AuthorRelationUpdateWithWhereUniqueWithoutAuthor_author_relation_author_relationed_idToauthorInput | AuthorRelationUpdateWithWhereUniqueWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    updateMany?: AuthorRelationUpdateManyWithWhereWithoutAuthor_author_relation_author_relationed_idToauthorInput | AuthorRelationUpdateManyWithWhereWithoutAuthor_author_relation_author_relationed_idToauthorInput[]
    deleteMany?: AuthorRelationScalarWhereInput | AuthorRelationScalarWhereInput[]
  }

  export type PhraseUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PhraseCreateWithoutAuthorInput, PhraseUncheckedCreateWithoutAuthorInput> | PhraseCreateWithoutAuthorInput[] | PhraseUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PhraseCreateOrConnectWithoutAuthorInput | PhraseCreateOrConnectWithoutAuthorInput[]
    upsert?: PhraseUpsertWithWhereUniqueWithoutAuthorInput | PhraseUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PhraseCreateManyAuthorInputEnvelope
    set?: PhraseWhereUniqueInput | PhraseWhereUniqueInput[]
    disconnect?: PhraseWhereUniqueInput | PhraseWhereUniqueInput[]
    delete?: PhraseWhereUniqueInput | PhraseWhereUniqueInput[]
    connect?: PhraseWhereUniqueInput | PhraseWhereUniqueInput[]
    update?: PhraseUpdateWithWhereUniqueWithoutAuthorInput | PhraseUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PhraseUpdateManyWithWhereWithoutAuthorInput | PhraseUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PhraseScalarWhereInput | PhraseScalarWhereInput[]
  }

  export type AuthorCreateNestedOneWithoutAuthor_relation_author_relation_author_idToauthorInput = {
    create?: XOR<AuthorCreateWithoutAuthor_relation_author_relation_author_idToauthorInput, AuthorUncheckedCreateWithoutAuthor_relation_author_relation_author_idToauthorInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutAuthor_relation_author_relation_author_idToauthorInput
    connect?: AuthorWhereUniqueInput
  }

  export type AuthorCreateNestedOneWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput = {
    create?: XOR<AuthorCreateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput, AuthorUncheckedCreateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput
    connect?: AuthorWhereUniqueInput
  }

  export type HistoryTypeCreateNestedOneWithoutAuthor_relationInput = {
    create?: XOR<HistoryTypeCreateWithoutAuthor_relationInput, HistoryTypeUncheckedCreateWithoutAuthor_relationInput>
    connectOrCreate?: HistoryTypeCreateOrConnectWithoutAuthor_relationInput
    connect?: HistoryTypeWhereUniqueInput
  }

  export type AuthorUpdateOneRequiredWithoutAuthor_relation_author_relation_author_idToauthorNestedInput = {
    create?: XOR<AuthorCreateWithoutAuthor_relation_author_relation_author_idToauthorInput, AuthorUncheckedCreateWithoutAuthor_relation_author_relation_author_idToauthorInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutAuthor_relation_author_relation_author_idToauthorInput
    upsert?: AuthorUpsertWithoutAuthor_relation_author_relation_author_idToauthorInput
    connect?: AuthorWhereUniqueInput
    update?: XOR<XOR<AuthorUpdateToOneWithWhereWithoutAuthor_relation_author_relation_author_idToauthorInput, AuthorUpdateWithoutAuthor_relation_author_relation_author_idToauthorInput>, AuthorUncheckedUpdateWithoutAuthor_relation_author_relation_author_idToauthorInput>
  }

  export type AuthorUpdateOneRequiredWithoutAuthor_relation_author_relation_author_relationed_idToauthorNestedInput = {
    create?: XOR<AuthorCreateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput, AuthorUncheckedCreateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput
    upsert?: AuthorUpsertWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput
    connect?: AuthorWhereUniqueInput
    update?: XOR<XOR<AuthorUpdateToOneWithWhereWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput, AuthorUpdateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput>, AuthorUncheckedUpdateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput>
  }

  export type HistoryTypeUpdateOneRequiredWithoutAuthor_relationNestedInput = {
    create?: XOR<HistoryTypeCreateWithoutAuthor_relationInput, HistoryTypeUncheckedCreateWithoutAuthor_relationInput>
    connectOrCreate?: HistoryTypeCreateOrConnectWithoutAuthor_relationInput
    upsert?: HistoryTypeUpsertWithoutAuthor_relationInput
    connect?: HistoryTypeWhereUniqueInput
    update?: XOR<XOR<HistoryTypeUpdateToOneWithWhereWithoutAuthor_relationInput, HistoryTypeUpdateWithoutAuthor_relationInput>, HistoryTypeUncheckedUpdateWithoutAuthor_relationInput>
  }

  export type AuthorRelationCreateNestedManyWithoutHistory_typeInput = {
    create?: XOR<AuthorRelationCreateWithoutHistory_typeInput, AuthorRelationUncheckedCreateWithoutHistory_typeInput> | AuthorRelationCreateWithoutHistory_typeInput[] | AuthorRelationUncheckedCreateWithoutHistory_typeInput[]
    connectOrCreate?: AuthorRelationCreateOrConnectWithoutHistory_typeInput | AuthorRelationCreateOrConnectWithoutHistory_typeInput[]
    createMany?: AuthorRelationCreateManyHistory_typeInputEnvelope
    connect?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
  }

  export type AuthorRelationUncheckedCreateNestedManyWithoutHistory_typeInput = {
    create?: XOR<AuthorRelationCreateWithoutHistory_typeInput, AuthorRelationUncheckedCreateWithoutHistory_typeInput> | AuthorRelationCreateWithoutHistory_typeInput[] | AuthorRelationUncheckedCreateWithoutHistory_typeInput[]
    connectOrCreate?: AuthorRelationCreateOrConnectWithoutHistory_typeInput | AuthorRelationCreateOrConnectWithoutHistory_typeInput[]
    createMany?: AuthorRelationCreateManyHistory_typeInputEnvelope
    connect?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
  }

  export type AuthorRelationUpdateManyWithoutHistory_typeNestedInput = {
    create?: XOR<AuthorRelationCreateWithoutHistory_typeInput, AuthorRelationUncheckedCreateWithoutHistory_typeInput> | AuthorRelationCreateWithoutHistory_typeInput[] | AuthorRelationUncheckedCreateWithoutHistory_typeInput[]
    connectOrCreate?: AuthorRelationCreateOrConnectWithoutHistory_typeInput | AuthorRelationCreateOrConnectWithoutHistory_typeInput[]
    upsert?: AuthorRelationUpsertWithWhereUniqueWithoutHistory_typeInput | AuthorRelationUpsertWithWhereUniqueWithoutHistory_typeInput[]
    createMany?: AuthorRelationCreateManyHistory_typeInputEnvelope
    set?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
    disconnect?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
    delete?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
    connect?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
    update?: AuthorRelationUpdateWithWhereUniqueWithoutHistory_typeInput | AuthorRelationUpdateWithWhereUniqueWithoutHistory_typeInput[]
    updateMany?: AuthorRelationUpdateManyWithWhereWithoutHistory_typeInput | AuthorRelationUpdateManyWithWhereWithoutHistory_typeInput[]
    deleteMany?: AuthorRelationScalarWhereInput | AuthorRelationScalarWhereInput[]
  }

  export type AuthorRelationUncheckedUpdateManyWithoutHistory_typeNestedInput = {
    create?: XOR<AuthorRelationCreateWithoutHistory_typeInput, AuthorRelationUncheckedCreateWithoutHistory_typeInput> | AuthorRelationCreateWithoutHistory_typeInput[] | AuthorRelationUncheckedCreateWithoutHistory_typeInput[]
    connectOrCreate?: AuthorRelationCreateOrConnectWithoutHistory_typeInput | AuthorRelationCreateOrConnectWithoutHistory_typeInput[]
    upsert?: AuthorRelationUpsertWithWhereUniqueWithoutHistory_typeInput | AuthorRelationUpsertWithWhereUniqueWithoutHistory_typeInput[]
    createMany?: AuthorRelationCreateManyHistory_typeInputEnvelope
    set?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
    disconnect?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
    delete?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
    connect?: AuthorRelationWhereUniqueInput | AuthorRelationWhereUniqueInput[]
    update?: AuthorRelationUpdateWithWhereUniqueWithoutHistory_typeInput | AuthorRelationUpdateWithWhereUniqueWithoutHistory_typeInput[]
    updateMany?: AuthorRelationUpdateManyWithWhereWithoutHistory_typeInput | AuthorRelationUpdateManyWithWhereWithoutHistory_typeInput[]
    deleteMany?: AuthorRelationScalarWhereInput | AuthorRelationScalarWhereInput[]
  }

  export type AuthorCreateNestedOneWithoutPhraseInput = {
    create?: XOR<AuthorCreateWithoutPhraseInput, AuthorUncheckedCreateWithoutPhraseInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutPhraseInput
    connect?: AuthorWhereUniqueInput
  }

  export type AuthorUpdateOneRequiredWithoutPhraseNestedInput = {
    create?: XOR<AuthorCreateWithoutPhraseInput, AuthorUncheckedCreateWithoutPhraseInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutPhraseInput
    upsert?: AuthorUpsertWithoutPhraseInput
    connect?: AuthorWhereUniqueInput
    update?: XOR<XOR<AuthorUpdateToOneWithWhereWithoutPhraseInput, AuthorUpdateWithoutPhraseInput>, AuthorUncheckedUpdateWithoutPhraseInput>
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

  export type AuthorRelationCreateWithoutAuthor_author_relation_author_idToauthorInput = {
    name_relation: string
    type_relation: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_author_relation_author_relationed_idToauthor: AuthorCreateNestedOneWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput
    history_type: HistoryTypeCreateNestedOneWithoutAuthor_relationInput
  }

  export type AuthorRelationUncheckedCreateWithoutAuthor_author_relation_author_idToauthorInput = {
    id?: number
    name_relation: string
    type_relation: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_relationed_id: number
    history_type_id: number
  }

  export type AuthorRelationCreateOrConnectWithoutAuthor_author_relation_author_idToauthorInput = {
    where: AuthorRelationWhereUniqueInput
    create: XOR<AuthorRelationCreateWithoutAuthor_author_relation_author_idToauthorInput, AuthorRelationUncheckedCreateWithoutAuthor_author_relation_author_idToauthorInput>
  }

  export type AuthorRelationCreateManyAuthor_author_relation_author_idToauthorInputEnvelope = {
    data: AuthorRelationCreateManyAuthor_author_relation_author_idToauthorInput | AuthorRelationCreateManyAuthor_author_relation_author_idToauthorInput[]
    skipDuplicates?: boolean
  }

  export type AuthorRelationCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput = {
    name_relation: string
    type_relation: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_author_relation_author_idToauthor: AuthorCreateNestedOneWithoutAuthor_relation_author_relation_author_idToauthorInput
    history_type: HistoryTypeCreateNestedOneWithoutAuthor_relationInput
  }

  export type AuthorRelationUncheckedCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput = {
    id?: number
    name_relation: string
    type_relation: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_id: number
    history_type_id: number
  }

  export type AuthorRelationCreateOrConnectWithoutAuthor_author_relation_author_relationed_idToauthorInput = {
    where: AuthorRelationWhereUniqueInput
    create: XOR<AuthorRelationCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput, AuthorRelationUncheckedCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput>
  }

  export type AuthorRelationCreateManyAuthor_author_relation_author_relationed_idToauthorInputEnvelope = {
    data: AuthorRelationCreateManyAuthor_author_relation_author_relationed_idToauthorInput | AuthorRelationCreateManyAuthor_author_relation_author_relationed_idToauthorInput[]
    skipDuplicates?: boolean
  }

  export type PhraseCreateWithoutAuthorInput = {
    phrase: string
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type PhraseUncheckedCreateWithoutAuthorInput = {
    id?: number
    phrase: string
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type PhraseCreateOrConnectWithoutAuthorInput = {
    where: PhraseWhereUniqueInput
    create: XOR<PhraseCreateWithoutAuthorInput, PhraseUncheckedCreateWithoutAuthorInput>
  }

  export type PhraseCreateManyAuthorInputEnvelope = {
    data: PhraseCreateManyAuthorInput | PhraseCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type AuthorRelationUpsertWithWhereUniqueWithoutAuthor_author_relation_author_idToauthorInput = {
    where: AuthorRelationWhereUniqueInput
    update: XOR<AuthorRelationUpdateWithoutAuthor_author_relation_author_idToauthorInput, AuthorRelationUncheckedUpdateWithoutAuthor_author_relation_author_idToauthorInput>
    create: XOR<AuthorRelationCreateWithoutAuthor_author_relation_author_idToauthorInput, AuthorRelationUncheckedCreateWithoutAuthor_author_relation_author_idToauthorInput>
  }

  export type AuthorRelationUpdateWithWhereUniqueWithoutAuthor_author_relation_author_idToauthorInput = {
    where: AuthorRelationWhereUniqueInput
    data: XOR<AuthorRelationUpdateWithoutAuthor_author_relation_author_idToauthorInput, AuthorRelationUncheckedUpdateWithoutAuthor_author_relation_author_idToauthorInput>
  }

  export type AuthorRelationUpdateManyWithWhereWithoutAuthor_author_relation_author_idToauthorInput = {
    where: AuthorRelationScalarWhereInput
    data: XOR<AuthorRelationUpdateManyMutationInput, AuthorRelationUncheckedUpdateManyWithoutAuthor_author_relation_author_idToauthorInput>
  }

  export type AuthorRelationScalarWhereInput = {
    AND?: AuthorRelationScalarWhereInput | AuthorRelationScalarWhereInput[]
    OR?: AuthorRelationScalarWhereInput[]
    NOT?: AuthorRelationScalarWhereInput | AuthorRelationScalarWhereInput[]
    id?: IntFilter<"AuthorRelation"> | number
    name_relation?: StringFilter<"AuthorRelation"> | string
    type_relation?: StringFilter<"AuthorRelation"> | string
    created_at?: DateTimeNullableFilter<"AuthorRelation"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"AuthorRelation"> | Date | string | null
    author_id?: IntFilter<"AuthorRelation"> | number
    author_relationed_id?: IntFilter<"AuthorRelation"> | number
    history_type_id?: IntFilter<"AuthorRelation"> | number
  }

  export type AuthorRelationUpsertWithWhereUniqueWithoutAuthor_author_relation_author_relationed_idToauthorInput = {
    where: AuthorRelationWhereUniqueInput
    update: XOR<AuthorRelationUpdateWithoutAuthor_author_relation_author_relationed_idToauthorInput, AuthorRelationUncheckedUpdateWithoutAuthor_author_relation_author_relationed_idToauthorInput>
    create: XOR<AuthorRelationCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput, AuthorRelationUncheckedCreateWithoutAuthor_author_relation_author_relationed_idToauthorInput>
  }

  export type AuthorRelationUpdateWithWhereUniqueWithoutAuthor_author_relation_author_relationed_idToauthorInput = {
    where: AuthorRelationWhereUniqueInput
    data: XOR<AuthorRelationUpdateWithoutAuthor_author_relation_author_relationed_idToauthorInput, AuthorRelationUncheckedUpdateWithoutAuthor_author_relation_author_relationed_idToauthorInput>
  }

  export type AuthorRelationUpdateManyWithWhereWithoutAuthor_author_relation_author_relationed_idToauthorInput = {
    where: AuthorRelationScalarWhereInput
    data: XOR<AuthorRelationUpdateManyMutationInput, AuthorRelationUncheckedUpdateManyWithoutAuthor_author_relation_author_relationed_idToauthorInput>
  }

  export type PhraseUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PhraseWhereUniqueInput
    update: XOR<PhraseUpdateWithoutAuthorInput, PhraseUncheckedUpdateWithoutAuthorInput>
    create: XOR<PhraseCreateWithoutAuthorInput, PhraseUncheckedCreateWithoutAuthorInput>
  }

  export type PhraseUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PhraseWhereUniqueInput
    data: XOR<PhraseUpdateWithoutAuthorInput, PhraseUncheckedUpdateWithoutAuthorInput>
  }

  export type PhraseUpdateManyWithWhereWithoutAuthorInput = {
    where: PhraseScalarWhereInput
    data: XOR<PhraseUpdateManyMutationInput, PhraseUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PhraseScalarWhereInput = {
    AND?: PhraseScalarWhereInput | PhraseScalarWhereInput[]
    OR?: PhraseScalarWhereInput[]
    NOT?: PhraseScalarWhereInput | PhraseScalarWhereInput[]
    id?: IntFilter<"Phrase"> | number
    phrase?: StringFilter<"Phrase"> | string
    date?: DateTimeNullableFilter<"Phrase"> | Date | string | null
    created_at?: DateTimeNullableFilter<"Phrase"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Phrase"> | Date | string | null
    author_id?: IntFilter<"Phrase"> | number
  }

  export type AuthorCreateWithoutAuthor_relation_author_relation_author_idToauthorInput = {
    name: string
    last_name?: string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_relation_author_relation_author_relationed_idToauthor?: AuthorRelationCreateNestedManyWithoutAuthor_author_relation_author_relationed_idToauthorInput
    phrase?: PhraseCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateWithoutAuthor_relation_author_relation_author_idToauthorInput = {
    id?: number
    name: string
    last_name?: string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_relation_author_relation_author_relationed_idToauthor?: AuthorRelationUncheckedCreateNestedManyWithoutAuthor_author_relation_author_relationed_idToauthorInput
    phrase?: PhraseUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorCreateOrConnectWithoutAuthor_relation_author_relation_author_idToauthorInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutAuthor_relation_author_relation_author_idToauthorInput, AuthorUncheckedCreateWithoutAuthor_relation_author_relation_author_idToauthorInput>
  }

  export type AuthorCreateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput = {
    name: string
    last_name?: string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_relation_author_relation_author_idToauthor?: AuthorRelationCreateNestedManyWithoutAuthor_author_relation_author_idToauthorInput
    phrase?: PhraseCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput = {
    id?: number
    name: string
    last_name?: string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_relation_author_relation_author_idToauthor?: AuthorRelationUncheckedCreateNestedManyWithoutAuthor_author_relation_author_idToauthorInput
    phrase?: PhraseUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorCreateOrConnectWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput, AuthorUncheckedCreateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput>
  }

  export type HistoryTypeCreateWithoutAuthor_relationInput = {
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type HistoryTypeUncheckedCreateWithoutAuthor_relationInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type HistoryTypeCreateOrConnectWithoutAuthor_relationInput = {
    where: HistoryTypeWhereUniqueInput
    create: XOR<HistoryTypeCreateWithoutAuthor_relationInput, HistoryTypeUncheckedCreateWithoutAuthor_relationInput>
  }

  export type AuthorUpsertWithoutAuthor_relation_author_relation_author_idToauthorInput = {
    update: XOR<AuthorUpdateWithoutAuthor_relation_author_relation_author_idToauthorInput, AuthorUncheckedUpdateWithoutAuthor_relation_author_relation_author_idToauthorInput>
    create: XOR<AuthorCreateWithoutAuthor_relation_author_relation_author_idToauthorInput, AuthorUncheckedCreateWithoutAuthor_relation_author_relation_author_idToauthorInput>
    where?: AuthorWhereInput
  }

  export type AuthorUpdateToOneWithWhereWithoutAuthor_relation_author_relation_author_idToauthorInput = {
    where?: AuthorWhereInput
    data: XOR<AuthorUpdateWithoutAuthor_relation_author_relation_author_idToauthorInput, AuthorUncheckedUpdateWithoutAuthor_relation_author_relation_author_idToauthorInput>
  }

  export type AuthorUpdateWithoutAuthor_relation_author_relation_author_idToauthorInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_relation_author_relation_author_relationed_idToauthor?: AuthorRelationUpdateManyWithoutAuthor_author_relation_author_relationed_idToauthorNestedInput
    phrase?: PhraseUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateWithoutAuthor_relation_author_relation_author_idToauthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_relation_author_relation_author_relationed_idToauthor?: AuthorRelationUncheckedUpdateManyWithoutAuthor_author_relation_author_relationed_idToauthorNestedInput
    phrase?: PhraseUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUpsertWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput = {
    update: XOR<AuthorUpdateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput, AuthorUncheckedUpdateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput>
    create: XOR<AuthorCreateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput, AuthorUncheckedCreateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput>
    where?: AuthorWhereInput
  }

  export type AuthorUpdateToOneWithWhereWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput = {
    where?: AuthorWhereInput
    data: XOR<AuthorUpdateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput, AuthorUncheckedUpdateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput>
  }

  export type AuthorUpdateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_relation_author_relation_author_idToauthor?: AuthorRelationUpdateManyWithoutAuthor_author_relation_author_idToauthorNestedInput
    phrase?: PhraseUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_relation_author_relation_author_idToauthor?: AuthorRelationUncheckedUpdateManyWithoutAuthor_author_relation_author_idToauthorNestedInput
    phrase?: PhraseUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type HistoryTypeUpsertWithoutAuthor_relationInput = {
    update: XOR<HistoryTypeUpdateWithoutAuthor_relationInput, HistoryTypeUncheckedUpdateWithoutAuthor_relationInput>
    create: XOR<HistoryTypeCreateWithoutAuthor_relationInput, HistoryTypeUncheckedCreateWithoutAuthor_relationInput>
    where?: HistoryTypeWhereInput
  }

  export type HistoryTypeUpdateToOneWithWhereWithoutAuthor_relationInput = {
    where?: HistoryTypeWhereInput
    data: XOR<HistoryTypeUpdateWithoutAuthor_relationInput, HistoryTypeUncheckedUpdateWithoutAuthor_relationInput>
  }

  export type HistoryTypeUpdateWithoutAuthor_relationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoryTypeUncheckedUpdateWithoutAuthor_relationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuthorRelationCreateWithoutHistory_typeInput = {
    name_relation: string
    type_relation: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_author_relation_author_idToauthor: AuthorCreateNestedOneWithoutAuthor_relation_author_relation_author_idToauthorInput
    author_author_relation_author_relationed_idToauthor: AuthorCreateNestedOneWithoutAuthor_relation_author_relation_author_relationed_idToauthorInput
  }

  export type AuthorRelationUncheckedCreateWithoutHistory_typeInput = {
    id?: number
    name_relation: string
    type_relation: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_id: number
    author_relationed_id: number
  }

  export type AuthorRelationCreateOrConnectWithoutHistory_typeInput = {
    where: AuthorRelationWhereUniqueInput
    create: XOR<AuthorRelationCreateWithoutHistory_typeInput, AuthorRelationUncheckedCreateWithoutHistory_typeInput>
  }

  export type AuthorRelationCreateManyHistory_typeInputEnvelope = {
    data: AuthorRelationCreateManyHistory_typeInput | AuthorRelationCreateManyHistory_typeInput[]
    skipDuplicates?: boolean
  }

  export type AuthorRelationUpsertWithWhereUniqueWithoutHistory_typeInput = {
    where: AuthorRelationWhereUniqueInput
    update: XOR<AuthorRelationUpdateWithoutHistory_typeInput, AuthorRelationUncheckedUpdateWithoutHistory_typeInput>
    create: XOR<AuthorRelationCreateWithoutHistory_typeInput, AuthorRelationUncheckedCreateWithoutHistory_typeInput>
  }

  export type AuthorRelationUpdateWithWhereUniqueWithoutHistory_typeInput = {
    where: AuthorRelationWhereUniqueInput
    data: XOR<AuthorRelationUpdateWithoutHistory_typeInput, AuthorRelationUncheckedUpdateWithoutHistory_typeInput>
  }

  export type AuthorRelationUpdateManyWithWhereWithoutHistory_typeInput = {
    where: AuthorRelationScalarWhereInput
    data: XOR<AuthorRelationUpdateManyMutationInput, AuthorRelationUncheckedUpdateManyWithoutHistory_typeInput>
  }

  export type AuthorCreateWithoutPhraseInput = {
    name: string
    last_name?: string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_relation_author_relation_author_idToauthor?: AuthorRelationCreateNestedManyWithoutAuthor_author_relation_author_idToauthorInput
    author_relation_author_relation_author_relationed_idToauthor?: AuthorRelationCreateNestedManyWithoutAuthor_author_relation_author_relationed_idToauthorInput
  }

  export type AuthorUncheckedCreateWithoutPhraseInput = {
    id?: number
    name: string
    last_name?: string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_relation_author_relation_author_idToauthor?: AuthorRelationUncheckedCreateNestedManyWithoutAuthor_author_relation_author_idToauthorInput
    author_relation_author_relation_author_relationed_idToauthor?: AuthorRelationUncheckedCreateNestedManyWithoutAuthor_author_relation_author_relationed_idToauthorInput
  }

  export type AuthorCreateOrConnectWithoutPhraseInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutPhraseInput, AuthorUncheckedCreateWithoutPhraseInput>
  }

  export type AuthorUpsertWithoutPhraseInput = {
    update: XOR<AuthorUpdateWithoutPhraseInput, AuthorUncheckedUpdateWithoutPhraseInput>
    create: XOR<AuthorCreateWithoutPhraseInput, AuthorUncheckedCreateWithoutPhraseInput>
    where?: AuthorWhereInput
  }

  export type AuthorUpdateToOneWithWhereWithoutPhraseInput = {
    where?: AuthorWhereInput
    data: XOR<AuthorUpdateWithoutPhraseInput, AuthorUncheckedUpdateWithoutPhraseInput>
  }

  export type AuthorUpdateWithoutPhraseInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_relation_author_relation_author_idToauthor?: AuthorRelationUpdateManyWithoutAuthor_author_relation_author_idToauthorNestedInput
    author_relation_author_relation_author_relationed_idToauthor?: AuthorRelationUpdateManyWithoutAuthor_author_relation_author_relationed_idToauthorNestedInput
  }

  export type AuthorUncheckedUpdateWithoutPhraseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_relation_author_relation_author_idToauthor?: AuthorRelationUncheckedUpdateManyWithoutAuthor_author_relation_author_idToauthorNestedInput
    author_relation_author_relation_author_relationed_idToauthor?: AuthorRelationUncheckedUpdateManyWithoutAuthor_author_relation_author_relationed_idToauthorNestedInput
  }

  export type AuthorRelationCreateManyAuthor_author_relation_author_idToauthorInput = {
    id?: number
    name_relation: string
    type_relation: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_relationed_id: number
    history_type_id: number
  }

  export type AuthorRelationCreateManyAuthor_author_relation_author_relationed_idToauthorInput = {
    id?: number
    name_relation: string
    type_relation: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_id: number
    history_type_id: number
  }

  export type PhraseCreateManyAuthorInput = {
    id?: number
    phrase: string
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type AuthorRelationUpdateWithoutAuthor_author_relation_author_idToauthorInput = {
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_author_relation_author_relationed_idToauthor?: AuthorUpdateOneRequiredWithoutAuthor_relation_author_relation_author_relationed_idToauthorNestedInput
    history_type?: HistoryTypeUpdateOneRequiredWithoutAuthor_relationNestedInput
  }

  export type AuthorRelationUncheckedUpdateWithoutAuthor_author_relation_author_idToauthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_relationed_id?: IntFieldUpdateOperationsInput | number
    history_type_id?: IntFieldUpdateOperationsInput | number
  }

  export type AuthorRelationUncheckedUpdateManyWithoutAuthor_author_relation_author_idToauthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_relationed_id?: IntFieldUpdateOperationsInput | number
    history_type_id?: IntFieldUpdateOperationsInput | number
  }

  export type AuthorRelationUpdateWithoutAuthor_author_relation_author_relationed_idToauthorInput = {
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_author_relation_author_idToauthor?: AuthorUpdateOneRequiredWithoutAuthor_relation_author_relation_author_idToauthorNestedInput
    history_type?: HistoryTypeUpdateOneRequiredWithoutAuthor_relationNestedInput
  }

  export type AuthorRelationUncheckedUpdateWithoutAuthor_author_relation_author_relationed_idToauthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_id?: IntFieldUpdateOperationsInput | number
    history_type_id?: IntFieldUpdateOperationsInput | number
  }

  export type AuthorRelationUncheckedUpdateManyWithoutAuthor_author_relation_author_relationed_idToauthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_id?: IntFieldUpdateOperationsInput | number
    history_type_id?: IntFieldUpdateOperationsInput | number
  }

  export type PhraseUpdateWithoutAuthorInput = {
    phrase?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PhraseUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    phrase?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PhraseUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    phrase?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuthorRelationCreateManyHistory_typeInput = {
    id?: number
    name_relation: string
    type_relation: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    author_id: number
    author_relationed_id: number
  }

  export type AuthorRelationUpdateWithoutHistory_typeInput = {
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_author_relation_author_idToauthor?: AuthorUpdateOneRequiredWithoutAuthor_relation_author_relation_author_idToauthorNestedInput
    author_author_relation_author_relationed_idToauthor?: AuthorUpdateOneRequiredWithoutAuthor_relation_author_relation_author_relationed_idToauthorNestedInput
  }

  export type AuthorRelationUncheckedUpdateWithoutHistory_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_relation?: StringFieldUpdateOperationsInput | string
    type_relation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_id?: IntFieldUpdateOperationsInput | number
    author_relationed_id?: IntFieldUpdateOperationsInput | number
  }

  export type AuthorRelationUncheckedUpdateManyWithoutHistory_typeInput = {
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
     * @deprecated Use HistoryTypeCountOutputTypeDefaultArgs instead
     */
    export type HistoryTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HistoryTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuthorDefaultArgs instead
     */
    export type AuthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuthorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuthorRelationDefaultArgs instead
     */
    export type AuthorRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuthorRelationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HistoryTypeDefaultArgs instead
     */
    export type HistoryTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HistoryTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PhraseDefaultArgs instead
     */
    export type PhraseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhraseDefaultArgs<ExtArgs>

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