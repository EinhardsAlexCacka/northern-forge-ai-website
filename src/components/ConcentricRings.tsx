// Reusable concentric ring decoration component
// Based on the abstract shapes from the logo

interface ConcentricRingsProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  opacity?: number;
  variant?: 'teal' | 'gold' | 'mixed';
}

const ConcentricRings = ({
  className = '',
  size = 'medium',
  position = 'top-right',
  opacity = 0.15,
  variant = 'mixed'
}: ConcentricRingsProps) => {
  // Size configurations
  const sizes = {
    small: { width: 150, height: 150, rings: 3 },
    medium: { width: 250, height: 250, rings: 4 },
    large: { width: 400, height: 400, rings: 5 }
  };

  const config = sizes[size];

  // Position classes
  const positionClasses = {
    'top-left': 'top-0 left-0 -translate-x-1/4 -translate-y-1/4',
    'top-right': 'top-0 right-0 translate-x-1/4 -translate-y-1/4',
    'bottom-left': 'bottom-0 left-0 -translate-x-1/4 translate-y-1/4',
    'bottom-right': 'bottom-0 right-0 translate-x-1/4 translate-y-1/4',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
  };

  // Color configurations
  const colors = {
    teal: ['#17A2B8', '#3FBDD1', '#0D7A8A'],
    gold: ['#D4AF37', '#E8C547', '#B8941F'],
    mixed: ['#17A2B8', '#D4AF37', '#3FBDD1', '#E8C547', '#0D7A8A']
  };

  const ringColors = colors[variant];

  // Generate rings with varying sizes and rotations
  const rings = Array.from({ length: config.rings }, (_, i) => {
    const scale = 1 - (i * 0.15);
    const rx = (config.width / 2) * scale * 0.9;
    const ry = (config.height / 2) * scale * 0.8;
    const rotation = i * 15; // Rotate each ring slightly
    const colorIndex = i % ringColors.length;
    const strokeWidth = i === 0 ? 2 : 1;
    const ringOpacity = 1 - (i * 0.15);

    return {
      rx,
      ry,
      rotation,
      color: ringColors[colorIndex],
      strokeWidth,
      opacity: ringOpacity
    };
  });

  return (
    <div
      className={`absolute pointer-events-none ${positionClasses[position]} ${className}`}
      style={{ opacity }}
    >
      <svg
        width={config.width}
        height={config.height}
        viewBox={`0 0 ${config.width} ${config.height}`}
        className="animate-pulse"
        style={{ animationDuration: '8s' }}
      >
        {rings.map((ring, index) => (
          <ellipse
            key={index}
            cx={config.width / 2}
            cy={config.height / 2}
            rx={ring.rx}
            ry={ring.ry}
            stroke={ring.color}
            strokeWidth={ring.strokeWidth}
            fill="none"
            opacity={ring.opacity}
            transform={`rotate(${ring.rotation} ${config.width / 2} ${config.height / 2})`}
          />
        ))}
      </svg>
    </div>
  );
};

export default ConcentricRings;
