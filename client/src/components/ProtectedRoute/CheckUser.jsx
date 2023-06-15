import { useEffect, useState } from "react";
import { useAuth } from "../../components/context/authContext";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

export default function CheckUser() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_MY_API}/api/v1/auth/user-auth`
      );
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
}
