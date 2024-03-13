import mongoose from "mongoose";
const DB = process.env.MONGOURL;

mongoose
  .connect(`${DB}ItshalaProject`, {})
  .then(() => {
    console.log(`Connecting Successful`);
  })
  .catch((err) => console.log(`Connectino Failed ${err}`));
