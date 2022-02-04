import { O365TeamJson } from './__json__/o365-team-json';

/**
 * O365 Team
 */
/* istanbul ignore next: autogenerated */
export class O365Team {

  constructor(private _json: O365TeamJson) {
  }

  /**
   * Get the O365 Team description
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get the O365 Team display name
   * @returns {string}
   */
  get displayName(): string {
    return this._json.display_name;
  }

  /**
   * Get whether the Office 365 Team is backed up
   * @returns {boolean}
   */
  get isBackedUp(): boolean {
    return this._json.is_backed_up;
  }

  /**
   * Get the O365 Team mail
   * @returns {string}
   */
  get mail(): string {
    return this._json.mail;
  }

  /**
   * Get the native id of O365 Team
   * @returns {string}
   */
  get nativeId(): string {
    return this._json.native_id;
  }

  /**
   * Get the O365 VBO Organization iland platform UUID
   * @returns {string}
   */
  get organizationUuid(): string {
    return this._json.organization_uuid;
  }

  /**
   * Get the json representation of this class.
   * @returns {O365TeamJson}
   */
  get json(): O365TeamJson {
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