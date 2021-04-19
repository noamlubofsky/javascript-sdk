import { VmBackupStatusJson } from './__json__/vm-backup-status-json';
import { BackupGroupStatusDescriptor } from './backup-group-status-descriptor';

/**
 * VM Backup Status.
 */
/* istanbul ignore next: autogenerated */
export class VmBackupStatus {

  constructor(private _backupStatusJson: VmBackupStatusJson) {
  }

  /**
   * Get uuid.
   * @returns {string}
   */
  get uuid(): string {
    return this._backupStatusJson.uuid;
  }

  /**
   * Get backup groups.
   * @returns {Array<BackupGroupStatusDescriptor>}
   */
  get backupGroups(): Array<BackupGroupStatusDescriptor> {
    return this._backupStatusJson.backup_groups.map(it => new BackupGroupStatusDescriptor(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {VmBackupStatusJson}
   */
  get json(): VmBackupStatusJson {
    return Object.assign({}, this._backupStatusJson);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._backupStatusJson, undefined, 2);
  }
}