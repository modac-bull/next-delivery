// db 연결하는 로직
import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://dbModac:VQqye405Ri1eQSSY@cluster0.xx8olyh.mongodb.net/?retryWrites=true&w=majority"
  );

  return client;
}
