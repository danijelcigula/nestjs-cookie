import { Injectable } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import { ReadStream } from 'node:fs';

@Injectable()
export class CookiesService {
  getCookieImage(): ReadStream {
    console.log(join(process.cwd(), 'cookie.jpg'));
    return createReadStream(join(process.cwd(), 'cookie.jpg'));
  }
}
