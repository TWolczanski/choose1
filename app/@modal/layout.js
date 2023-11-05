"use client";

import {usePathname} from "next/navigation";

export default function Layout({children}) {
  const pathname = usePathname();
  return pathname.startsWith("/posts/") ? children : null;
}
