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
        />
      </Link>

      <Stack
        direction="row"
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
      </Stack>
    </Stack>
  );
};

export default Navbar;
