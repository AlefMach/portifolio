import { Box } from "@mui/material";

const stars = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 3 + 1}px`,
  delay: `${Math.random() * 4}s`,
  duration: `${2 + Math.random() * 4}s`,
}));

export default function StarsBackground() {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {stars.map((star) => (
        <Box
          key={star.id}
          sx={{
            position: "absolute",
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            borderRadius: "50%",
            backgroundColor: "white",
            opacity: 0.3,
            animation: `twinkle ${star.duration} ease-in-out infinite`,
            animationDelay: star.delay,
            "@keyframes twinkle": {
              "0%, 100%": {
                opacity: 0.2,
                transform: "scale(1)",
              },
              "50%": {
                opacity: 1,
                transform: "scale(1.8)",
              },
            },
          }}
        />
      ))}
    </Box>
  );
}
