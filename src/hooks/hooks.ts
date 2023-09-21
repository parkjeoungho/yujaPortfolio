import { useRef } from "react";

export function useMoveSection() {
  const ref = useRef<HTMLDivElement>(null);
  const onMoveToSection = () => {
    if (!ref || !ref.current) {
      return;
    }

    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return { ref, onMoveToSection };
}
