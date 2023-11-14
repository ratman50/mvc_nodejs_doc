
export interface Dao <T>{
    create(value: T): Promise<T>;
    read(id: string): Promise<T|undefined>;
    upsert(id:string, value: T): Promise<T>
    delete(id: string): Promise<void>;
    list(): Promise<T[]>;
}