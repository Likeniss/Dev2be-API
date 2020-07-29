const connection = require('../database/connection.js');

module.exports = {
    async index(request, response) {
        const { id } = request.params;
        if(id){
            const usuario = await connection('usuarios')
                .select('*')
                .where('id', id)
                .first();
            return response.json({usuario});
            } else {
                const usuario = await connection('usuarios')
                .select('*');
                return response.json(usuario);
            }
    },

    async create(req, res) {

        const { name, email, password, city, tel, type } = req.body;

        const usuarios = await connection('usuarios')
            .where('email', email)
            .select('*')
            .first();
        if (!usuarios) {
            await connection('usuarios').insert({
                name,
                email,
                password,
                city,
                tel,
                type
            });
            return res.json({ name, email, password, city, tel, type });
        } else {
            return res.status(400).json({ error: "Email já cadastrado" })
        }
    },
    async update(request, response){
        const { id } = request.params;
        const { name, email, password, city, tel, type } = req.body;

        const usuarios = await connection('usuarios')
            .where('id', id)
            .first();

        const update = await connection('usuarios').update({
                name,
                email,
                password,
                city,
                tel,
                type
        }).where('id', id);
        return response.json({name,email,password,city,tel,type})
    },
    async delete(request, response) {
        const { id } = request.params;
        const usuarios = await connection('users')
        .where('id', id)
        .first();

        await connection('usuarios').where('id', id).delete();
        return response.status(204).send();
    }

}