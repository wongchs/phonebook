import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  trustHost: true,

  pages: {
    signIn: "/login",
  },

  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      const isOnHome = nextUrl.pathname.startsWith("/");

      if (isOnHome) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        const isOnAuth =
          nextUrl.pathname === "/login" || nextUrl.pathname === "/signup";
        if (isOnAuth) return Response.redirect(new URL("/", nextUrl));
        return true;
      }
      return true;
    },
  },

  providers: [],
} satisfies NextAuthConfig;
