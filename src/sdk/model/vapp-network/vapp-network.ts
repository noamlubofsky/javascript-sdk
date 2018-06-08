import { Iland } from '../../iland';
import { EntityType } from '../common/__json__/entity-type';
import { Task, TaskJson } from '../task';
import { VappNetworkUpdateRequest } from './vapp-network-update-request';
import { VappNetworkDHCPService } from './vapp-network-dhcp-service';
import { VappNetworkNATService } from './vapp-network-nat-service';
import { VappNetworkNATServiceUpdateRequest } from './vapp-network-nat-service-update-request';
import { VappNetworkDHCPServiceJson, VappNetworkFirewallJson, VappNetworkJson, VappNetworkNATServiceJson }
  from './__json__';
import { VappNetworkDHCPServiceUpdateRequest } from './vapp-network-dhcp-service-update-request';
import { AbstractNetwork } from '../internal-network';
import { VappNetworkFirewall } from './vapp-network-firewall';
import { VappNetworkFirewallUpdateRequest } from './vapp-network-firewall-update-request';

/**
 * vApp Network.
 */
export class VappNetwork extends AbstractNetwork {

  constructor(_json: VappNetworkJson) {
    super(_json);
  }

  /**
   * Gets an vApp network by UUID.
   * @param uuid vApp network UUID
   * @returns {Promise<VappNetwork>} promise that resolves with the vApp network
   */
  static async getVappNetwork(uuid: string): Promise<VappNetwork> {
    return Iland.getHttp().get(`/vapp-networks/${uuid}`).then((response) => {
      const json = response.data as VappNetworkJson;
      return new VappNetwork(json);
    });
  }

  /**
   * Gets the entity type.
   * @returns {EntityType}
   */
  get entityType(): EntityType {
    return 'IAAS_VAPP_NETWORK';
  }

  /**
   * Gets the UUID of the vApp that the network is associated with.
   * @returns {string} vApp UUID
   */
  get vappUuid(): string | null {
    return (this._json as VappNetworkJson).vapp_uuid;
  }

  /**
   * If this is a NAT Routed network, gets the external IP of the router for the vApp Network edge gateway.
   * @returns {string} IP address
   */
  get routerExternalIp(): string {
    return (this._json as VappNetworkJson).router_external_ip;
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {VappNetworkJson} the API __json__ object
   */
  get json(): VappNetworkJson {
    return Object.assign({}, this._json as VappNetworkJson);
  }

  /**
   * Refreshes the vApp network data by retrieving it from the API again.
   * @returns {Promise<VappNetwork>} promise that resolves with this object
   */
  async refresh(): Promise<VappNetwork> {
    return Iland.getHttp().get(`/vapp-networks/${this.uuid}`).then((response) => {
      this._json = response.data as VappNetworkJson;
      return this;
    });
  }

  /**
   * Remove a network from the given Vapp.
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async removeNetworkFromVapp(): Promise<Task> {
    return Iland.getHttp().delete(`/vapp-networks/${this.uuid}`).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Update a vApp network's properties. Note that vCloud Director changes the
   * UUID of the network when it is updated.
   * @param {VappNetworkUpdateRequest} vappNetwork VappNetwork update request
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async updateVappNetwork(vappNetwork: VappNetworkUpdateRequest): Promise<Task> {
    return Iland.getHttp().put(`/vapp-networks/${this.uuid}`, vappNetwork.json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Get DHCP service for a given vapp network.
   * @returns {Promise<VappNetworkDHCPService>} promise Promise that resolve with VappNetworkDHCPService
   */
  /* istanbul ignore next: autogenerated */
  async getDHCPService(): Promise<VappNetworkDHCPService> {
    return Iland.getHttp().get(`/vapp-networks/${this.uuid}/dhcp`).then((response) => {
      const json = response.data as VappNetworkDHCPServiceJson;
      return new VappNetworkDHCPService(json);
    });
  }

  /**
   *
   * @param {VappNetworkDHCPServiceUpdateRequest} dhcpService
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async updateDHCPService(dhcpService: VappNetworkDHCPServiceUpdateRequest): Promise<Task> {
    return Iland.getHttp().post(`/vapp-networks/${this.uuid}/actions/update-dhcp`, dhcpService.json)
        .then((response) => {
          const json = response.data as TaskJson;
          return new Task(json);
        });
  }

  /**
   * Get NAT service for a given vapp network
   * @returns {Promise<VappNetworkNATService>}
   */
  /* istanbul ignore next: autogenerated */
  async getNATService(): Promise<VappNetworkNATService> {
    return Iland.getHttp().get(`/vapp-networks/${this.uuid}/nat`).then((response) => {
      const json = response.data as VappNetworkNATServiceJson;
      return new VappNetworkNATService(json);
    });
  }

  /**
   * Get a firewall for a given vapp network.
   * @returns {Promise<VappNetworkFirewall>} promise Promise that resolves with a VappNetworkFirewall
   */
  /* istanbul ignore next: autogenerated */
  async getFirewall(): Promise<VappNetworkFirewall> {
    return Iland.getHttp().get(`/vapp-networks/${this.uuid}/firewall`).then((response) => {
      const json = response.data as VappNetworkFirewallJson;
      return new VappNetworkFirewall(json);
    });
  }

  /**
   * Update the NAT service for a given vapp network
   * @param {VappNetworkNATServiceUpdateRequest} natService vapp network nat service
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async updateNAT(natService: VappNetworkNATServiceUpdateRequest): Promise<Task> {
    return Iland.getHttp().post(`/vapp-networks/${this.uuid}/actions/update-nat`, natService.json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Update a firewall for a given vApp Network.
   * @param {VappNetworkFirewallUpdateRequest} firewall vapp firewall
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async updateFirewall(firewall: VappNetworkFirewallUpdateRequest): Promise<Task> {
    return Iland.getHttp().post(`/vapp-networks/${this.uuid}/actions/update-firewall`, firewall.json)
        .then((response) => {
          const json = response.data as TaskJson;
          return new Task(json);
        });
  }

}
