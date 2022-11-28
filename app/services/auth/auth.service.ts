import {request} from "@/services/api/request.api";
import {EnumSyncStorage, IAuthResponse} from "@/shared/types/auth.interface";
import {getAuthUrl} from "@/config/api.config";
import {deleteTokensStorage, saveToStorage} from "@/services/auth/auth.helpers";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthService={
   async main(variant:'register'|'login',email:string,password:string){
        const response =await request<IAuthResponse>({
            url:getAuthUrl(`/${variant}`),
            method:"post",
            data:{email,password}
        })
       if (response.accessToken){
           await saveToStorage(response)
       }
       return response
    },
    async logout(){
       await deleteTokensStorage()
        await AsyncStorage.removeItem(EnumSyncStorage.USER)
    }
}