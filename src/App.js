import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url).then(async res => {
      if (res.status !== 200) {
        setData('uh oh error!');
      }
      const data = await res.json();
      setData(data);
    });
  }, [setData, url]);

  return [data];
}

const App = () => {
  const [harveyData] = useFetch('/user/harvey');
  const [blahData] = useFetch('/user/blahblahblah');
  const [unauthData] = useFetch('/user/unauthorised-user');

  return (
    <div>
      <div>
        User data: {JSON.stringify(harveyData)}
      </div>
      <div>
        Blah data: {JSON.stringify(blahData)}
      </div>
      <div>
        Unauth data: {JSON.stringify(unauthData)}
      </div>
    </div>
  );
}

export default App;
