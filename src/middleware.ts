import { NextRequest, NextResponse } from 'next/server';

// Các ngôn ngữ được hỗ trợ
const supportedLocales = ['en', 'vi'];
const defaultLocale = 'en';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Kiểm tra xem đường dẫn đã có định dạng ngôn ngữ hay chưa (/en, /vi, ...)
  const pathnameIsMissingLocale = supportedLocales.every(
    (locale) => !pathname.startsWith(`/${locale}`)
  );

  // Nếu thiếu định dạng ngôn ngữ, chuyển hướng đến ngôn ngữ mặc định
  if (pathnameIsMissingLocale) {
    const locale = defaultLocale;
    const newUrl = new URL(`/${locale}${pathname}`, req.url);
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

// Cấu hình matcher để middleware chỉ áp dụng cho các đường dẫn nhất định
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
