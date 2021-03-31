import { ConnectionOptions } from "typeorm";

export const ormConfig: ConnectionOptions = {
  type: "postgres",
  host: <string | undefined>process.env.HOST,
  port: <number | undefined>process.env.PG_PORT,
  username: <string | undefined>process.env.USERNAME,
  password: <string | undefined>process.env.PASSWORD,
  database: "devscout",
  synchronize: true,
  entities: ["dist/entities/**/*.js"],
  migrations: ["dist/migrations/**/*.js"],
  subscribers: ["src/subscriber/**/*.js"],
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/migrations",
    subscribersDir: "src/subscriber",
  },
};
