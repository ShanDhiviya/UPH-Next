import React from "react";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <Image
        src="/assets/images/custom-404.png" // Replace with your custom image path
        alt="404 Not Found"
        width={600} // Adjust width as needed
        height={400} // Adjust height as needed
      />
      <h1 style={{ color: "#333", marginTop: "20px" }}>404 - Page Not Found</h1>
      <p style={{ color: "#666" }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/" style={{ color: "#007BFF", textDecoration: "none" }}>
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
