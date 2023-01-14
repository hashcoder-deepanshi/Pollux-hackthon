import React from "react";
import mainImg from "../Images/image 2.png";
import obj1 from "../Images/1.png";
import obj2 from "../Images/2.png";
import obj3 from "../Images/3.png";
import MemberCard from "../memberCard";
import members from "../members";

function Home() {
  return (
    <div>
      <div class="home-section-1">
        <div class="row">
          <div class="col-lg-5">
            <h1>Tag Line</h1>
            <h1>Tag Line</h1>
            <h1>Tag Line</h1>
            <button
              type="button"
              class="btn btn-outline-light btn-lg download-button"
            >
              <i class="fab fa-chrome" style={{ padding: "5px" }}></i> Get
              Chrome Extention
            </button>
          </div>
          <div class="col-lg-7">
            <img class="obj obj1" src={obj1} alt="1" />
            <img class="obj obj2" src={obj2} alt="2" />
            <img class="obj obj3" src={obj3} alt="3" />
            <img class="main-image" src={mainImg} alt="mainImg" />
          </div>
        </div>
      </div>

      <section id="features">
        <div class="row">
          {/* <div class="col-lg-1">
            <img src={obj4} alt="3" />
          </div> */}
          <div class="feature-box col-lg-4 feature-3">
            <div class="content">
              <i class="fas fa-5x fa-clock features-icons"></i>
              <h3>Feature 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
                sodales nulla.
              </p>
            </div>
          </div>

          <div class="feature-box col-lg-4">
            <i class="fas fa-5x fa-file features-icons"></i>
            <h3>Feature 2</h3>
            <p>
              Quisque quis fermentum mauris. Aenean eu viverra magna, quis
              cursus mauris
            </p>
          </div>

          <div class="feature-box col-lg-4 feature-3">
            <i class="fas fa-5x fa-chart-line features-icons"></i>
            <h3>Feature 3</h3>
            <p>
              Fusce facilisis porta quam, non condimentum lectus pulvinar
              consectetur. Nam sed diam sed risus tincidunt ultrices.
            </p>
          </div>

          {/* <div class="col-lg-1">
            <img src={obj5} alt="4" />
          </div> */}
        </div>
      </section>

      <div class="teamSection">
        <h1 class="team">THE TEAM</h1>

        {members.map((m) => (
          <MemberCard key={m.id} img={m.imgURL} />
        ))}
      </div>
    </div>
  );
}

export default Home;
