import { Body, Controller } from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class PharmacyController {
  constructor(private readonly pharmacyService: PharmacyService) {}

  @MessagePattern('get-all-pharmacies')
  async getAllPharmacies() {
    return this.pharmacyService.getAllPharmacies();
  }

  @MessagePattern('get-pharmacy')
  async getPharmacy(@Body() id: string) {
    return this.pharmacyService.getPharmacy(id);
  }

  @MessagePattern('create-pharmacy')
  async createPharmacy(@Body() pharmacy: any) {
    return this.pharmacyService.createPharmacy(pharmacy);
  }

  @MessagePattern('update-pharmacy')
  async updatePharmacy(@Body() pharmacy: any) {
    return this.pharmacyService.updatePharmacy(pharmacy);
  }

  @MessagePattern('delete-pharmacy')
  async deletePharmacy(@Body() id: string) {
    return this.pharmacyService.deletePharmacy(id);
  }

  @EventPattern('pharmacy.created')
  async handlePharmacyCreated(pharmacy: any) {
    console.log('Pharmacy created event received:', pharmacy);
    // Further event-specific logic
  }
}
