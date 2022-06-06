import { O365TeamItemsExportRequestJson } from './__json__/o365-team-items-export-request-json';

/**
 * O365 Team items export request
 */
/* istanbul ignore next: autogenerated */
export class O365TeamItemsExportRequest {

  constructor(private _json: O365TeamItemsExportRequestJson) {
  }

  /**
   * Get the ids of O365 Team items.
   * @returns {Array<string>}
   */
  get itemIds(): Array<string> {
    return this._json.item_ids;
  }

  /**
   * Get the json representation of this class.
   * @returns {O365TeamItemsExportRequestJson}
   */
  get json(): O365TeamItemsExportRequestJson {
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