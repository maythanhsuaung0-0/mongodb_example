import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import  router  from './routes/userRoute.js' 
import connectDB from './db/connection.js'
const app = express()


dotenv.config();
connectDB();


app.use(cors());
app.use(express.json()); // Parse JSON body

app.use('/api/users', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

