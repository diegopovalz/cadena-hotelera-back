import { LoginInfoRepository } from 'repository/Login/login-repository';
import ClientService from 'service/ClientService';

async function verifyLoginInfo(username: string, password: string) {
  const loginInfo = await LoginInfoRepository.findOne({
    username: username,
    password: password,
  }).exec();

  if (loginInfo) {
    const clientInfo = await ClientService.getClientByUsername(username);
    return { loginInfo, clientInfo };
  }
  return { error: 'Info not right' };
}

export default {
  verifyLoginInfo,
};
