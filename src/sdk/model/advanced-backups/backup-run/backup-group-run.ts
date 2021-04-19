import { BackupGroupRunJson } from './__json__/backup-group-run-json';
import { BackupRun } from './backup-run';
import { CopyRun } from './copy-run';

/**
 * Backup Group Run.
 */
/* istanbul ignore next: autogenerated */
export class BackupGroupRun {

  constructor(private _json: BackupGroupRunJson) {
  }

  /**
   * Get uid.
   * @returns {string}
   */
  get uid(): string {
    return this._json.uid;
  }

  /**
   * Get backup run.
   * @returns {BackupRun}
   */
  get backupRun(): BackupRun {
    return new BackupRun(this._json.backup_run);
  }

  /**
   * Get copy runs.
   * @returns {Array<CopyRun>}
   */
  get copyRuns(): Array<CopyRun> {
    return this._json.copy_runs?.map(it => new CopyRun(it));
  }

  /**
   * Get backup group uid.
   * @returns {string}
   */
  get backupGroupUid(): string {
    return this._json.backup_group_uid;
  }

  /**
   * Get backup group name.
   * @returns {string}
   */
  get backupGroupName(): string {
    return this._json.backup_group_name;
  }

  /**
   * Get org uuid.
   * @returns {string}
   */
  get orgUuid(): string {
    return this._json.org_uuid;
  }

  /**
   * Get vdc uuid.
   * @returns {string}
   */
  get vdcUuid(): string {
    return this._json.vdc_uuid;
  }

  /**
   * Get company id.
   * @returns {string}
   */
  get companyId(): string {
    return this._json.company_id;
  }

  /**
   * Get location id.
   * @returns {string}
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Get the json representation of this class.
   * @returns {BackupGroupRunJson}
   */
  get json(): BackupGroupRunJson {
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