import { DistributedFirewallRuleDestinationJson } from './__json__/distributed-firewall-rule-destination-json';

/**
 * Distributed Firewall Rule Destination.
 */
/* istanbul ignore next: autogenerated */
export class DistributedFirewallRuleDestination {

  constructor(private _json: DistributedFirewallRuleDestinationJson) {
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
   * Get type.
   * @returns {string}
   */
  get type(): string {
    return this._json.type;
  }

  /**
   * Get is valid.
   * @returns {boolean}
   */
  get isValid(): boolean {
    return this._json.is_valid;
  }

  /**
   * Get the json representation of this class.
   * @returns {DistributedFirewallRuleDestinationJson}
   */
  get json(): DistributedFirewallRuleDestinationJson {
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
