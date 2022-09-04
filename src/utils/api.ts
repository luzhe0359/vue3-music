import http from '@/utils/http'
import type { UserInfo } from '@/models/user'

export async function useLogin(phone: string, password: string) {
  return await http.get<{
    data: UserInfo
  }>('login/cellphone', { phone, password })
}
