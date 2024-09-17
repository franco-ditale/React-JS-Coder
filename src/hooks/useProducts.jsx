import {useEffect, useState} from "react";
import { collection , getDocs} from "firebase/firestore";
import { db } from "../firebase";


export const useProducts = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const productsCollection = collection(db, "product");
    getDocs(productsCollection)
      .then((snapshot) => {
        setProductsData(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { productsData, loading, error };
};