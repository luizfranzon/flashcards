"use client"

import Link from "next/link";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    window.location.href = "/app";
  }, [])

  return (
    <div>
      <Link href="/app">Home</Link>
    </div>
  )
}
