import React from "react";

const donorcard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, donorname, number, bloodgrp} = curElem;

          return (
            <>
              <div className="donor-card-container" key={id}>
                <div className="donor-card ">
                  <div className="donor-card-body">
                    <span className="donor-card-number donor-card-circle subtle">✅</span>
                    <span className="donor-card-author subtle"> {bloodgrp}</span>
                    <h2 className="donor-card-title"> {donorname} </h2>
                    <span className="donor-card-number subtle">
                      {number}
                    </span>
                  </div>
                  <span className="donor-card-tag  subtle">Available | Verified</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default donorcard;