import { Request, Response } from 'express';
import LoginService from 'service/LoginService';

async function verifyLoginInfo(req: Request, res: Response) {
  const { username, password } = req.body;
  const { clientInfo, loginInfo, error } = await LoginService.verifyLoginInfo(
    username,
    password
  );
  if (error) {
    return res.json({ error });
  }
  return res.json({ loginInfo, clientInfo });
}

export default {
  verifyLoginInfo,
};
