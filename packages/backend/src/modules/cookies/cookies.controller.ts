import {Controller, Get, Post, Req, Res} from '@nestjs/common';
import {Request, Response} from 'express';

@Controller('cookies')
export class CookiesController {

    @Get()
    getCookie(@Req() req: Request) {
        return req.cookies
    }

    @Post()
    setCookie(@Res() res: Response) {
        const cookieValue = 'test';
        const domain = 'localhost';
        const secure = false;
        res.cookie('cookie', cookieValue, {domain, secure, httpOnly: true});
        res.status(201).send('OK');
    }

    @Get('image')
    getCookieImage(@Res() res: Response, @Req() req: Request) {
        console.log('Request cookies', JSON.stringify(req.cookies));
        res.redirect('https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chocolate-chunk-cookies_0-6f27241.jpg?quality=90&webp=true&resize=440,400')
    }
}
