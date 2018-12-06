import { ApiResponse } from "../model/api.response";

export class Utils{

    getContent(data: ApiResponse) {
        if(data.data.content !== undefined) {
            return data.data.content;
        }
        return data.data;
    }

    getApiSucess(data: ApiResponse) {
        return data.success;
    }

    getNumberFromString(str: string) : number {
        return +str;
    }

    isStringEmpty(str: string): boolean {
        return !str;
    }

    isStringNonEmpty(str: string): boolean {
        return !!str;
    }

    areTwoStringsSame(str1: string, str2: string): boolean {
        return str1 && str2 && str1 === str2;
    }
}