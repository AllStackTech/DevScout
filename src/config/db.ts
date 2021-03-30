import { ormConfig } from "./ormconfig.module";
import { createConnection } from "typeorm";

// TODO: For trying in local local setup
// import { User } from "src/entities/User";

export const connectDB = async () => {
  let retries = 5;
  while (retries) {
    try {
      const conn = await createConnection(ormConfig);
      await conn.runMigrations();
      console.log(` PostgreSQL Connected `.inverse.green);

      // TODO: For trying in local local setup
      // const user = new User();
      // user.userName = "satoshi";
      // await conn.manager.save(user);
      // console.log("saved a user with Id:" + user.id);
      break;
    } catch (error) {
      console.error(` ! Error: `.inverse.red.bold + `${error.message}`);
      retries -= 1;
      await new Promise((res) => setTimeout(res, 5000));
      process.exit(1);
    }
  }
};
