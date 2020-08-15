export interface PostgresAuthorizationOptions {

    readonly url?: string;

    readonly host?: string;

    readonly port?: number;

    readonly username?: string;

    readonly password?: string;

    readonly database?: string;

    readonly ssl?: boolean;
}