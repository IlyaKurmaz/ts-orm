import BaseConnectionOptions from "connection/options/base.connection.options";
import { PostgresAuthorizationOptions } from "./postgres.authorization.options";

export interface PostgresConnectionOptions extends BaseConnectionOptions, PostgresAuthorizationOptions {
    readonly databaseType: "postgres";
}