import { Injectable } from '@nestjs/common';
import { User } from 'libs/shared/entities';

@Injectable()
export class UserService {
  constructor() {}

  async createUser(user: any) {
    console.log('Creating user...');
    return user;
  }

  async updateUser(user: any) {
    console.log('Updating user...');
    return user;
  }

  async deleteUser(user: any) {
    console.log('Deleting user...');
    return user;
  }

  async getUser(user: any) {
    console.log('Getting user...');
    return user;
  }

  async getAllUsers() {
    console.log('Getting users...');
    return [];
  }

  async getUserBy(Arg: any) {
    console.log(`Getting users by ${Arg}...`);
    return Arg;
  }
}
