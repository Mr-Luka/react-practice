import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const suggestedFriends = [
  {
    name: "Adda Birnir",
    picture:
      "https://media3.s-nbcnews.com/j/newscms/2014_38/668451/140916-adda-birnir-mn-945_370915e8aeb3493ab5f93aa594ac8832.nbcnews-ux-2880-1000.jpg",
    mutualFriendCount: 124
  },
  {
    name: "Sara Strahan",
    picture:
      "https://lh3.googleusercontent.com/eZxn1kdqtAZN2fgjn1Ro5CcrPNdUWOAyWgrlSHHTL_TDAEtHFgsujzWW12zsT2Z3wgM8PeDBHQKNAFtyvYph=w550",
    mutualFriendCount: 58
  },
  {
    name: "Blair Mishleau",
    picture:
      "https://lh3.googleusercontent.com/gGpUv65y3VoJbuzdtf5MVAqxpxeSaaVEMPETbN7piWHD_xq4K8Ja2V-YIsuk0ZklNLBu0iESyXV9749zZKte6A=w550",
    mutualFriendCount: 26
  },
  {
    name: "Ann Cascarano",
    picture:
      "https://lh3.googleusercontent.com/RGFymD_vxjq4ZQzJ5DR2KEAyfTAHDKZtnJut4G18-kuj3_xI30sQb7kN9uTld0IS263SU5KNa9nU0d5EnpmnzA=w536",
    mutualFriendCount: 19
  }
];

export default suggestedFriends;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
