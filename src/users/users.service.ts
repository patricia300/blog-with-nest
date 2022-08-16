import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) 
    private usersRepository: Repository<User>,
  ) { }
  
  async create(createUserDto: CreateUserDto) {
    const { password, ...createUserDtoWithoutPwd } = createUserDto;
    const hash = await this.encryptPassword(password);

    const newUser = this.usersRepository.create({ hash, ...createUserDtoWithoutPwd });
    return this.usersRepository.save(newUser);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string) {
    return this.usersRepository.findOneBy({ id });
  }

  findOneByUsername(username: string)
  {
    return this.usersRepository.findOneBy({ username });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (!updateUserDto.password) {
      const user = this.usersRepository.create({id, ...updateUserDto});
      return this.usersRepository.save(user);
    }
    const { password, ...updateUserDtoWithoutPwd } = updateUserDto;
    const hash = await this.encryptPassword(password);
    
    const user = this.usersRepository.create({ id, hash, ...updateUserDtoWithoutPwd });
    return this.usersRepository.save(user);
  }

  async remove(id: string): Promise<User> {
    return this.usersRepository
      .findOneBy({ id })
      .then(
        (user) => this.usersRepository.softRemove(user)
      );
  }

  async encryptPassword(password: string): Promise<string>
  {
    const saltOrRounds = await bcrypt.genSalt();
    return await bcrypt.hash(password, saltOrRounds);
  }
}
