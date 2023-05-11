import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserProps } from './entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService
{
  public users: Array<User>;

  constructor()
  {
      this.users = [];
  }

  create(createUserDto: UserProps)
  {
    const user = new User({ ...createUserDto, id: uuidv4() });
    this.users.push(user);

    return user;
  }

  findAll(): Array<User>
  {
    return this.users;
  }

  findOne(id: string)
  {
    return this.users.find(user => user.id === id );
  }

  update(id: number, updateUserDto: UpdateUserDto)
  {
    return `This action updates a #${id} user`;
  }

  remove(id: number)
  {
    return `This action removes a #${id} user`;
  }
}
