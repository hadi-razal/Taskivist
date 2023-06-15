import React from "react";
import HomeLayout from "../../Layout/HomeLayout";
import "./Pricing.css";
import cardDetails from "../../CardPrice";

const Pricing = () => {
  return (
    <HomeLayout>
      <div className="pricing-container">
        {cardDetails.map((pd, i) => {
          return (
            <div className="price-card">
              <div key={pd.id} className="price-card-items">
                <h1>{pd.title}</h1>
                <h4>${pd.price}/month</h4>
                <hr />
                <h3>features</h3>
                <hr/>
                <p>{pd.feature}</p>
              </div>
                <button>{pd.btn}</button>
            </div>
          );
        })}
      </div>
    </HomeLayout>
  );
};

export default Pricing;
