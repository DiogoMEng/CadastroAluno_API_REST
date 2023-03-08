import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log(`porta>>${port}`);
  console.log(`ctrl + click "http://localhost:${port}"`);
});
