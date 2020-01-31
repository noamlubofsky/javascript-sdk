import { AttributeJson } from './__json__/attribute-json';

/* istanbul ignore next: autogenerated */
export class Attribute {

  constructor(private _json: AttributeJson) {
  }

  /**
   * Get key.
   * @returns {string}
   */
  get key(): string {
    return this._json.key;
  }

  /**
   * Get value.
   * @returns {string}
   */
  get value(): string {
    return this._json.value;
  }

  /**
   * Get the json representation of this class.
   * @returns {AttributeJson}
   */
  get json(): AttributeJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
