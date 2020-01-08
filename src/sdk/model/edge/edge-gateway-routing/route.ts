import { RouteJson } from './__json__/route-json';

/**
 * Route
 */
/* istanbul ignore next: autogenerated */
export class Route {

  constructor(private _json: RouteJson) {
  }

  /**
   * Get description.
   * @returns {string | undefined}
   */
  get description(): string | undefined {
    return this._json.description || undefined;
  }

  /**
   * Get vnic.
   * @returns {number}
   */
  get vnic(): number {
    return this._json.vnic;
  }

  /**
   * Get network.
   * @returns {string}
   */
  get network(): string {
    return this._json.network;
  }

  /**
   * Get next hop.
   * @returns {string}
   */
  get nextHop(): string {
    return this._json.next_hop;
  }

  /**
   * Get mtu.
   * @returns {number}
   */
  get mtu(): number {
    return this._json.mtu;
  }

  /**
   * Get type.
   * @returns {string}
   */
  get type(): string {
    return this._json.type;
  }

  /**
   * Get admin distance.
   * @returns {number}
   */
  get adminDistance(): number {
    return this._json.admin_distance;
  }

  /**
   * Get the json representation of this class.
   * @returns {RouteJson}
   */
  get json(): RouteJson {
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