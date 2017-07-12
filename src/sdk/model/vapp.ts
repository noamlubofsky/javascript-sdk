import { Entity } from './entity';
import { VappJson, VappStatus } from './json/vapp';
import { Iland } from '../iland';
import { EntityType } from './json/entity-type';
import { VmJson } from './json/vm';
import { Vm } from './vm';

/**
 * Virtual Application.
 */
export class Vapp extends Entity {

  constructor(private _json: VappJson) {
    super(_json);
  }

  /**
   * Gets a vApp by UUID.
   * @param uuid vApp UUID
   * @returns {Promise<Vapp>} promise that resolves with the vApp
   */
  static async getVapp(uuid: string): Promise<Vapp> {
    return Iland.getHttp().get(`/vapp/${uuid}`).then(function(response) {
      let json = response.data as VappJson;
      return new Vapp(json);
    });
  }

  getEntityType(): EntityType {
    return 'VAPP';
  }

  /**
   * Indicates whether this vApp is currently deployed.
   * @returns {boolean} value
   */
  isDeployed(): boolean {
    return this._json.deployed;
  }

  /**
   * Gets the vApps current power status.
   * @returns {VappPowerStatus} power status
   */
  getPowerStatus(): VappPowerStatus {
    if (this._json.deployed && this._json.status === 'POWERED_OFF') {
      return 'PARTIALLY_POWERED_OFF';
    } else {
      return this._json.status;
    }
  }

  /**
   * Gets the storage profiles that are associated with this VM
   * @returns {Array<string>} array of storage profile UUIDs
   */
  getStorageProfiles(): Array<string> {
    return this._json.storage_profiles;
  }

  /**
   * Gets the runtime lease setting, in seconds.
   * @returns {number} runtime lease
   */
  getRuntimeLease(): number {
    return this._json.runtime_lease;
  }

  /**
   * Gets the storage lease setting, in seconds.
   * @returns {number} storage lease
   */
  getStorageLease(): number {
    return this._json.storage_lease;
  }

  /**
   * Gets the expiration date of the runtime lease, if one is currently active.
   * @returns {Date} runtime lease expiration date
   */
  getRuntimeLeaseExpirationDate(): Date | null {
    return this._json.runtime_expire === null ? null : new Date(this._json.runtime_expire);
  }

  /**
   * Gets the expiration date of the storage lease, if one is currently active.
   * @returns {Date} storage lease expiration date
   */
  getStorageLeaseExpirationDate(): Date | null {
    return this._json.storage_expire === null ? null : new Date(this._json.storage_expire);
  }

  /**
   * Gets the UUID of the vDC that this vApp is associated with.
   * @returns {string} vDC UUID
   */
  getVdcUuid(): string {
    return this._json.vdc_uuid;
  }

  /**
   * Gets the UUID of the Org that this vApp is associated with.
   * @returns {string} org UUID
   */
  getOrgUuid(): string {
    return this._json.org_uuid;
  }

  /**
   * Gets the datacenter location identifier for the vApp.
   * @returns {string} datacenter location ID
   */
  getLocationId(): string {
    return this._json.location_id;
  }

  /**
   * Gets the vApps description.
   * @returns {string} description
   */
  getDescription(): string {
    return this._json.description;
  }

  /**
   * Gets the vCloud HREF of the vApp.
   * @returns {string} vCloud HREF
   */
  getVcloudHref(): string {
    return this._json.vcloud_href;
  }

  /**
   * Gets the date that this vApp was created.
   * @returns {Date} creation date
   */
  getCreationDate(): Date {
    return new Date(this._json.created_date);
  }

  /**
   * Indicates whether this vApp is currently in the expired items bin.
   * @returns {boolean} value
   */
  isExpired(): boolean {
    return this._json.is_expired;
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {VappJson} the API json object
   */
  getJson(): VappJson {
    return Object.assign({}, this._json);
  }

  /**
   * Refreshes the vApp data by retrieving it from the API again.
   * @returns {Promise<Vapp>}
   */
  async refresh(): Promise<Vapp> {
    let self = this;
    return Iland.getHttp().get(
        `/vapp/${self.getUuid()}`).then(function(response) {
          self._json = response.data as VappJson;
          return self;
        });
  }

  /**
   * Gets the vApps child VMs.
   * @returns {Promise<Vm[]>} promise that resolves with an array of child VMs
   */
  async getVms(): Promise<Array<Vm>> {
    let self = this;
    return Iland.getHttp().get(
        `/vapp/${self.getUuid()}/vms`).then(function(response) {
          let json = response.data as Array<VmJson>;
          return json.map((vmJson) => new Vm(vmJson));
        });
  }

}

/**
 * Enumeration of possible vApp power statuses.
 */
export type VappPowerStatus = VappStatus |
    'PARTIALLY_POWERED_OFF';