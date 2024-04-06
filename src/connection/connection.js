import mongoose from "mongoose";
// const DB = process.env.MONGOURL;

const DB ="mongodb+srv://pankajnaik958:itshala01@cluster1.wl2qu8d.mongodb.net/ItshalaProject";

mongoose
    .connect(DB)
  .then(() => {
    console.log(`Connecting Successful`);
  })
  .catch((err) => console.log(`Connectino Failed ${err}`));
