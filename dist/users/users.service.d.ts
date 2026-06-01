import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    findByUsername(username: string): Promise<User | undefined>;
    create(username: string, password: string, role: string, siswaId?: number): Promise<User>;
}
