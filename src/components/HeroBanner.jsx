import { Box, Button, Stack, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.webp";
import React from "react";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color={"ff2625"} fontWeight={600} fontSize={"26px"}>
        Fitness Club
      </Typography>
      <Typography
        mb="23px"
        mt="30px"
        fontWeight={700}
        fontSize={{ lg: "44px", xs: "40px" }}
      >
        Seat, Smile <br /> and Repeat.
      </Typography>
      <Typography mb={3} fontSize={"22px"} lineHeight="1.7">
        Check out the most effective exercises.
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{
          backgroundColor: "#ff2625",
          padding: "10px",
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        marginBottom={"4px"}
        fontSize="200px"
        color="#ff2625"
        sx={{
          opacity: "0.1",
          display: {
            lg: "block",
            xs: "none",
          },
        }}
      >
        Exercise
      </Typography>
      <img
        src={HeroBannerImage}
        alt="banner image"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
