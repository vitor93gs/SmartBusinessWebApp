import { useRouter } from "next/dist/client/router";
import { useEffect } from "react/cjs/react.production.min";

export default function ProjetoCRD() {
  useEffect(() => {
    const router = useRouter();
    router.push("/smart-academy");
  }, []);
}
