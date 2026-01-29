import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
// import {
//   createCipheriv,
//   createDecipheriv,
//   randomBytes,
//   scrypt,
// } from 'node:crypto';
// import { promisify } from 'node:util';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    // ENCRYPTION
    // const iv = randomBytes(16);
    // const password = createUserDto.password;
    // const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
    // const cipher = createCipheriv('aes-256-ctr', key, iv);

    // const textToEncrypt = 'nesttest';
    // const encrpytedText = Buffer.concat([
    //   cipher.update(textToEncrypt),
    //   cipher.final(),
    // ]);
    // console.log({ newPassword: encrpytedText });

    // const decipher = createDecipheriv('aes-256-ctr', key, iv);
    // const decryptedText = Buffer.concat([
    //   decipher.update(encrpytedText),
    //   decipher.final(),
    // ]);
    // console.log({ decryptedText: decryptedText });

    // HASH
    const salt = await bcrypt.genSalt();
    // const saltOrRounds = 10;
    const password = createUserDto.password;
    const hash = await bcrypt.hash(password, salt);
    const isMatch = await bcrypt.compare(password, hash);
    console.log({
      isMatch: isMatch,
      passwordInput: password,
      hashedPassword: hash,
    });
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
