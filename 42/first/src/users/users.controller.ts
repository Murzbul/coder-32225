import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserProps } from './entities/user.entity';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto)
  {
    if (createUserDto.firstName === '') throw new HttpException('Invalid firstName', HttpStatus.BAD_REQUEST)

    const user= this.usersService.create(createUserDto as UserProps);

    return {
        status: 'success',
        data: user
    }
  }

  @Get()
  findAll()
  {
    const users = this.usersService.findAll();

    return {
        status: 'success',
        data: users
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string)
  {
    if (id === '') throw new HttpException('Invalid param', HttpStatus.BAD_REQUEST)

    const user =  this.usersService.findOne(id);

    return {
        status: 'success',
        data: user
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto)
  {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string)
  {
    return this.usersService.remove(+id);
  }
}
