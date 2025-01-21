import { Injectable } from '@nestjs/common';
import { Pharmacy } from 'libs/shared/entities';

@Injectable()
export class PharmacyService {
  constructor() {}

  async createPharmacy(pharmacy: any) {
    console.log('Creating pharmacy...');
    return pharmacy;
  }

  async updatePharmacy(pharmacy: any) {
    console.log('Updating pharmacy...');
    return pharmacy;
  }

  async deletePharmacy(pharmacy: any) {
    console.log('Deleting pharmacy...');
    return pharmacy;
  }

  async getPharmacy(pharmacy: any) {
    console.log('Getting pharmacy...');
    return pharmacy;
  }

  async getAllPharmacies() {
    console.log('Getting pharmacies...');
    return [];
  }

  async getPharmacyBy(Arg: any) {
    console.log(`Getting pharmacies by ${Arg}...`);
    return Arg;
  }
}
