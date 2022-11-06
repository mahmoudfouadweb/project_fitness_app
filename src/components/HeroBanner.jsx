<<<<<<< HEAD
import { Box, Button, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';
import React from 'react';
=======
import { Box, Button, Stack, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.webp";
import React from "react";
>>>>>>> 60b22894082861f3015e0e36346c1d18f4e0b1a4

const HeroBanner = () => {
  return (
    <Box
<<<<<<< HEAD
      sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
      position="relative"
      p="20px"
    >
      <Typography color={'ff2625'} fontWeight={600} fontSize={'26px'}>
=======
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color={"ff2625"} fontWeight={600} fontSize={"26px"}>
>>>>>>> 60b22894082861f3015e0e36346c1d18f4e0b1a4
        Fitness Club
      </Typography>
      <Typography
        mb="23px"
        mt="30px"
        fontWeight={700}
<<<<<<< HEAD
        fontSize={{ lg: '44px', xs: '40px' }}
      >
        Seat, Smile <br /> and Repeat.
      </Typography>
      <Typography mb={3} fontSize={'22px'} lineHeight="1.7">
=======
        fontSize={{ lg: "44px", xs: "40px" }}
      >
        Seat, Smile <br /> and Repeat.
      </Typography>
      <Typography mb={3} fontSize={"22px"} lineHeight="1.7">
>>>>>>> 60b22894082861f3015e0e36346c1d18f4e0b1a4
        Check out the most effective exercises.
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{
<<<<<<< HEAD
          backgroundColor: '#ff2625',
          padding: '10px',
=======
          backgroundColor: "#ff2625",
          padding: "10px",
>>>>>>> 60b22894082861f3015e0e36346c1d18f4e0b1a4
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
<<<<<<< HEAD
        marginBottom={'4px'}
        fontSize="200px"
        color="#ff2625"
        sx={{
          opacity: '0.1',
          display: {
            lg: 'block',
            xs: 'none',
=======
        marginBottom={"4px"}
        fontSize="200px"
        color="#ff2625"
        sx={{
          opacity: "0.1",
          display: {
            lg: "block",
            xs: "none",
>>>>>>> 60b22894082861f3015e0e36346c1d18f4e0b1a4
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
