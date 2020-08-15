import { DatabaseType } from "connection/types/database.type";

export default interface BaseConnectionOptions {
    name: string;
    databaseType: DatabaseType;
}