<<<<<<< HEAD
import { Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
      direction={'row'}
      justifyContent="space-around"
      sx={{
        gap: {
          sm: '122px',
          xs: '40px',
        },
        mt: {
          sm: '32px',
          xs: '20px',
        },
        justifyContent: 'none',
        px: '20px',
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: '48px', height: '48px', margin: '0 20px' }}
=======
import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/Logo.png";

const Navbar = ({ scrollToRef, isHidden, setIsHidden }) => {
  return (
    <Stack
      direction={"row"}
      justifyContent="space-around"
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },
        mt: {
          sm: "32px",
          xs: "20px",
        },
        justifyContent: "none",
        px: "20px",
      }}
    >
      <Link to="/" onClick={() => setIsHidden(true)}>
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
>>>>>>> 60b22894082861f3015e0e36346c1d18f4e0b1a4
        />
      </Link>

      <Stack
        direction="row"
<<<<<<< HEAD
        gap={'40px'}
        fontSize="24px"
        alignItems={'flex-end'}
      >
        <Link
          to={'/'}
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom: '3px solid #ff2625',
          }}
        >
          {' '}
          Home{' '}
        </Link>
        <a
          href="#exercise"
          style={{ textDecoration: 'none', color: '#3A1212' }}
        >
          Exercise
        </a>
=======
        gap={"40px"}
        fontSize="24px"
        alignItems={"flex-end"}
      >
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #ff2625",
          }}
        >
          {" "}
          Home{" "}
        </Link>
        {isHidden ? (
          <a
            onClick={() =>
              scrollToRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "center",
              })
            }
            href="#exercises"
            style={{
              textDecoration: "none",
              color: "#3A1212",
              scrollBehavior: "smooth",
            }}
          >
            Exercise
          </a>
        ) : null}
>>>>>>> 60b22894082861f3015e0e36346c1d18f4e0b1a4
      </Stack>
    </Stack>
  );
};

export default Navbar;
