import { DistributedFirewallObjectPropertyJson } from './__json__/distributed-firewall-object-property-json';

/* istanbul ignore next: autogenerated */
export class DistributedFirewallObjectProperty {

  constructor(private _json: DistributedFirewallObjectPropertyJson) {
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
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
   * @returns {DistributedFirewallObjectPropertyJson}
   */
  get json(): DistributedFirewallObjectPropertyJson {
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
