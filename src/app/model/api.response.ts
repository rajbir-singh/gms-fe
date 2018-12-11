export class ApiResponse {

    data: any;
    success: boolean;
    message;

    getContent() {
        if(this.data.content !== undefined) {
            return this.data.content;
        }
        return this.data;
    }

    getApiSucess() {
        return this.success;
    }

    getMessage() {
        return this.message;
    }

    constructor(private apiResponse: ApiResponse) {
        this.data = apiResponse.data;
        this.success = apiResponse.success;
        this.message = apiResponse.message;
    }
}