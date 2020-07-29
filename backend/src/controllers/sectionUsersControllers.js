const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { email, password } = request.body;

        const usuarios = await connection('usuarios')
            .where('email', email)
            .where('password', password)
            .select('*')
            .first();
        if (!usuarios) {
            return response.status(400).json({ error: "Nenhum usuário encontrado" });
        }
        return response.json(usuarios);
    }
}