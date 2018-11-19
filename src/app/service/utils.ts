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
}