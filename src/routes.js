const express = require('express');
const router = express.Router();

const clientes = require('./controllers/clientes');

router.post('/clientes', clientes.create);
router.get('/clientes', clientes.read);
router.put('/clientes/:id', clientes.update);
router.delete('/clientes/:id', clientes.deletar);

const telefone= require('./controllers/telefone');

router.post('/telefone', telefone.create);
router.get('/telefone', telefone.read);
router.put('/telefone/:id', telefone.update);
router.delete('/telefone/:id', telefone.deletar);


const fornecedores= require('./controllers/fornecedores');

router.post('/fornecedores', fornecedores.create);
router.get('/fornecedores', fornecedores.read);
router.put('/fornecedores/:id', fornecedores.update);
router.delete('/fornecedores/:id', fornecedores.deletar);

const pedido= require('./controllers/pedidos');

router.post('/pedido', pedido.create);
router.get('/pedido', pedido.read);
router.put('/pedido/:id', pedido.update);
router.delete('/pedido/:id', pedido.deletar);

const produtos= require('./controllers/produtos');

router.post('/produtos', produtos.create);
router.get('/produtos', produtos.read);
router.put('/produtos/:id', produtos.update);
router.delete('/produtos/:id', produtos.deletar);

module.exports = router;