import * as dotenv from "dotenv";

dotenv.config({ path: '/media/venom/New Volume/Web Development/Next Level Web Development/Mongoose/assignment/l2-b2-assignment-2/.env' });
console.log(process.env.DATABASE_URL);

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
