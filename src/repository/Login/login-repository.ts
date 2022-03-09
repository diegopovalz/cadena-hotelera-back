import { model } from 'mongoose';
import { LoginInfo, schema } from '../../model/Login/login-info';

const LoginInfoRepository = model<LoginInfo>('LoginInfo', schema, 'logininfos');

export { LoginInfoRepository };
