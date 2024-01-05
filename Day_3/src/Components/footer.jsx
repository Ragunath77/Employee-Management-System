import React from "react";
import { Box, Typography } from "@mui/material";
import {
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
  YouTube as YouTubeIcon,
} from "@mui/icons-material";

const socialIcons = [
  { icon: <InstagramIcon sx={{ color: "#e1306c" }} />, url: "https://www.instagram.com/" },
  { icon: <TwitterIcon sx={{ color: "#1DA1F2" }} />, url: "https://twitter.com/" },
  { icon: <GitHubIcon sx={{ color: "#4078c0" }} />, url: "https://github.com/" },
  { icon: <YouTubeIcon sx={{ color: "red" }} />, url: "https://www.youtube.com/" },
];

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        bgcolor: "black",
        color: "white",
        p: 2,
        width: 1487,
        height: 90,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: 2,
          "& svg": {
            fontSize: "40px",
            cursor: "pointer",
            mr: 1,
          },
        }}
      >
        {socialIcons.map((social, index) => (
          <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
            {social.icon}
          </a>
        ))}
      </Box>
      <Typography
        variant="h4"
        sx={{
          fontSize: "0.8rem",
          "@media (max-width:600px)": {
            fontSize: "0.6rem",
          },
        }}
      >
        All Rights Reserved &copy; Eren Yeager
      </Typography>
    </Box>
  );
};

export default Footer;
