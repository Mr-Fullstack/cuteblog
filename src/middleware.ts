import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { localstorage_autentication } from './auth';
import { Auth } from './contexts/UserContext';


// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/:path*',
// };

export function middleware(request: NextRequest) {
  // console.log(request)

  if (typeof window !== "undefined") {

    // const session = localStorage.getItem(localstorage_autentication); 

    // console.log(session)
    // if ( request.nextUrl.pathname.startsWith('/signin')) 
    // {
      
    //   return NextResponse.rewrite(new URL('/', request.url));
    // }
    // if ( request.nextUrl.pathname.startsWith('/signup')) 
    // {
      
    //   return NextResponse.rewrite(new URL('/', request.url));
    // }
  
  }
 
}

