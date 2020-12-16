import {
  DistributedFirewallRuleServiceProtocolRequestJson
} from './__json__/distributed-firewall-rule-service-protocol-request-json';
import { DistributedFirewallProtocolNameType } from './distributed-firewall-protocol-name-type';

/* istanbul ignore next: autogenerated */
export class DistributedFirewallRuleServiceProtocolRequest {

  private readonly _json: DistributedFirewallRuleServiceProtocolRequestJson;

  constructor(distributedFirewallRuleServiceProtocolRequest: DistributedFirewallRuleServiceProtocolRequest);
  constructor(distributedFirewallRuleServiceProtocolRequestJson: DistributedFirewallRuleServiceProtocolRequestJson);
  constructor(sourcePort: number, destinationPort: number, protocol: number,
              protocolName: DistributedFirewallProtocolNameType);
  constructor(firstParam: number | DistributedFirewallRuleServiceProtocolRequest |
    DistributedFirewallRuleServiceProtocolRequestJson,
              destinationPort?: number, protocol?: number, protocolName?: DistributedFirewallProtocolNameType) {
    if (typeof firstParam === 'number') {
      // Parameters constructor
      this._json = {
        source_port: firstParam,
        destination_port: destinationPort,
        protocol: protocol,
        protocol_name: protocolName
      } as DistributedFirewallRuleServiceProtocolRequestJson;
    } else if (firstParam instanceof DistributedFirewallRuleServiceProtocolRequest) {
      // Copy constructor
      this._json = (firstParam as DistributedFirewallRuleServiceProtocolRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as DistributedFirewallRuleServiceProtocolRequestJson;
    }
  }

  /**
   * Get source port.
   * @returns {number}
   */
  get sourcePort(): number {
    return this._json.source_port;
  }

  /**
   * Get destination port.
   * @returns {number}
   */
  get destinationPort(): number {
    return this._json.destination_port;
  }

  /**
   * Get protocol.
   * @returns {number}
   */
  get protocol(): number {
    return this._json.protocol;
  }

  /**
   * Get protocol name.
   * @returns {DistributedFirewallProtocolNameType}
   */
  get protocolName(): DistributedFirewallProtocolNameType {
    return this._json.protocol_name;
  }

  /**
   * Get the json representation of this class.
   * @returns {DistributedFirewallRuleServiceProtocolRequestJson}
   */
  get json(): DistributedFirewallRuleServiceProtocolRequestJson {
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
