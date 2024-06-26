const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bem vindos ao WebAcademy!!');
});

app.listen(3000, () => {
  console.log('Rodando na porta 3000');
});
// mudei o secrets no github para o token gerado pelo docker hub