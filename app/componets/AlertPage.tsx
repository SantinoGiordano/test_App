'use client'
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const onLoadFunction = () => {
      alert("Page has loaded!");
    };

    onLoadFunction(); 
  }, []);

  return 
}