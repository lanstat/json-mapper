import {Property} from './schemastore';

export class PropertyDefinition {
  public constructor(private property: Property) {

  }

  private init() {
    if (this.property.$ref) {

    }
  }
}
