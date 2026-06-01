import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    register(body: {
        username: string;
        password: string;
        role: string;
        siswaId?: number;
    }): Promise<import("../users/user.entity").User>;
}
