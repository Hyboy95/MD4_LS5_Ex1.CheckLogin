export const checkLogin = async (req, res, next) => {
    let {username, password} = req.body;
    if (username === 'admin' && password === "admin") {
        console.log('Done!');
        next();
    } else {
        res.status(401).json({
            message: 'Unauthorized'
        })
    }
}