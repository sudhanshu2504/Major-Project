import { connect } from 'mongoose';

const connectDB = ()=>{
    connect(process.env.NEXT_PUBLIC_MONGO_URI)
}
export default connectDB;