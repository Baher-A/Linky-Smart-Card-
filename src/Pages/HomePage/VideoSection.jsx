import { Card } from "@mui/material";
import React from "react";

const VideoSection = () => {
  return (
    <Card
      variant="elevation"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <iframe
        width="853"
        height="380"
        src={`https://www.youtube.com/embed/mzDZSXiVogw`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Linky for smart Card"
      />
    </Card>
  );
};

export default VideoSection;
