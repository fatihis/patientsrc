import React, {createContext, useEffect, useState} from 'react';
import {encodeQueryData, parseAddress} from '../../utils/helpers';
export const PatientContext = createContext();
export const PatientContextProvider = ({children}) => {
  const [searchString, setSearchString] = useState(''); //User input state
  const [currentFilter, setCurrentFilter] = useState('name'); //Filter state e.g. name,id,family,given
  const [searchExpression, setSearchExpression] = useState(''); //concatenated query string for HTTP requests
  const [patientList, setPatientList] = useState([]); //Retrieved data state
  const [asteriskRadioArray, setAsteriskRadioArray] = useState([
    {selected: true, id: 0, title: 'Starts with'},
    {selected: false, id: 1, title: 'Ends with'},
    {selected: false, id: 2, title: 'Includes'},
    {selected: false, id: 3, title: 'Exact'},
  ]); //Usage of asterisk state
  const [tagObj, setTagObj] = useState({
    name: '',
    nationalid: '',
    given: '',
    family: '',
  }); //Tags state
  const [isCooldown, setIsCooldown] = useState(false); //Cooldown state in order to limiting query
  const [queryCounter, setQueryCounter] = useState(0); //Counting queries in order to limiting query
  const [displayData, setDisplayData] = useState(); //Constructing displaying data for UI for single-responsibility

  useEffect(() => {
    //Fetching data if searchExpression has been set or update
    if (searchString.length >= 2) {
      fetchPatientData();
    }
  }, [searchExpression]);

  const addNewSearchExp = () => {
    //When search button pressed, this function invokes to call relevant functions in order.
    if (searchString.length >= 2 && isCooldown != true) {
      updateTags();
      setConcatQueryExpression();
      cooldownSearch(3000);
    } else if (searchString.length < 2) {
      alert('Please type more than 2 character/digit at least');
    } else if (isCooldown === true) {
      alert('Slow down! Please try again in 5 sec.');
    } else {
      console.log('Smth went wrong');
    }
  };

  const updateTags = () => {
    //Updating Tags array
    let mutableTagObj = tagObj;
    let currentAsteriskOption = getCurrentAsteriskOption();
    mutableTagObj[currentFilter] =
      currentAsteriskOption === 0
        ? searchString + '*'
        : currentAsteriskOption === 1
        ? '*' + searchString
        : currentAsteriskOption === 2
        ? '*' + searchString + '*'
        : searchString;
    setTagObj(mutableTagObj);
  };
  const setConcatQueryExpression = () => {
    //Concatenate the tags with ? & operators and encode strings into URI format.
    const queryString = '?' + encodeQueryData(tagObj);
    console.log(queryString);
    setSearchExpression(queryString);
  };

  const constructDisplayData = patientArray => {
    // Constructing retrieved data for displaying
    var mutableDisplayDataArray = [];
    if (patientArray != null) {
      patientArray.map(patient => {
        var patientData = {
          id: patient.id,
          name: patient.resource.name[0].given[0],
          familyName: patient.resource.name[0].family,
          nationalId: patient.resource.id,
          gender: patient.resource.gender,
          phone: patient.resource.telecom[0].value,
          address: parseAddress(patient.resource.address[0]),
        };
        mutableDisplayDataArray.push(patientData);
      });
      setDisplayData(mutableDisplayDataArray);
    }
  };

  const cooldownSearch = millis => {
    // Cooling down the searching for preventing unlimited consecutive searches
    setQueryCounter(prev => prev + 1);
    if (queryCounter > 2) {
      setIsCooldown(true);
      setTimeout(() => {
        setIsCooldown(false);
        setQueryCounter(0);
      }, millis);
    }
  };

  const updateAsteriskOption = id => {
    //Updating current asterisk option
    let options = [...asteriskRadioArray];
    options.map(element => {
      element.selected = element.id === id ? true : false;
    });
    setAsteriskRadioArray(options);
  };

  const resetQuery = () => {
    //Resetting all the tags and data
    setTagObj({
      name: '',
      nationalid: '',
      given: '',
      family: '',
    });
    setPatientList([]);
    setDisplayData([]);
  };
  const getCurrentAsteriskOption = () => {
    return asteriskRadioArray.find(item => item.selected === true).id;
  };

  const fetchPatientData = async () => {
    // fetching data with predefined parameters
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', ' application/fhir+json');
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };
    const response =
      searchExpression != ''
        ? await fetch(
            'http://fhir.imagerad.com/dummy/Patient/' + searchExpression,
            requestOptions,
          )
            .then(res => res.json())
            .then(data => {
              console.log(data);
              constructDisplayData(data.entry);
              return data;
            })
            .catch(e => console.log(e + ' error'))
        : null;
    setPatientList(response.entry); //null point exc
  };

  const patientContextValue = {
    setSearchString,
    setSearchExpression,
    addNewSearchExp,
    setCurrentFilter,
    fetchPatientData,
    updateAsteriskOption,
    resetQuery,
    searchString,
    searchExpression,
    currentFilter,
    asteriskRadioArray,
    patientList,
    tagObj,
    isCooldown,
    displayData,
  };

  return (
    <PatientContext.Provider value={patientContextValue}>
      {children}
    </PatientContext.Provider>
  );
};
