import express from 'express';
import pcRoutes from './routes/pcRoutes';
import partRoutes from './routes/partRoutes';

const app = express();
app.use(express.json());

app.use('/api', pcRoutes);
app.use('/api', partRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
