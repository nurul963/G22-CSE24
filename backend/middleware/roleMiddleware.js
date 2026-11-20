export const roleMiddleware=(...allowedRoles)=>{
    return (req,resp,next)=>{
        if(!req.user || !allowedRoles.includes(req.user.role)){
            return resp.status(400).json({
                message:"Access Denied",
                success:true
            })
        }
        next();
    }
}