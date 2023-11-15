import styled from "styled-components";
import { Link } from "react-router-dom";
const NotFoundContainer = styled.div`
  text-align: center;
  margin: 50px;
  font-family: Arial, sans-serif;

  h1 {
    font-size: 3rem;
    color: #ff6347; /* Tomato Red */
  }

  p {
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
    color: #0077ff; /* Blue */
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ErrorPage = () => {
  return (
    <NotFoundContainer>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go back to the homepage</Link>
    </NotFoundContainer>
  );
};

export default ErrorPage;
