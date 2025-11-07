// app/services/geoip_service.ts
export class GeoIpService {
  async lookup(_ip: string) {
    // buscar localização...
    return { country: 'BR' }
  }
}
