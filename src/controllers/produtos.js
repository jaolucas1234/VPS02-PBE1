const { put } = require('../routes');

const con = require('../bd/banco');

const create = (req, res) => {
    let descricao = req.body.descricao;
    let preco = req.body.preco;
    let nome = req.body.nome;
    let validade = req.body.validade;
    let idforn = req.body.idforn;


    let query = 'INSERT INTO produtos (descricao, preco, nome, validade, idforn) VALUES'
    query += `('${descricao}','${preco}','${nome}','${validade}','${idforn}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}

const read = (req, res) => {
    con.query('SELECT * FROM produtos ', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}
const update = (req, res) => {
    const { idprod, nome, descricao, preco, validade, idforn } = req.body;
    con.query(`UPDATE SET nome = ?, descricao = ?, preco = ?, validade = ?, idforn = ? WHERE idprod = ?`,
        [nome, descricao, preco, validade, idforn, idprod],
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
    con.query (`DELETE FROM produtos WHERE idprod = ${id}`, (err, result) => {
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