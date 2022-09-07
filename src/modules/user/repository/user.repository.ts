import { UserEntity } from 'src/database/entities/users.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async createUser(data: CreateUserDto): Promise<CreateUserDto> {
    return this.save(data);
  }

  async getAllUsers(): Promise<CreateUserDto[]> {
    return this.find();
  }

  async findOneById(id: number): Promise<CreateUserDto> {
    return this.findOne(id);
  }

  async updateUser(id: number, data: UpdateUserDto) {
    const user = await this.findOne(id);

    return this.save({
      ...user,
      ...data,
    });
  }

  async deleteUserById(id: number): Promise<object> {
    this.delete(id);

    return { message: 'User deleted successfully' };
  }
}
