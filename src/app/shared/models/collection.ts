export class Collection {
    public fields: Collection[] = [];

    public constructor(
        public name: string,
        public description: string,
        public type: CollectionType
    ){};
}

export enum CollectionType {
    PRIMITIVE,
    OBJECT,
    ARRAY
}