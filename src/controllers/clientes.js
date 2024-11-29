const { put } = require('../routes');

const con = require('../bd/banco');

const create = (req, res) => {
    let nome = req.body.nome;
    let pagamento = req.body.pagamento;


    let query = 'INSERT INTO clientes (nome, pagamento) VALUES'
    query += `('${nome}', '${pagamento}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}

const read = (req, res) => {
    con.query('SELECT * FROM clientes ', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}
const update = (req, res) => {
    const { idcliente, nome, pagamento } = req.body;
    con.query(`UPDATE clientes SET nome = ?, pagamento = ? WHERE idcliente = ?`,
        [nome, pagamento, idcliente],
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
    con.query(`DELETE FROM clientes WHERE idcliente = ${id}`, (err, result) => {
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