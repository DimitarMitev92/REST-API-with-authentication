import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const SECRET = ''; //WRITE SOME SECRET STRING

export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt: string, password: string) => {
    return crypto
        .createHmac('sha256', [salt, password].join('/'))
        .update(SECRET)
        .digest('hex');
};
