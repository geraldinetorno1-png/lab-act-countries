import { Link } from "react-router";

const AboutPage = () => {
  return (
    <div className="max-w-2xl mx-auto py-10 space-y-4">
      <h1 className="text-4xl font-bold">About</h1>
      <p>
        <strong>Countries of the World</strong> is a React project for
        Front-End Development 2, covering Labs 07 to 09.
      </p>
      <p>
        Browse countries and their capitals, view a random country, or check
        the travel bucket list.
      </p>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </div>
  );
};

export default AboutPage;
