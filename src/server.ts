import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entities/User";

const main = async () => {
    const conn = await createConnection();
    await conn.runMigrations();

    const user = new User();
    user.userName = "satoshi"
    await conn.manager.save(user)
    console.log("saved a user with Id:" + user.id)
}

main().catch(err => {
    console.log(err)
});