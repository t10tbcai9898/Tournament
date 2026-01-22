import { proxy } from 'next/server'

export default proxy({
  matcher: ['/dashboard/:path*'],
  handler(request) {
    const token = request.cookies.get('token')

    if (!token) {
      return Response.redirect(new URL('/login', request.url))
    }
  }
})
