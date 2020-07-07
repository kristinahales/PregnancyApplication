const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    async login(req, res) {
        const db = req.app.get('db');
        let {username, password} = req.body;
        let [existingUser] = await db.get_user_by_username(username);
        if(!existingUser) return res.status(401).send('Username not found');
        let result = await bcrypt.compare(password, existingUser.password);
        if(result) {
            req.session.user = {
                username: existingUser.username,
                userid: existingUser.userid,
                loggedIn: true
            };
            res.send(req.session.user);
        } else res.status(401).send('Username or password incorrect');
    },
    async register(req, res) {
        const db = req.app.get('db');
        let {firstname, lastname, username, password, dateOfLastPeriod, dueDate, numOfWeeks, trimester} = req.body;
        let [existingUser] = await db.get_user_by_username(username);
        if(existingUser) return res.status(400).send('Username already exists');
        let salt = await bcrypt.genSalt(saltRounds);
        let hash = await bcrypt.hash(password, salt);
        let [user] = await db.create_user([firstname, lastname, username, hash, dateOfLastPeriod, dueDate, numOfWeeks, trimester]);
        req.session.user = {firstname: user.firstname, lastname: user.lastname, username: user.username, userid: user.userid, loggedIn: true};
        res.send(req.session.user);
    },
    logout(req, res) {
        req.session.destroy();
        res.sendStatus(200);
    },
    getUser(req, res) {
        res.send(req.session.user);
    }
}