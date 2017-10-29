export declare namespace myEmail {
    class email {
        user_id: string;
        constructor(user_id: string, server?: any, secure?: any);
        version: string;
        secure: boolean;
        server: string;
        send(service_id: any, template_id: any, template_params: any, user_id?: any): Promise<any>;
    }
}
