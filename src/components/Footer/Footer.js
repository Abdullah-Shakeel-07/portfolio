import React from "react";
import styled from "styled-components";
import { FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const FooterSection = styled.div`
  background-image: url(https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/footer_wave.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
<FooterSection className="flex justify-center items-center min-h-screen bg-gray-100">
  {/* <div className="flex flex-col items-center gap-6 py-4 text-sm text-gray-500 bg-white p-8 rounded-lg shadow-xl">
    <a
      href="https://github.com/Abdullah-Shakeel-07"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-lg hover:text-black transition transform hover:scale-105"
    >
      <FaGithub size={24} /> GitHub
    </a>
    <a
      href="https://wa.me/923175521271"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-lg hover:text-green-600 transition transform hover:scale-105"
    >
      <FaWhatsapp size={24} /> WhatsApp
    </a>
    <a
      href="mailto:imabdullah.shakeel@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-lg hover:text-blue-600 transition transform hover:scale-105"
    >
      <FaEnvelope size={24} /> Email
    </a>
  </div> */}
</FooterSection>

  );
}

export default Footer;
