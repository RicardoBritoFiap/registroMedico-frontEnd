import { NextRequest, NextResponse } from "next/server"
 
export default function middleware(request: NextRequest) {
    const token = request.cookies.get('consulTech.token')?.value
    const signInUrl = new URL('/', request.url)

    if(!token){
        if (request.nextUrl.pathname === "/"){
            return NextResponse.next()
        }
        return NextResponse.redirect(signInUrl)
    }
}

export const config = {
   matcher: ["/paciente", "/medico", "/medico/consultas", "/paciente/exames", "/paciente/consultas"]
}