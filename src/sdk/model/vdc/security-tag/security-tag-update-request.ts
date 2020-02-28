import { SecurityTagUpdateRequestJson } from './__json__/security-tag-update-request-json';

/**
 * Security Tag Update Request.
 */
/* istanbul ignore next: autogenerated */
export class SecurityTagUpdateRequest {

  private readonly _json: SecurityTagUpdateRequestJson;

  constructor(securityTagUpdateRequest: SecurityTagUpdateRequest);
  constructor(securityTagUpdateRequestJson: SecurityTagUpdateRequestJson);
  constructor(updateVms: boolean, objectId: string, name: string, description: string, assignedVmIds: Array<string>);
  constructor(firstParam: boolean | SecurityTagUpdateRequest | SecurityTagUpdateRequestJson, objectId?: string,
              name?: string, description?: string, assignedVmIds?: Array<string>) {
    if (typeof firstParam === 'boolean') {
      // Parameters constructor
      this._json = {
        update_vms: firstParam,
        object_id: objectId,
        name: name,
        description: description,
        assigned_vm_ids: assignedVmIds
      } as SecurityTagUpdateRequestJson;
    } else if (firstParam instanceof SecurityTagUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as SecurityTagUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as SecurityTagUpdateRequestJson;
    }
  }

  /**
   * Get update vms.
   * @returns {boolean}
   */
  get updateVms(): boolean {
    return this._json.update_vms;
  }

  /**
   * Get object id.
   * @returns {string}
   */
  get objectId(): string {
    return this._json.object_id;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get assigned vm ids.
   * @returns {Array<string>}
   */
  get assignedVmIds(): Array<string> {
    return this._json.assigned_vm_ids;
  }

  /**
   * Get the json representation of this class.
   * @returns {SecurityTagUpdateRequestJson}
   */
  get json(): SecurityTagUpdateRequestJson {
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
