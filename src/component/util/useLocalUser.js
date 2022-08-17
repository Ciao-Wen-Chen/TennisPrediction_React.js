import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';

function useLocalUser(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const localStorageValue = localStorage.getItem(key);
    if(localStorageValue !== null){
      var tokenPayload = jwt_decode(localStorageValue, { payload: true });
      var role = tokenPayload.role; //role = "MEMBER_ROLE"
      return role;
    }else{
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem("role", value);
  }, [key, value]);

  return [value, setValue];
}

export {useLocalUser};

// let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)