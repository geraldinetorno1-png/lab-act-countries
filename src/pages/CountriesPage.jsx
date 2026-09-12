import COUNTRIES from "../data/countries";

const CountriesPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Countries</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {COUNTRIES.map((c) => (
          <div key={c.code} className="card bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title">{c.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesPage;
