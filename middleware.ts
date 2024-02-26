import {withAuth} from "next-auth/middleware"

export default withAuth;

export const config={
    matcher:[
        
        // `${process.env.LOCOL_HOST}/auth/student-regiser`
    ]
}