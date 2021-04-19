import { SourceBackupStatus } from './source-backup-status';
import { BackupRunStats } from './backup-run-stats';
import { BackupRunJson } from './__json__/backup-run-json';
import { RunType } from '../backup-policy/__json__/run-type';
import { StatusBackupRun } from './__json__/status-backup-run';

/**
 * Backup Run.
 */
/* istanbul ignore next: autogenerated */
export class BackupRun {

  constructor(private _json: BackupRunJson) {
  }

  /**
   * Get error message.
   * @returns {string | null}
   */
  get errorMessage(): string | null {
    return this._json.error_message || null;
  }

  /**
   * Get success message.
   * @returns {string | null}
   */
  get successMessage(): string | null {
    return this._json.success_message || null;
  }

  /**
   * Get metadata deleted.
   * @returns {boolean}
   */
  get metadataDeleted(): boolean {
    return this._json.metadata_deleted;
  }

  /**
   * Get quiesced.
   * @returns {boolean}
   */
  get quiesced(): boolean {
    return this._json.quiesced;
  }

  /**
   * Get run type.
   * @returns {RunType}
   */
  get runType(): RunType {
    return this._json.run_type;
  }

  /**
   * Get sla violated.
   * @returns {boolean | null}
   */
  get slaViolated(): boolean | null {
    return this._json.sla_violated ?? null;
  }

  /**
   * Get snapshots deleted.
   * @returns {boolean}
   */
  get snapshotsDeleted(): boolean {
    return this._json.snapshots_deleted;
  }

  /**
   * Get snapshots deleted time.
   * @returns {number | null}
   */
  get snapshotsDeletedTime(): number | null {
    return this._json.snapshots_deleted_time ?? null;
  }

  /**
   * Get source backup status.
   * @returns {Array<SourceBackupStatus>}
   */
  get sourceBackupStatus(): Array<SourceBackupStatus> {
    return this._json.source_backup_status?.map(it => new SourceBackupStatus(it));
  }

  /**
   * Get stats.
   * @returns {BackupRunStats}
   */
  get stats(): BackupRunStats {
    return new BackupRunStats(this._json.stats);
  }

  /**
   * Get status.
   * @returns {StatusBackupRun}
   */
  get status(): StatusBackupRun {
    return this._json.status;
  }

  /**
   * Get warnings.
   * @returns {Array<string>}
   */
  get warnings(): Array<string> {
    return this._json.warnings;
  }

  /**
   * Get the json representation of this class.
   * @returns {BackupRunJson}
   */
  get json(): BackupRunJson {
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