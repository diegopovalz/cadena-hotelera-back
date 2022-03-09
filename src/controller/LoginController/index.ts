import { Request, Response } from 'express';
import LoginService from 'service/LoginService';

async function verifyLoginInfo(req: Request, res: Response) {
  const { username, password } = req.body;
  const { loginInfo, error } = await LoginService.verifyLoginInfo(
    username,
    password
  );
  if (error) {
    return res.status(404).json({ error });
  }
  return res.json({ loginInfo });
}

export default {
  verifyLoginInfo,
};
