import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

//export default authMiddleware();

export default authMiddleware({
    beforeAuth: (req) => {
        console.log("middleware running");
      },

    publicRoutes: ["/"],
  });

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};