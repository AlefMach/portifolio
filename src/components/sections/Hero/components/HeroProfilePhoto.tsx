import { Box } from "@mui/material";

const PROFILE_IMAGE_SRC = "/portfolio/images/unnamed.png";

export function HeroProfilePhoto() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: {
          xs: 150,
          sm: 320,
          md: 420,
          lg: 520,
        },
        aspectRatio: "1 / 1",
        mx: {
          xs: "auto",
          sm: 0,
        },
        justifySelf: {
          xs: "center",
          sm: "end",
        },
        borderRadius: {
          xs: "50%",
          sm: 4,
        },
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        boxShadow: {
          xs: "0 14px 44px rgba(108,137,204,.16)",
          md: "0 26px 90px rgba(108,137,204,.2)",
        },
        backgroundColor: "background.paper",
        isolation: "isolate",
        opacity: 0,
        position: "relative",
        transform: "translateY(12px) scale(.98)",
        animation:
          "profilePhotoIn .7s ease forwards, profilePhotoFloat 6s ease-in-out 1s infinite",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background:
            "linear-gradient(135deg, rgba(255,255,255,.12), rgba(0,0,0,.2) 62%, rgba(108,137,204,.18))",
          pointerEvents: "none",
        },

        "&::after": {
          content: '""',
          position: "absolute",
          inset: { xs: 6, sm: 10 },
          zIndex: 3,
          border: "1px solid",
          borderColor: "rgba(255,255,255,.18)",
          borderRadius: {
            xs: "50%",
            sm: 3,
          },
          pointerEvents: "none",
        },

        "&:hover img": {
          filter: "grayscale(.7) contrast(1.08)",
          transform: "scale(1.045)",
        },

        "@keyframes profilePhotoIn": {
          from: {
            opacity: 0,
            transform: "translateY(12px) scale(.98)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0) scale(1)",
          },
        },

        "@keyframes profilePhotoFloat": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-6px)",
          },
        },

        "@media (prefers-reduced-motion: reduce)": {
          opacity: 1,
          transform: "none",
          animation: "none",

          "&:hover img": {
            transform: "none",
          },
        },
      }}
    >
      <Box
        component="img"
        src={PROFILE_IMAGE_SRC}
        alt=""
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: {
            xs: "center top",
            sm: "center",
          },
          filter: "grayscale(.95) contrast(1.05)",
          transition: "transform .8s ease, filter .35s ease",
        }}
      />
    </Box>
  );
}
