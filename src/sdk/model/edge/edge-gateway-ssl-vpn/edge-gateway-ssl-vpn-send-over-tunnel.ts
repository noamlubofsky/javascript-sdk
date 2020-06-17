import { EdgeGatewaySslVpnSendOverTunnelJson } from './__json__/edge-gateway-ssl-vpn-send-over-tunnel-json';

/* istanbul ignore next: autogenerated */
export class EdgeGatewaySslVpnSendOverTunnel {

  constructor(private _json: EdgeGatewaySslVpnSendOverTunnelJson) {
  }

  /**
   * Get ports.
   * @returns {string}
   */
  get ports(): string {
    return this._json.ports;
  }

  /**
   * Get optimize.
   * @returns {boolean}
   */
  get optimize(): boolean {
    return this._json.optimize;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewaySslVpnSendOverTunnelJson}
   */
  get json(): EdgeGatewaySslVpnSendOverTunnelJson {
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