module.exports = {
    async getAllBabyDetails(req, res) {
        const db = req.app.get('db');
        let babydetails = await db.getbabydetails();
        res.send(babydetails);
    }
}