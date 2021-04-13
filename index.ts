import { Eq, contramap, eqNumber } from "fp-ts/lib/Eq";

type User = {
  userId: number;
  name: string;
};

/** two users are equal if their `userId` field is equal */
const eqUser = contramap((user: User) => user.userId)(eqNumber);

const user1 = { userId: 1, name: "Giulio" };
const user1FullName = { userId: 1, name: "Giulio Canti" };

console.dir({ user1 }, { depth: null });
console.dir({ user1FullName }, { depth: null });
console.log("user1 === user1FullName: ", eqUser.equals(user1, user1FullName)); // true
