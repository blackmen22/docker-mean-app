import mongoose from 'mongoose';

const URI = 'mongodb://lostalhost/express-server:dev';

mongoose.connect(URI, {useNewUrlParser:true, useFindAndModify:false})
.then((_db)=> console.log('CONNECTED'))
.catch((err) => console.log(err));

export default mongoose;

