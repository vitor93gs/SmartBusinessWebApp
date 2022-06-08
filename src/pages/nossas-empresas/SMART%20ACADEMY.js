import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

export default function ProjetoCRD() {
  useEffect(() => {
    const router = useRouter();
    router.push("/smart-academy");
  }, []);
}
