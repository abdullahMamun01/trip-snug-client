'use server'
import { loginUser } from "@/services/auth.service"
import { TLoginType, TRegisterSchemaType } from "@/types/auth.type"
import { cookies } from 'next/headers'


const loginAction  = async (payload:TLoginType) => {
    const response = await loginUser(payload)
    const cookieStore = await cookies()
    cookieStore.set('accessToken' , response.token , {maxAge:  60 * 60 * 24 * 7})
    return response
}

const registerAction  = async (payload:TRegisterSchemaType) => {}

export {
    loginAction
}
