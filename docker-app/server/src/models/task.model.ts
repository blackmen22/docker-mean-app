import mongoose, {Schema,Document, mongo} from 'mongoose';

export interface ITask extends Document{
header:string;
description: string;
dueDate: Date;
satus: number;
}

const TaskSchema = new Schema(
    {
    header: {type : String, required:true},
    description: String,
    dueDate: Date,
    status:Number,
    }
);



export default mongoose.model<ITask>('Task', TaskSchema);
