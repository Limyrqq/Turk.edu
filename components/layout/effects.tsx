"use client";
import { useEffect } from "react";
import type Lenis from "lenis";
export function Effects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.animate(
              [
                { opacity: 0, transform: "translateY(14px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              { duration: 550, easing: "cubic-bezier(.22,.61,.36,1)" },
            );
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((el) => observer.observe(el));
    const fine = window.matchMedia("(pointer:fine)").matches;
    let lenis: Lenis | null = null;
    let disposed = false;
    let frame = 0;
    function tick(time: number) {
      lenis?.raf(time);
      frame = requestAnimationFrame(tick);
    }
    if (fine) {
      import("lenis").then(({ default: SmoothScroll }) => {
        if (disposed) return;
        lenis = new SmoothScroll({
          duration: 0.85,
          anchors: true,
          smoothWheel: true,
        });
        frame = requestAnimationFrame(tick);
      });
    }
    const cursor = document.createElement("div");
    cursor.className = "cursor";
    if (fine) document.body.appendChild(cursor);
    const move = (e: PointerEvent) => {
      cursor.style.transform = `translate3d(${e.clientX - 16}px,${e.clientY - 16}px,0)`;
      const target = e.target as Element;
      cursor.classList.toggle("cursor-active", !!target.closest("a,button"));
    };
    if (fine) window.addEventListener("pointermove", move);
    return () => {
      disposed = true;
      observer.disconnect();
      cancelAnimationFrame(frame);
      lenis?.destroy();
      cursor.remove();
      window.removeEventListener("pointermove", move);
    };
  }, []);
  return null;
}
