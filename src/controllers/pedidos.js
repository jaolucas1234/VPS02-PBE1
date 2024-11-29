const { put } = require('../routes');

const con = require('../bd/banco');

const create = (req, res) => {
    let idcliente = req.body.idcliente;
    let idprod = req.body.idprod;
    let idtelefone = req.body.idtelefone;
    let datalancamento = req.body.datalancamento;
    let total = req.body.total;


    let query = 'INSERT INTO pedidos (idcliente, idprod, idtelefone, datalancamento, total) VALUES'
    query += `('${idcliente}','${idprod}','${idtelefone}','${datalancamento}','${total}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}

const read = (req, res) => {
    con.query('SELECT * FROM pedidos ', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}
const update = (req, res) => {
    const { idpedido, idcliente, idprod, idtelefone, datalancamento, total } = req.body;
    con.query(`UPDATE pedidos SET idcliente = ?, idprod = ?, idtelefone = ?, datalancamento = ?, total = ? WHERE idpedido = ?`,
        [idcliente, idprod, idtelefone, datalancamento, total, idpedido],
        (err, result) => {
            if (err) {
                res.status(500).json({ mensagem: 'Erro ao atualizar cliente', erro: err });
            } else {
                res.status(202).json(result);
            }
        });
};




const deletar = (req, res) => {
    let id = Number(req.params.id);
    con.query(`DELETE FROM pedidos WHERE idpedido = ${id}`, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    }
    )
}

module.exports = {
    create,
    read,
    update,
    deletar
}