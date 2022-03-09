import mongoose from 'mongoose';

export async function connect() {
  await mongoose.connect(
    'mongodb+srv://root:root@cluster0.cynss.mongodb.net/hotel-chain?retryWrites=true&w=majority'
  );
}

export async function disconnect() {
  await mongoose.disconnect();
}
