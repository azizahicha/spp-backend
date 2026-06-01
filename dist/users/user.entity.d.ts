export declare enum UserRole {
    ADMIN = "admin",
    SISWA = "siswa"
}
export declare class User {
    id: number;
    username: string;
    password: string;
    role: UserRole;
    siswaId: number;
}
