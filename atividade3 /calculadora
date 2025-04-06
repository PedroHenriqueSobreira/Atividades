// index.js

const express = require('express');
const app = express();
const port = 3000;

// Importando o módulo calculadora
const calculadora = require('./util/calculadora');

// Definindo as rotas
app.get('/somar/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = calculadora.somar(a, b);
  res.send(`Resultado da soma: ${resultado}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = calculadora.subtrair(a, b);
  res.send(`Resultado da subtração: ${resultado}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = calculadora.multiplicar(a, b);
  res.send(`Resultado da multiplicação: ${resultado}`);
});

app.get('/dividir/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  
  try {
    const resultado = calculadora.dividir(a, b);
    res.send(`Resultado da divisão: ${resultado}`);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

