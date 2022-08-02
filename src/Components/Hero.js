import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="heroSection">
      <div className="card text-center">
        {/* <div className="card-header">Heading</div> */}
        <div className="card-body">
          <h5 className="card-title">Mission Agenda</h5>
          <p className="card-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            pariatur laboriosam delectus hic quas, optio natus in autem rem
            distinctio, perspiciatis rerum quo mollitia quis! Fuga quia
            obcaecati debitis quas exercitationem! Distinctio quaerat recusandae
            ipsa modi velit! Earum, veritatis doloremque.
          </p>
          <a href="/" className="btn btn-primary">
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
