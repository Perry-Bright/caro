import React, { useEffect, useState, useRef } from 'react';

export const CursorGlow: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  // Smooth lerp follower for fluid circular cursor shadow motion
  const currentPos = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  const targetPos = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  const circleRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only activate cursor circle on devices with a fine pointer (mouse / precision trackpad)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange);
    } else {
      mediaQuery.addListener(handleMediaChange);
    }

    if (!mediaQuery.matches) return;

    let hasReceivedFirstMove = false;

    const onMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!hasReceivedFirstMove) {
        currentPos.current = { x: e.clientX, y: e.clientY };
        hasReceivedFirstMove = true;
      }
      if (!isVisible) setIsVisible(true);

      // Detect if user is hovering over interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('button, a, input, select, textarea, [role="button"], [tabindex="0"]')
        );
        setIsHoveringInteractive(isInteractive);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth animation loop: high responsive lerp (~0.28) provides an organic shadow following motion
    const animate = () => {
      if (hasReceivedFirstMove) {
        currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.28;
        currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.28;

        if (circleRef.current) {
          circleRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
        }
      }
      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaChange);
      } else {
        mediaQuery.removeListener(handleMediaChange);
      }
    };
  }, [isVisible]);

  if (!isFinePointer) return null;

  return (
    <div
      ref={circleRef}
      className={`pointer-events-none fixed top-0 left-0 z-50 transition-opacity duration-300 will-change-transform ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: 'translate3d(-100px, -100px, 0)',
      }}
      aria-hidden="true"
    >
      {/* Centered around cursor position */}
      <div className="-translate-x-1/2 -translate-y-1/2 relative flex items-center justify-center">
        {/* Soft Ambient Orange Shadow / Diffusion Halo */}
        <div
          className={`absolute rounded-full transition-all duration-300 pointer-events-none blur-lg ${
            isHoveringInteractive
              ? 'w-20 h-20 bg-orange-500/30 scale-125'
              : 'w-16 h-16 bg-orange-500/20'
          }`}
        />

        {/* Orange Circular Ring that moves with and follows the cursor like a shadow */}
        <div
          className={`relative rounded-full border-2 transition-all duration-200 flex items-center justify-center pointer-events-none ${
            isHoveringInteractive
              ? 'w-12 h-12 border-orange-400 bg-orange-500/15 shadow-[0_0_20px_rgba(249,115,22,0.85),inset_0_0_10px_rgba(249,115,22,0.3)] scale-110'
              : 'w-10 h-10 border-orange-500/90 bg-orange-500/10 shadow-[0_0_14px_rgba(249,115,22,0.6),inset_0_0_6px_rgba(249,115,22,0.2)]'
          }`}
        >
          {/* Subtle luminous core accent */}
          <div
            className={`rounded-full bg-orange-400 transition-all duration-200 ${
              isHoveringInteractive ? 'w-1.5 h-1.5 opacity-90 scale-125' : 'w-1 h-1 opacity-70'
            }`}
          />
        </div>
      </div>
    </div>
  );
};
