export enum Type {
    string,
    object,
    null,
    array,
    boolean
}

export enum PropertyFormat {
    uri,
    email
}

export interface Reference {
    $ref: string;
}

export interface MetaSchema {
    $schema: string;
}

export interface Schema extends Property {
    $vocabulary: string;
    definitions: {[id:string]: Property};
}

export interface Property extends Reference, MetaSchema {
    title: string;
    description: string;
    type: (keyof typeof Type)[] | keyof typeof Type;
    format: keyof typeof PropertyFormat;
    maxLength: number;
    minLength: number;
    pattern: string;
    patternProperties: {[id:string]: PatternProperty};
    items: Property;
    properties: {[id:string]: Property};
    oneOf: Property[];
    anyOf: Property[];
    not: Property;
    required: string[];
    default: any;
    additonalProperties: Property| Property[] | boolean;
    enum: any[];
}

export interface PatternProperty extends Reference {
    description: string;
    tsType: string;
}