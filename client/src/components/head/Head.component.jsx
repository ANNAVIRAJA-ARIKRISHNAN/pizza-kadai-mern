import { Helmet } from "react-helmet";

const Head = ({ title }) => {
  return (
    <Helmet>
      <title>Pizza Kadai - {title}</title>
    </Helmet>
  );
};

export default Head;
