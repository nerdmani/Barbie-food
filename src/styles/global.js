import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

.container {
    background-color: #f8bbd0; /* Rosa claro */
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 30px;
    width: 400px;
    text-align: center;
  }
  
  .logo {
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
    text-align: left;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #ff4081; /* Rosa Barbie */
  }
  
  .form-group input {
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid #e91e63; /* Rosa escuro */
    border-radius: 4px;
    font-size: 16px;
    background-color: #ffffff; /* Branco */
  }
  
  .form-group input:focus {
    outline: none;
    border-color: #ff4081; /* Rosa Barbie */
  }
  
  .form-button {
    background-color: #ff4081; /* Rosa Barbie */
    color: #ffffff; /* Branco */
    border: none;
    border-radius: 4px;
    padding: 12px 0;
    width: 100%;
    font-size: 16px;
    cursor: pointer;
  }
  
  .form-button:hover {
    background-color: #f50057; /* Rosa Barbie mais escuro */
  }
  
  .signup-link {
    color: #ff4081; /* Rosa Barbie */
    text-decoration: none;
    font-weight: bold;
  }
  
  .signup-link:hover {
    text-decoration: underline;
  }
  
`;







export default GlobalStyle;
