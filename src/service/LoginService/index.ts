import { LoginInfoRepository } from 'repository/login-repository';

async function verifyLoginInfo(username: string, password: string) {
  const loginInfo = await LoginInfoRepository.findOne({
    username: username,
    password: password,
  }).exec();

  if (loginInfo) {
    return { loginInfo };
  }
  return { error: 'Info not right' };
}

export default {
  verifyLoginInfo,
};
