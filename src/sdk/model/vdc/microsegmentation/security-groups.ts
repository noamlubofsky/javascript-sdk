import { SecurityGroupsJson } from './__json__/security-groups-json';
import { SecurityGroup } from './security-group';

/**
 * Security Groups.
 */
/* istanbul ignore next: autogenerated */
export class SecurityGroups {

  constructor(private _json: SecurityGroupsJson) {
  }

  /**
   * Get data.
   * @returns {Array<SecurityGroup>}
   */
  get data(): Array<SecurityGroup> {
    return this._json.data.map(it => new SecurityGroup(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {SecurityGroupsJson}
   */
  get json(): SecurityGroupsJson {
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
