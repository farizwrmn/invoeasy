import { Auth, RegisterAuth } from '@/interfaces/auth.interface';
import { registerQuery, verifyQuery } from '@/queries/auth.query';
import { getUserByEmailQuery } from '@/queries/user.query';
import { User } from '@prisma/client';
import { genSalt, hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { API_KEY } from '../config/index';

const registerAction = async (data: RegisterAuth): Promise<User> => {
  try {
    const check = await getUserByEmailQuery(data.email || '');
    if (check) throw new Error('User already exist');

    const user = await registerQuery(data);

    return user;
  } catch (err) {
    throw err;
  }
};

const loginAction = async (data: Auth) => {
  try {
    const user = await getUserByEmailQuery(data.email);
    if (!user) throw new Error('email doesnt exist');

    const isValid = await compare(data.password, user.password || '');
    if (!isValid) throw new Error('password is wrong');

    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      gender: user.gender,
      birthDate: user.birthDate,
    };

    const token = sign(payload, String(API_KEY), { expiresIn: '10h' });

    return { user, token };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const verifyAction = async (data: Auth): Promise<void> => {
  try {
    const findUser = await getUserByEmailQuery(data.email);
    if (!findUser) throw new Error('User does not exist');
    const salt = await genSalt(10);

    const hashPass = await hash(data.password || '', salt);

    await verifyQuery({
      email: data.email,
      password: hashPass,
    });
  } catch (error) {
    console.log(error);
  }
};

export { registerAction, loginAction, verifyAction };
