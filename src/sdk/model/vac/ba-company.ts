import { BaCompanyJson } from './__json__/ba-company';
import { Iland } from '../../iland';
import { PerfIntervalType } from '../vcc/vcc-perf-sample/__json__/perf-interval-type';
import { BaCompanyBackupHistory } from './ba-company-backup-history';
import { BaCompanyBackupHistoryJson } from './__json__/ba-company-backup-history';
import { VacPerfSample } from './vac-perf-sample';
import { VacPerfSampleJson } from './__json__/vac-perf-sample';
import { EntityType } from '../common/__json__/entity-type';
import { Entity } from '../common/entity';
import { BaBackupResource } from './ba-backup-resource';
import { BaCompanyContractUpgradeRequest } from './upgrade-tenant-contract-request';
import { BaCompanyContractUpgradeRequestJson } from './__json__/upgrade-tenant-contract-request';
import { BaCompanyUpdateRequest } from './ba-company-update-request';
import { BaCompanyUpdateRequestJson } from './__json__/ba-company-update-request';
import { BaCompanyPasswordResetRequest } from './ba-password-reset-request';
import { BaCompanyPasswordResetRequestJson } from './__json__/ba-password-reset-request';

/* istanbul ignore next: autogenerated */
export class BaCompany extends Entity {

  constructor(private _json: BaCompanyJson) {
    super(_json);
  }

  /**
   * Refreshes the Ba Company data by retrieving it from the API again.
   * @param {string} uuid the company uuid
   * @returns {Promise<BaCompany>} promise that resolves with this object
   */
  static async getVacCompany(uuid: string): Promise<BaCompany> {
    return Iland.getHttp().get(`/vac-companies/${uuid}`).then((response) => {
      const json = response.data as BaCompanyJson;
      return new BaCompany(json);
    });
  }

  get entityType(): EntityType {
    return 'VCC_BACKUP_TENANT';
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get crm.
   * @returns {string}
   */
  get crm(): string {
    return this._json.crm;
  }

  /**
   * Get location id.
   * @returns {string}
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Get contract uuid.
   * @returns {string}
   */
  get contractUuid(): string {
    return this._json.contract_uuid;
  }

  /**
   * Get owner name.
   * @returns {string}
   */
  get ownerName(): string {
    return this._json.owner_name;
  }

  /**
   * Get backup resources.
   * @returns {Array<BaBackupResource> | null}
   */
  get backupResources(): Array<BaBackupResource> | null {
    return this._json.backup_resources ? this._json.backup_resources.map(it => new BaBackupResource(it)) : null;
  }

  /**
   * Get last active.
   * @returns {Date | null}
   */
  get lastActive(): Date | null {
    return this._json.last_active ? new Date(this._json.last_active) : null;
  }

  /**
   * Get last result.
   * @returns {string}
   */
  get lastResult(): string {
    return this._json.last_result;
  }

  /**
   * Get uuid.
   * @returns {string}
   */
  get uuid(): string {
    return this._json.uuid;
  }

  /**
   * Get instance uid.
   * @returns {string}
   */
  get instanceUid(): string {
    return this._json.instance_uid;
  }

  /**
   * Get cloud connect agent uid.
   * @returns {string}
   */
  get cloudConnectAgentUid(): string {
    return this._json.cloud_connect_agent_uid;
  }

  /**
   * Get site name.
   * @returns {string}
   */
  get siteName(): string {
    return this._json.site_name;
  }

  /**
   * Get vcd organization uid.
   * @returns {string}
   */
  get vcdOrganizationUid(): string {
    return this._json.vcd_organization_uid;
  }

  /**
   * Get tenant type.
   * @returns {string}
   */
  get tenantType(): string {
    return this._json.tenant_type;
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get title.
   * @returns {string}
   */
  get title(): string {
    return this._json.title;
  }

  /**
   * Get first name.
   * @returns {string}
   */
  get firstName(): string {
    return this._json.first_name;
  }

  /**
   * Get last name.
   * @returns {string}
   */
  get lastName(): string {
    return this._json.last_name;
  }

  /**
   * Get user name.
   * @returns {string}
   */
  get userName(): string {
    return this._json.user_name;
  }

  /**
   * Get email address.
   * @returns {string}
   */
  get emailAddress(): string {
    return this._json.email_address;
  }

  /**
   * Get is enabled.
   * @returns {boolean}
   */
  get isEnabled(): boolean {
    return this._json.is_enabled;
  }

  /**
   * Get tax id.
   * @returns {string}
   */
  get taxId(): string {
    return this._json.tax_id;
  }

  /**
   * Get telephone.
   * @returns {string}
   */
  get telephone(): string {
    return this._json.telephone;
  }

  /**
   * Get country.
   * @returns {string}
   */
  get country(): string {
    return this._json.country;
  }

  /**
   * Get city.
   * @returns {string}
   */
  get city(): string {
    return this._json.city;
  }

  /**
   * Get street.
   * @returns {string}
   */
  get street(): string {
    return this._json.street;
  }

  /**
   * Get us state. System ID of a USA states where a company is located.
   * @returns {string}
   */
  get usState(): string {
    return this._json.us_state;
  }

  /**
   * Get zip code.
   * @returns {string}
   */
  get zipCode(): string {
    return this._json.zip_code;
  }

  /**
   * Get domain.
   * @returns {string}
   */
  get domain(): string {
    return this._json.domain;
  }

  /**
   * Get company id.
   * @returns {string}
   */
  get companyId(): string {
    return this._json.company_id;
  }

  /**
   * Get notes.
   * @returns {string}
   */
  get notes(): string {
    return this._json.notes;
  }

  /**
   * Get backup protection enabled.
   * @returns {boolean}
   */
  get backupProtectionEnabled(): boolean {
    return this._json.backup_protection_enabled;
  }

  /**
   * Get backup protection period.
   * @returns {number}
   */
  get backupProtectionPeriod(): number {
    return this._json.backup_protection_period;
  }

  /**
   * Get network failover resources enabled.
   * @returns {boolean}
   */
  get networkFailoverResourcesEnabled(): boolean {
    return this._json.network_failover_resources_enabled;
  }

  /**
   * Get number of public ip.
   * @returns {number}
   */
  get numberOfPublicIp(): number {
    return this._json.number_of_public_ip;
  }

  /**
   * Get public ip enabled.
   * @returns {boolean}
   */
  get publicIpEnabled(): boolean {
    return this._json.public_ip_enabled;
  }

  /**
   * Get max concurrent tasks.
   * @returns {number}
   */
  get maxConcurrentTasks(): number {
    return this._json.max_concurrent_tasks;
  }

  /**
   * Get bandwidth throttling enabled.
   * @returns {boolean}
   */
  get bandwidthThrottlingEnabled(): boolean {
    return this._json.bandwidth_throttling_enabled;
  }

  /**
   * Get allowed bandwidth.
   * @returns {number}
   */
  get allowedBandwidth(): number {
    return this._json.allowed_bandwidth;
  }

  /**
   * Get allowed bandwidth units.
   * @returns {string}
   */
  get allowedBandwidthUnits(): string {
    return this._json.allowed_bandwidth_units;
  }

  /**
   * Get gateway failover enabled.
   * @returns {boolean}
   */
  get gatewayFailoverEnabled(): boolean {
    return this._json.gateway_failover_enabled;
  }

  /**
   * Get vms backed up.
   * @returns {number}
   */
  get vmsBackedUp(): number {
    return this._json.vms_backed_up;
  }

  /**
   * Get vms replicated.
   * @returns {number}
   */
  get vmsReplicated(): number {
    return this._json.vms_replicated;
  }

  /**
   * Get vms backed up to cloud.
   * @returns {number}
   */
  get vmsBackedUpToCloud(): number {
    return this._json.vms_backed_up_to_cloud;
  }

  /**
   * Get managed physical workstations.
   * @returns {number}
   */
  get managedPhysicalWorkstations(): number {
    return this._json.managed_physical_workstations;
  }

  /**
   * Get managed cloud workstations.
   * @returns {number}
   */
  get managedCloudWorkstations(): number {
    return this._json.managed_cloud_workstations;
  }

  /**
   * Get managed physical servers.
   * @returns {number}
   */
  get managedPhysicalServers(): number {
    return this._json.managed_physical_servers;
  }

  /**
   * Get managed cloud servers.
   * @returns {number}
   */
  get managedCloudServers(): number {
    return this._json.managed_cloud_servers;
  }

  /**
   * Get expiration enabled.
   * @returns {boolean}
   */
  get expirationEnabled(): boolean {
    return this._json.expiration_enabled;
  }

  /**
   * Get expiration date.
   * @returns {Date | null}
   */
  get expirationDate(): Date | null {
    return this._json.expiration_date ? new Date(this._json.expiration_date) : null;
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
   * Get endpoint.
   * @returns {string}
   */
  get endpoint(): string {
    return this._json.endpoint;
  }

  /**
   * Get agent and sub tenant count.
   * @returns {number}
   */
  get agentAndSubTenantCount(): number {
    return this._json.agent_and_sub_tenant_count;
  }

  /**
   * Get the json representation of this class.
   * @returns {BaCompanyJson}
   */
  get json(): BaCompanyJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Refreshes the Ba Company data by retrieving it from the API again.
   * @returns {Promise<BaCompany>} promise that resolves with this object
   */
  async refresh(): Promise<BaCompany> {
    return Iland.getHttp().get(`/vac-companies/${this.uuid}`).then((response) => {
      this._json = response.data as BaCompanyJson;
      return this;
    });
  }

  /**
   * Gets the storage usage for the Ba Company
   * @param {number} start
   * @param {number} end
   * @param {PerfIntervalType} interval
   * @param {number} limit
   * @returns {Promise<Array<VacPerfSample>>} array of Vac Perf Samples
   */
  async getStorageUsage(start?: number, end?: number, interval?: PerfIntervalType,
                        limit?: number): Promise<Array<VacPerfSample>> {
    return Iland.getHttp().get(`/vac-companies/${this.uuid}/storage-usage`, {
      params: {
        start: start,
        end: end,
        interval: interval,
        limit: limit
      }
    }).then((response) => {
      const samples = response.data.data as Array<VacPerfSampleJson>;
      return samples.map(it => new VacPerfSample(it));
    });
  }

  /**
   * Gets the backup history for the BaCompany
   * @param {number} offset
   * @param {number} limit
   * @returns {Promise<Array<BaCompanyBackupHistory>>} array of Vac BaCompany Backup History objects
   */
  async getBackupHistory(offset?: number, limit?: number): Promise<Array<BaCompanyBackupHistory>> {
    return Iland.getHttp().get(`/vac-companies/${this.uuid}/backup-history`, {
      params: {
        offset: offset,
        limit: limit
      }
    }).then((response) => {
      const samples = response.data.data as Array<BaCompanyBackupHistoryJson>;
      return samples.map(it => new BaCompanyBackupHistory(it));
    });
  }

  /**
   * Upgrades the contract for the BaCompany
   * @param {BaCompanyContractUpgradeRequest} updateContractRequest
   * @returns {Promise}
   */
  async upgradeTenantContract(updateContractRequest: BaCompanyContractUpgradeRequest): Promise<unknown> {
    const request = updateContractRequest.json;
    return Iland.getHttp().post(`/vac-companies/${this.uuid}/actions/request-upgrade-contract`, request);
  }

  /**
   * Update BaCompany name
   * @param {BaCompanyUpdateRequest} updateRequest
   * @returns {Promise<BaCompany>}
   */
  async updateVacCompany(updateRequest: BaCompanyUpdateRequest): Promise<BaCompany> {
    const request: BaCompanyUpdateRequestJson = updateRequest.json;
    return Iland.getHttp().put(`/vac-companies/${this.uuid}`, request).then((response) => {
      this._json = response.data as BaCompanyJson;
      return this;
    });
  }

  /**
   * Reset the password for a given tenant (BaCompany)
   * @param {BaCompanyPasswordResetRequest} resetPasswordRequest
   * @returns {Promise}
   */
  async resetVacCompanyPassword(resetPasswordRequest: BaCompanyPasswordResetRequest): Promise<unknown> {
    const request: BaCompanyPasswordResetRequestJson = resetPasswordRequest.json;
    return Iland.getHttp().post(`/vac-companies/${this.uuid}/actions/update-password`, request);
  }
}
