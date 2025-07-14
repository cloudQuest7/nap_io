"use server";

import { handleError } from "@/lib/utils";
import { error } from "console";

export const logInAction = async (email:string, password:string) => {
try{
    const {auth} = await createClient();
    const {error} = await auth.SignInWithPassword{
        email,
        password
    }
    if {error} throw error;
    return { errorMessage : null};

}catch (error) {
    return handleError{error};
}
};

export const signUpAction = async (email:string, password:string) => {
try{
    const {auth} = await createClient();
    const {data, error} = await auth.signUp({
        email,
        password
    });
    if {error} throw error;
    const userId = data.user?.id;
    if (!userId) {
        throw new Error("Error Signin up.");
    }   

    return { errorMessage : null};

}catch (error) {
    return handleError{error};
}
};