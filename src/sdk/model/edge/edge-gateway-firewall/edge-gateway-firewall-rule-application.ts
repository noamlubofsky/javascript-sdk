import { EdgeGatewayFirewallRuleApplicationJson } from './__json__/edge-gateway-firewall-rule-application-json';
import { EdgeGatewayFirewallRuleServiceJson } from './__json__/edge-gateway-firewall-rule-service-json';

/**
 * Firewall Rule Application
 */
/* istanbul ignore next: autogenerated */
export class EdgeGatewayFirewallRuleApplication {

  constructor(private _json: EdgeGatewayFirewallRuleApplicationJson) {}

  /**
   * Get application id.
   * @returns {string}
   */
  get applicationId(): string {
    return this._json.application_id;
  }

  /**
   * Get service.
   * @returns {Array<EdgeGatewayFirewallRuleService>}
   */
  get service(): Array<EdgeGatewayFirewallRuleServiceJson> {
    return this._json.service;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewayFirewallRuleApplicationJson}
   */
  get json(): EdgeGatewayFirewallRuleApplicationJson {
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
