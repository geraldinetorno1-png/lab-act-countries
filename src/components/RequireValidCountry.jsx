import { Navigate, Outlet, useParams } from "react-router";
import COUNTRIES from "../data/countries";

const RequireValidCountry = () => {
  const { countryCode } = useParams();
  const country = COUNTRIES.find((c) => c.code === countryCode?.toUpperCase());

  if (!country) {
    return (
      <Navigate
        to="/countries"
        state={{ missingCode: countryCode }}
        replace
      />
    );
  }

  return <Outlet />;
};

export default RequireValidCountry;
