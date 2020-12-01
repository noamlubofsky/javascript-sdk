import { Entity } from '../common/entity';
import { EntityType } from '../common/__json__/entity-type';
import { O365OrganizationJson, O365OrganizationRegion, O365OrganizationType } from './__json__/o365-organization-json';
import { Iland } from '../../iland';
import { O365JobJson } from './__json__/o365-job-json';
import { O365Job } from './o365-job';
import { O365RestoreSession } from './o365-restore-session';
import { O365RestoreSessionJson } from './__json__/o365-restore-session-json';
import { O365RestoreSessionStartRequest } from './o365-restore-session-start-request';
import { O365User } from './o365-user';
import { O365UserJson } from './__json__/o365-user-json';

/**
 * O365 Organization
 */
export class O365Organization extends Entity {

  constructor(private _json: O365OrganizationJson) {
    super(_json);
  }

  /**
   * Gets a O365 Organization by UUID
   * @param uuid
   * @returns {Promise<O365Organization>} promise that resolves with a O365 Organization
   */
  static async getO365Organization(uuid: string): Promise<O365Organization> {
    return Iland.getHttp().get(`/o365-organizations/${uuid}`).then((response) => {
      const json = response.data as O365OrganizationJson;
      return new O365Organization(json);
    });
  }

  /**
   * Get the O365 Organization entity type
   */
  get entityType(): EntityType {
    return 'O365_ORGANIZATION';
  }

  /**
   * Gets the CRM of the O365 Organization
   */
  get crm(): string {
    return this._json.crm;
  }

  /**
   * Gets the location id of the O365 Organization
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Gets the contract uuid of the O365 Organization
   */
  get contractUuid(): string {
    return this._json.contract_uuid;
  }

  /**
   * Gets the Type of the O365 Organization
   */
  get type(): O365OrganizationType {
    return this._json.type;
  }

  /**
   * Gets the region of the O365 Organization
   */
  get region(): O365OrganizationRegion {
    return this._json.region;
  }

  /**
   * Is O365 Organization backed up
   */
  get isBackedUp(): boolean {
    return this._json.is_backed_up;
  }

  /**
   * Gets the first backup time of the O365 Organization
   */
  get firstBackupTime(): Date {
    return this._json.first_backup_time;
  }

  /**
   * Gets the last backup time of the O365 Organization
   */
  get lastBackupTime(): Date {
    return this._json.last_backup_time;
  }

  /**
   * Is the O365 Organization exchange online
   */
  get isExchangeOnline(): boolean {
    return this._json.is_exchange_online;
  }

  /**
   * Is the O365 Organization sharePoint online
   */
  get isSharePointOnline(): boolean {
    return this._json.is_share_point_online;
  }

  /**
   * Is O365 Organization in trial
   */
  get isTrial(): boolean {
    return this._json.is_trial;
  }

  /**
   * Get total users of the O365 Organization
   */
  get totalUsers(): number {
    return this._json.total_users;
  }

  /**
   * Get total backed up users of the O365 Organization
   */
  get totalBackedupUsers(): number {
    return this._json.total_backedup_users;
  }

  /**
   * Get total licensed users of the O365 Organization
   */
  get totalLicensedUsers(): number {
    return this._json.total_licensed_users;
  }

  /**
   * Get total licenses consumed by O365 Organization
   * @returns {number}
   */
  get totalLicensesConsumed(): number {
    return this._json.total_licenses_consumed;
  }

  /**
   * Refreshes the O365 Organization data by retrieving it from the API again.
   * @returns {Promise<O365Organization>} promise that resolves with this object
   */
  async refresh(): Promise<O365Organization> {
    return Iland.getHttp().get(`/o365-organizations/${this.uuid}`).then((response) => {
      this._json = response.data as O365OrganizationJson;
      return this;
    });
  }

  /**
   * Get O365Organization Jobs.
   * @returns {Promise<Array<O365Job>>}
   */
  /* istanbul ignore next: autogenerated */
  async getJobs(): Promise<Array<O365Job>> {
    return Iland.getHttp().get(`/o365-organizations/${this.uuid}/jobs`).then((response) => {
      const json = response.data.data as Array<O365JobJson>;
      return json.map((it) => new O365Job(it));
    });
  }

  /**
   * Get O365 Organization's Inactive Restore Sessions
   * Ordered by creation time for the pagination
   * @param {number} page - page to get the restore sessions from. API page holds max 100 entries
   * @param {number} pageSize - how many restore sessions from a certain page to get, cannot get more than 100
   * @returns {Promise<Array<O365RestoreSession>>}
   */
  /* istanbul ignore next: autogenerated */
  async getInactiveRestoreSessions(page?: number, pageSize?: number): Promise<Array<O365RestoreSession>> {
    return Iland.getHttp().get(`/o365-organizations/${this.uuid}/inactive-restore-sessions`, {
      params: {
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365RestoreSessionJson>;
      return json.map((it) => new O365RestoreSession(it));
    });
  }

  /**
   * Get O365 Organization's Active Restore Sessions
   * @returns {Promise<Array<O365RestoreSession>>}
   */
  /* istanbul ignore next: autogenerated */
  async getActiveRestoreSessions(): Promise<Array<O365RestoreSession>> {
    return Iland.getHttp().get(`/o365-organizations/${this.uuid}/active-restore-sessions`).then((response) => {
      const json = response.data.data as Array<O365RestoreSessionJson>;
      return json.map((it) => new O365RestoreSession(it));
    });
  }

  /**
   * Start an O365 Restore Session
   * @param {O365RestoreSessionStartRequest} startRequest
   * @returns {Promise<O365RestoreSession>} the restore session created
   */
  /* istanbul ignore next: autogenerated */
  async createRestoreSession(startRequest: O365RestoreSessionStartRequest): Promise<O365RestoreSession> {
    return Iland.getHttp().post(`/o365-organizations/${this.uuid}/actions/start-restore-session`, startRequest.json)
        .then((response) => {
          const json = response.data as O365RestoreSessionJson;
          return new O365RestoreSession(json);
        });
  }

  /**
   * Get the paginated users for the Office 365 Organization
   * @param page
   * @param pageSize
   * @returns {Promise<Array<O365User>>}
   */
  /* istanbul ignore next: autogenerated */
  async getOrgUsers(page?: number, pageSize?: number): Promise<Array<O365User>> {
    return Iland.getHttp().get(`/o365-organizations/${this.uuid}/users`, {
      params: {
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365UserJson>;
      return json.map((it) => new O365User(it));
    });
  }

  /**
   * Delete the O365 Organization
   * @returns {Promise}
   */
  /* istanbul ignore next */
  async deleteOrg(): Promise<unknown> {
    return Iland.getHttp().delete(`/o365-organizations/${this.uuid}`);
  }
}
