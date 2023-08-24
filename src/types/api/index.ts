export type User = {
  username: string;
  passwordHash: string;
  uid: string;
};

export type Database = {
  users: User[];
};
