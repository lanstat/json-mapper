import {Property, Type} from './schemastore';

export class PropertyDefinition {
  public canSelectMultiple: boolean;
  public possibleTypes: Type[];

  public constructor(private property: Property) {
    this.parse();
  }

  private parse() {
    this.canSelectMultiple = Array.isArray(this.property.type);
    this.possibleTypes = [];

    if (this.canSelectMultiple) {
      for (let item of this.property.type) {
        this.possibleTypes.push((<any>Type)[item]);
      }
    } else {
      this.possibleTypes.push((<any>Type)[this.property.type as string]);
    }

    console.log(this.possibleTypes);
  }

  get items(): string[] {
    return this.property.enum;
  }

  get description(): string {
    return this.property.description;
  }

}
