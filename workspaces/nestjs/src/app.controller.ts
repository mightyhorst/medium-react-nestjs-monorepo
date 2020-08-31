import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * @requires Common
 */
import { User } from '@monorepo/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser(): User {

    const user: User = {
      email: 'nick@master-class.io',
      profilePic: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShaggyMullet&accessoriesType=Prescription01&hairColor=Auburn&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=BlazerSweater&eyeType=Side&eyebrowType=RaisedExcited&mouthType=Disbelief&skinColor=Brown',
      firstName: 'Nick',
      lastName: 'Mitchell'
    }

    return user;
  }
}
