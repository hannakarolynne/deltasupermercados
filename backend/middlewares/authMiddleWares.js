import jwt from 'jsonwebtoken'

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization
    
    if(!authHeader) return res.status(401).json({ message: 'Token não fornecido' })

    const token = authHeader.split(' ')[1]
    
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verified
        next()
    } catch {
        return res.status(401).json({ message: 'Token inválido' })
    }
}

export default authenticateToken