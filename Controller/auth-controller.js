const login = async (req, res) => {
    try {
        res.send('login from controller');
    } catch(error) {
        res.send(error);
    }
}

const signUp = async (req, res) => {
try {
    res.send(req.body);
    
} catch (error) {

    res.send(error);
    
}

}

module.exports = {login, signUp};

