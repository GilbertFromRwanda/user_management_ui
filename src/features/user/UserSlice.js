import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios").default;
const initialState = {
  value: 0,
  logedIn: null,
  countryList: [
    "__select__",
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands",
  ],
  users: [],
  emailValide: { is: false, err: "Not yet validated" },
  myEmail: "",
  url_api: "http://localhost:8000",
  SUCCESS: { isOk: false, data: {}, action: "", err: "" },
};

export const UserSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setLogedIn: (state, action) => {
      state.logedIn = action.payload;
    },
    setMyEmail: (state, action) => {
      state.myEmail = action.payload;
    },
    setSucess: (state, action) => {
      const d = action.payload;
      state.SUCCESS = { isOk: true, err: "", data: d.data, action: d.action };
    },
    setFail: (state, action) => {
      const d = action.payload;
      state.SUCCESS = { isOk: false, err: d.err, data: "", action: d.action };
    },
    sendLogin: (state, action) => {
      const data = action.payload; // email,password
      axios
        .post(`${state.url_api}/auth`, {
          email: data?.email,
          password: data?.password,
        })
        .then((response) => {
          setSucess({ action: "SEND_LOGIN", data: response });
        })
        .catch((error) => {
          setFail({ err: error.toJSON().message, action: "SEND_LOGIN" });
        });
    },
    sendReset: (state, action) => {
      const email = action.payload;
      axios
        .get(`${state.url_api}/auth/email/forgot-password/${email}`)
        .then((response) => {
          // console.log("Response from sendreset", response);
          setSucess({ action: "SEND_RESET", data: response });
        })
        .catch((error) => {
          setFail({ err: error.toJSON().message, action: "SEND_RESET" });
        });
    },
    validateEmail: (state, action) => {
      const email = action.payload;
      axios
        .get(`${state.url_api}/user/${email}`)
        .then((response) => {
          state.emailValide = { is: true, err: "" };
          setSucess({ action: "VALIDATE_EMAIL", data: response });
        })
        .catch((err) => {
          setFail({ err: err.toJSON().message, action: "VALIDATE_EMAIL" });
        });
    },
    verifyAccount: (state, action) => {
      const data = action.payload;
      axios
        .post(`${state.url_api}/user/verify`, data)
        .then((response) => {
          console.log("success while verifying", response);
          setSucess({ action: "VERIFY_ACCOUNT", data: response });
        })
        .catch((err) => {
          setFail({ err: err.toJSON().message, action: "VERIFY_ACCOUNT" });
        });
    },
    changeProfilePicture: (state, action) => {
      const data = action.payload;
      axios
        .post(`${state.url_api}/upload?profile_image`, data)
        .then((response) => {
          setSucess({ action: "CHANGE_PROFILE_PICTURE", data: response });
        })
        .catch((err) => {
          setFail({
            err: err.toJSON().message,
            action: "CHANGE_PROFILE_PICTURE",
          });
        });
    },
    editAccountInfo: (state, action) => {
      console.log("My Account update");
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLogedIn,
  sendLogin,
  sendReset,
  validateEmail,
  verifyAccount,
  editAccountInfo,
  changeProfilePicture,
  setFail,
  setSucess,
  setMyEmail,
} = UserSlice.actions;

export default UserSlice.reducer;
