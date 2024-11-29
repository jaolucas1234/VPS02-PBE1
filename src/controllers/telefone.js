const { put } = require('../routes');

const con = require('../bd/banco');

const create = (req, res) => {
    let numero = req.body.numero;
    let idcliente = req.body.idcliente;
    let idforn = req.body.idforn;


    let query = 'INSERT INTO telefone (numero, idcliente, idforn) VALUES'
    query += `('${numero}','${idcliente}','${idforn}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}

const read = (req, res) => {
    con.query('SELECT * FROM telefone ', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}
const update = (req, res) => {
    const { idtelefone, numero, idcliente, idforn } = req.body;
    con.query(`UPDATE telefone SET numero = ?, idcliente = ?, idforn = ? WHERE idtelefone = ?`,
        [numero, idcliente, idforn, idtelefone],
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
    con.query(`DELETE FROM telefone WHERE idtelefone = ${id}`, (err, result) => {
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