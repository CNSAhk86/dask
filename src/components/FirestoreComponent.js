// src/components/FirestoreComponent.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

function FirestoreComponent() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, 'your-collection'));
    setData(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addData = async () => {
    await addDoc(collection(db, 'your-collection'), { field: 'value' });
    fetchData(); // 새로운 데이터를 추가한 후 데이터를 다시 불러옵니다.
  };

  return (
    <div>
      <h1>은 놀랍게도 살아있습니다.</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.field}</li>
        ))}
      </ul>
      <button onClick={addData}>Add Data</button>
    </div>
  );
}

export default FirestoreComponent;