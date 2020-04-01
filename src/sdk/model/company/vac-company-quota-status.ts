/* istanbul ignore next: autogenerated */
import { VacCompanyQuotaStatusJson } from './__json__/vac-company-quota-status';

export class VacCompanyQuotaStatus {

  constructor(private _json: VacCompanyQuotaStatusJson) {
  }

  /**
   * Get total storage quota.
   * @returns {number}
   */
  get totalStorageQuota(): number {
    return this._json.total_storage_quota;
  }

  /**
   * Get used storage quota.
   * @returns {number}
   */
  get usedStorageQuota(): number {
    return this._json.used_storage_quota;
  }

  /**
   * Get total contracted quota.
   * @returns {number}
   */
  get totalContractedQuota(): number {
    return this._json.total_contracted_quota;
  }

  /**
   * Get number of contracts.
   * @returns {number}
   */
  get numberOfContracts(): number {
    return this._json.number_of_contracts;
  }

  /**
   * Get the json representation of this class.
   * @returns {VacCompanyQuotaStatusJson}
   */
  get json(): VacCompanyQuotaStatusJson {
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
