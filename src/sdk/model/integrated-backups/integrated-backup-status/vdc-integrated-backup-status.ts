import { VdcIntegratedBackupStatusJson } from './__json__/vdc-integrated-backup-status-json';
import { IntegratedBackupStatus } from './__json__/integrated-backup-status';
import { VappIntegratedBackupStatus } from './vapp-integrated-backup-status';

/**
 * vDC Integrated Backup Status.
 */
/* istanbul ignore next: autogenerated */
export class VdcIntegratedBackupStatus {

  constructor(private _intBackupStatusJson: VdcIntegratedBackupStatusJson) {
  }

  /**
   * Get the UUID of the vDC.
   * @returns {string}
   */
  get vdcUuid(): string {
    return this._intBackupStatusJson.vdc_uuid;
  }

  /**
   * Get the vDC's backup configuration status.
   * @returns {IntegratedBackupStatus}
   */
  get status(): IntegratedBackupStatus {
    return this._intBackupStatusJson.status;
  }

  /**
   * Get the statuses of child vApps.
   * @returns {Array<VappIntegratedBackupStatus>}
   */
  get vappStatuses() {
    return this._intBackupStatusJson.vapp_statuses.map(it => new VappIntegratedBackupStatus(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {VdcIntegratedBackupStatusJson}
   */
  get json(): VdcIntegratedBackupStatusJson {
    return Object.assign({}, this._intBackupStatusJson);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._intBackupStatusJson, undefined, 2);
  }
}
