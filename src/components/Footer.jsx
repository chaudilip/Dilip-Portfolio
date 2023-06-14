import React from "react";
import { AiOutlineArrowUp,AiFillInstagram,AiFillLinkedin,AiFillGithub } from "react-icons/ai";
import meone  from "../assets/logod.jpg";
function Footer() {
  return (
    <footer>
      <div>
        <img src={meone} alt="Founder" />
        <h2>Dilip Chau</h2>
        <p>" In a world of possibilities, dare to be extraordinary and leave your unique mark✨ "</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
            <a href="https://www.instagram.com/dilip_chau_/" target="blank"><AiFillInstagram/></a>
            <a href="https://in.linkedin.com/in/chau-dilip3" target="blank"><AiFillLinkedin/></a>
            <a href="https://github.com/chaudilip" target="blank"><AiFillGithub/></a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
}

export default Footer;
