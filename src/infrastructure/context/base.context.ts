import BaseConnectionOptions from "connection/options/base.connection.options";

export abstract class BaseContext {

    private driver: any;

    protected constructor(readonly options: BaseConnectionOptions) {

    }
}