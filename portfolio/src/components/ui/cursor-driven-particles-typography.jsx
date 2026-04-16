import React, { useEffect, useRef } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

class Particle {
  constructor(x, y, size, color, dispersion, returnSpd) {
    this.x = x + (Math.random() - 0.5) * 10;
    this.y = y + (Math.random() - 0.5) * 10;
    this.originX = x;
    this.originY = y;
    this.vx = (Math.random() - 0.5) * 5;
    this.vy = (Math.random() - 0.5) * 5;
    this.size = size;
    this.color = color;
    this.dispersion = dispersion;
    this.returnSpd = returnSpd;
  }

  update(mouseX, mouseY) {
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const interactionRadius = 120;

    if (
      distance > 0 &&
      distance < interactionRadius &&
      mouseX !== -1000 &&
      mouseY !== -1000
    ) {
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const force = (interactionRadius - distance) / interactionRadius;

      const repulsionX = forceDirectionX * force * this.dispersion;
      const repulsionY = forceDirectionY * force * this.dispersion;

      this.vx -= repulsionX;
      this.vy -= repulsionY;
    }

    this.vx += (this.originX - this.x) * this.returnSpd;
    this.vy += (this.originY - this.y) * this.returnSpd;

    this.vx *= 0.85;
    this.vy *= 0.85;

    const distToOrigin = Math.sqrt(
      Math.pow(this.x - this.originX, 2) + Math.pow(this.y - this.originY, 2)
    );

    if (distToOrigin < 1 && Math.random() > 0.95) {
      this.vx += (Math.random() - 0.5) * 0.2;
      this.vy += (Math.random() - 0.5) * 0.2;
    }

    this.x += this.vx;
    this.y += this.vy;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export function CursorDrivenParticleTypography({
  className,
  text,
  fontSize = 120,
  fontFamily = "Inter, sans-serif",
  particleSize = 1.5,
  particleDensity = 6,
  dispersionStrength = 15,
  returnSpeed = 0.08,
  color,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return undefined;

    let animationFrameId;
    let particles = [];

    let mouseX = -1000;
    let mouseY = -1000;

    let containerWidth = 0;
    let containerHeight = 0;
    let resizeFrameId = null;
    let lastObservedWidth = 0;
    let lastObservedHeight = 0;

    const init = () => {
      const container = containerRef.current;
      if (!container) return;

      containerWidth = container.clientWidth;
      containerHeight = container.clientHeight;
      if (!containerWidth || !containerHeight) return;

      const dpr = window.devicePixelRatio || 1;
      const nextCanvasWidth = Math.floor(containerWidth * dpr);
      const nextCanvasHeight = Math.floor(containerHeight * dpr);

      if (canvas.width !== nextCanvasWidth) {
        canvas.width = nextCanvasWidth;
      }

      if (canvas.height !== nextCanvasHeight) {
        canvas.height = nextCanvasHeight;
      }

      const nextStyleWidth = `${containerWidth}px`;
      const nextStyleHeight = `${containerHeight}px`;

      if (canvas.style.width !== nextStyleWidth) {
        canvas.style.width = nextStyleWidth;
      }

      if (canvas.style.height !== nextStyleHeight) {
        canvas.style.height = nextStyleHeight;
      }

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      const computedStyle = window.getComputedStyle(container);
      const textColor = color || computedStyle.color || "#ffffff";

      ctx.clearRect(0, 0, containerWidth, containerHeight);

      const effectiveFontSize = Math.min(
        fontSize,
        containerWidth * 0.22,
        containerHeight * 0.62
      );
      ctx.fillStyle = textColor;
      ctx.font = `bold ${effectiveFontSize}px ${fontFamily}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.fillText(text, containerWidth / 2, containerHeight / 2);

      const textCoordinates = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );

      particles = [];

      const step = Math.max(1, Math.floor(particleDensity * dpr));

      for (let y = 0; y < textCoordinates.height; y += step) {
        for (let x = 0; x < textCoordinates.width; x += step) {
          const index = (y * textCoordinates.width + x) * 4;
          const alpha = textCoordinates.data[index + 3] || 0;

          if (alpha > 128) {
            particles.push(
              new Particle(
                x / dpr,
                y / dpr,
                particleSize,
                textColor,
                dispersionStrength,
                returnSpeed
              )
            );
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, containerWidth, containerHeight);

      particles.forEach((particle) => {
        particle.update(mouseX, mouseY);
        particle.draw(ctx);
      });

      animationFrameId = window.requestAnimationFrame(animate);
    };

    const updatePointerPosition = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = clientX - rect.left;
      mouseY = clientY - rect.top;
    };

    const handleMouseMove = (event) => {
      updatePointerPosition(event.clientX, event.clientY);
    };

    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      updatePointerPosition(touch.clientX, touch.clientY);
    };

    const handleTouchStart = (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      updatePointerPosition(touch.clientX, touch.clientY);
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const timeoutId = window.setTimeout(() => {
      init();
      animate();
    }, 100);

    const scheduleInit = (width, height) => {
      if (width === lastObservedWidth && height === lastObservedHeight) {
        return;
      }

      lastObservedWidth = width;
      lastObservedHeight = height;

      if (resizeFrameId) {
        window.cancelAnimationFrame(resizeFrameId);
      }

      resizeFrameId = window.requestAnimationFrame(() => {
        resizeFrameId = null;
        init();
      });
    };

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;

      const { width, height } = entry.contentRect;
      scheduleInit(Math.round(width), Math.round(height));
    });
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("touchstart", handleTouchStart, { passive: true });
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true });
    canvas.addEventListener("touchend", handleMouseLeave);
    canvas.addEventListener("touchcancel", handleMouseLeave);

    return () => {
      window.clearTimeout(timeoutId);
      if (resizeFrameId) {
        window.cancelAnimationFrame(resizeFrameId);
      }
      resizeObserver.disconnect();
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleMouseLeave);
      canvas.removeEventListener("touchcancel", handleMouseLeave);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [
    color,
    dispersionStrength,
    fontFamily,
    fontSize,
    particleDensity,
    particleSize,
    returnSpeed,
    text,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-full min-h-[320px] w-full touch-none items-center justify-center",
        className
      )}
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}

export default CursorDrivenParticleTypography;
