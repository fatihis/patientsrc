import React, {createContext, useEffect, useState} from 'react';
import {encodeQueryData, parseAddress} from '../../utils/helpers';
export const PatientContext = createContext();
export const PatientContextProvider = ({children}) => {
  const [searchString, setSearchString] = useState('');
  const [currentFilter, setCurrentFilter] = useState('name');
  const [searchExpression, setSearchExpression] = useState('');
  const [patientList, setPatientList] = useState([]);
  const [asteriskRadioArray, setAsteriskRadioArray] = useState([
    {selected: true, id: 0, title: 'Starts with'},
    {selected: false, id: 1, title: 'Ends with'},
    {selected: false, id: 2, title: 'Includes'},
    {selected: false, id: 3, title: 'Exact'},
  ]);
  const [tagObj, setTagObj] = useState({
    name: '',
    nationalid: '',
    given: '',
    family: '',
  });
  const [isCooldown, setIsCooldown] = useState(false);
  const [queryCounter, setQueryCounter] = useState(0);
  const [displayData, setDisplayData] = useState(0);

  useEffect(() => {
    if (searchString.length >= 2) {
      fetchPatientData();
    }
  }, [searchExpression]);

  const updateAsteriskOption = id => {
    let options = [...asteriskRadioArray];
    options.map(element => {
      element.selected = element.id === id ? true : false;
    });
    setAsteriskRadioArray(options);
  };

  const getCurrentAsteriskOption = () => {
    return asteriskRadioArray.find(item => item.selected === true).id;
  };

  const addNewSearchExp = () => {
    if (searchString.length >= 2 && isCooldown != true) {
      updateTags();
      setConcatQueryExpression();
      cooldownSearch(3000);
    } else if (searchString.length < 2) {
      alert('Please type more than 2 character/digit at least');
    } else if (isCooldown === true) {
      alert('Slow down! Please try again in 5 sec.');
    }
  };

  const updateTags = () => {
    var mutableTagObj = tagObj;
    var currentAsteriskOption = getCurrentAsteriskOption();
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
    const queryString = '?' + encodeQueryData(tagObj);
    console.log(queryString);
    setSearchExpression(queryString);
  };

  const constructDisplayData = patientArray => {
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
    setQueryCounter(prev => prev + 1);
    if (queryCounter > 2) {
      setIsCooldown(true);
      setTimeout(() => {
        setIsCooldown(false);
        setQueryCounter(0);
      }, millis);
    }
  };

  const fetchPatientData = async () => {
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
        : null;
    setPatientList(response.entry); //null point exc
  };

  const patientContextValue = {
    searchString,
    setSearchString,
    searchExpression,
    setSearchExpression,
    addNewSearchExp,
    currentFilter,
    setCurrentFilter,
    fetchPatientData,
    updateAsteriskOption,
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
