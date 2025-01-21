import { Controller } from '@nestjs/common';
import { UserService } from './user-management.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateUserDto, UpdateUserDto } from 'libs/shared/DTOs';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('create-user')
  async createUser(user: CreateUserDto) {
    return this.userService.createUser(user);
  }

  @MessagePattern('update-user')
  async updateUser(user: UpdateUserDto) {
    return this.userService.updateUser(user);
  }

  @MessagePattern('delete-user')
  async deleteUser(userID: number) {
    return this.userService.deleteUser(userID);
  }

  @MessagePattern('get-user')
  async getUser(userID: any) {
    return this.userService.getUser(userID);
  }

  @MessagePattern('get-all-users')
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @MessagePattern('get-user-by')
  async getUserBy(Arg: any) {
    return this.userService.getUserBy(Arg);
  }

  @EventPattern('user.created')
  async handleUserCreated(user: any) {
    console.log('User created event received:', user);
    // Further event-specific logic
  }
}
