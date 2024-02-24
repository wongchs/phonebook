import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  trustHost: true,

  pages: {
    signIn: "/login",
  },

  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      const isOnNew = nextUrl.pathname.startsWith("/new");
      const isOnEntry = nextUrl.pathname.startsWith("/entry");

      if (isOnDashboard || isOnNew || isOnEntry) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        const isOnAuth =
          nextUrl.pathname === "/login" || nextUrl.pathname === "/signup";
        if (isOnAuth) return Response.redirect(new URL("/dashboard", nextUrl));
        return true;
      }
      return true;
    },
  },

  providers: [],
} satisfies NextAuthConfig;
