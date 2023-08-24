import { v4 as uuidv4 } from 'uuid';

import { Database, User } from '~types/api';

class UserService {
  private static instance: UserService;

  private currentUser: User | null;

  private constructor() {
    this.currentUser = null;
  }

  // eslint-disable-next-line class-methods-use-this -- пусть так будет
  private parseDatabase() {
    let database: Database | null = null;

    try {
      database = JSON.parse(localStorage.getItem('db') || '') as Database;
    } catch (error) {
      console.error(error);
    }

    return database;
  }

  // eslint-disable-next-line class-methods-use-this -- пусть так будет
  private saveDatabase(database: Database) {
    localStorage.setItem('db', JSON.stringify(database));
  }

  public static get Instance() {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }

    return UserService.instance;
  }

  public get CurrentUser() {
    return this.currentUser;
  }

  public signIn(username: string, passwordHash: string) {
    const database = this.parseDatabase();

    if (!database || !database.users) {
      throw new Error('Database not found');
    }

    const user = database.users.find((value) => value.username === username && value.passwordHash === passwordHash);

    if (!user) {
      throw new Error('User not found');
    }

    this.currentUser = user;
    return user;
  }

  public signUp(username: string, passwordHash: string) {
    let database = this.parseDatabase();

    if (!database || !database.users) {
      database = {
        ...database,
        users: [],
      };
    }

    const user: User = {
      username,
      passwordHash,
      uid: uuidv4(),
    };

    database.users.push(user);

    this.saveDatabase(database);
  }
}

export default UserService;
