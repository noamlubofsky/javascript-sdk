import { CompanyLocationIntegratedBackupStatusJson } from './__json__/company-location-integrated-backup-status-json';
import { OrgIntegratedBackupStatus } from './org-integrated-backup-status';

/**
 * Company Location Integrated Backup Status.
 */
/* istanbul ignore next: autogenerated */
export class CompanyLocationIntegratedBackupStatus {

  constructor(private _json: CompanyLocationIntegratedBackupStatusJson) {
  }

  /**
   * Get the ID of the company.
   * @returns {string}
   */
  get companyId(): string {
    return this._json.company_id;
  }

  /**
   * Get the ID of the datacenter location.
   * @returns {string}
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Get the statuses of child orgs.
   * @returns {Array<OrgIntegratedBackupStatus>}
   */
  get orgStatuses() {
    return this._json.org_statuses.map(it => new OrgIntegratedBackupStatus(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {CompanyLocationIntegratedBackupStatusJson}
   */
  get json(): CompanyLocationIntegratedBackupStatusJson {
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
