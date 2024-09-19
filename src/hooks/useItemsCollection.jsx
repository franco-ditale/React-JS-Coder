import {useEffect, useState} from "react";
import { collection , getDocs} from "firebase/firestore";
import { db } from "../firebase";


export const useItemsCollection = (categoryName) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const itemsCollection = collection(db, categoryName);
    getDocs(itemsCollection)
      .then((snapshot) => {
        setItems(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { items, loading, error };
};