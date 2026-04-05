/// <reference types="vite/client" />

declare module "react" {
  interface ImgHTMLAttributes<T> {
    fetchPriority?: "high" | "low" | "auto";
  }
}
