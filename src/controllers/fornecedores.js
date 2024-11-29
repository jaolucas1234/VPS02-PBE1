const { put } = require('../routes');

const con = require('../bd/banco');

const create = (req, res) => {
    let nome = req.body.nome;
    let cnpj = req.body.cnpj;
    let email = req.body.email;


    let query = 'INSERT INTO fornecedores (nome, cnpj, email) VALUES'
    query += `('${nome}', '${cnpj}','${email}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}

const read = (req, res) => {
    con.query('SELECT * FROM fornecedores ', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}
const update = (req, res) => {
    const { idforn, nome, cnpj, email } = req.body;
    con.query(`UPDATE fornecedores SET nome = ?, cnpj = ?, email = ? WHERE idforn = ?`,
        [nome, cnpj, email, endereco, data_nascimento, idforn],
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
    con.query(`DELETE FROM fornecedores WHERE idforn = ${id}`, (err, result) => {
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