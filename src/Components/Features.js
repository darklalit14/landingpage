import React from "react";
import Feature from "./Feature";

const Features = () => {
  return (
    <div className="min-h-100 d-flex flex-column  align-items-center justify-content-center">
      <h1 className="text-center">Personalities Of Powerful Men</h1>
      <div className="d-flex p-2 gap-3 w-75  bg-primary mt-4">
        <Feature
          title={"Alpha-Male"}
          subHead={"Top Male in the List"}
          desc={
            "Alpha males are strong, determined, and clear about their goals. With their innate charm, they face little difficulty attracting women. Unlike beta men, alpha men have a magnanimous personality, are highly confident, and make the right decisions.07"
          }
        />
        <Feature
          title={"Beta-Male"}
          subHead={"Medium male in the list"}
          desc={
            "Beta males are fun, confident, and charismatic. They're also driven, and tend to be highly motivated. This makes them desirable as dating partners, and many women seek out betas as partners when they realize that they don't have the dating marketplace value to secure an alpha-male as a partner."
          }
        />
        <Feature
          title={"Gamma-Male"}
          subHead={"Cool male in the list"}
          desc={
            "To be a gamma means to be an intellectual, ideological, romantic man who struggles with women and suffers from chronic 'nice guy' syndrome. Gamma males exist at the lower end of the socio sexual hierarchy. They do, however, long for the power, status, and benefits that come from being in the alpha-male position."
          }
        />
      </div>
    </div>
  );
};

export default Features;
