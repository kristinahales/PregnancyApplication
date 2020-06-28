module.exports = {
    async getPregDetails(req, res) {
        let {userid} = req.session.user;
        const db = req.app.get('db');
        let babydetails = await db.get_user_preg_details([userid]);
        res.send(babydetails);
    }
}