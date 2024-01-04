import { axios_instance } from "../api";
import { api_url } from "../api-url";

export type AuthLoginResponse = { token_type: string; token: string };

export default async function authLoginRequest<T extends AuthLoginResponse>(
  email: string,
  password: string
): Promise<T> {
  const request = await axios_instance.post<T>(api_url["auth.login"], {
    email,
    password,
  });

  return request.data;
}
