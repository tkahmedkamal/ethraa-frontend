import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { LoadingIcon } from "../../ui";
import useVerifyAccount from "./useVerifyAccount";

const VerifyAccountContent: React.FC = () => {
  const { token } = useParams();
  const { activeAccount, isLoading } = useVerifyAccount();
  const ref = useRef(true);

  useEffect(() => {
    if (ref.current === true) {
      activeAccount(token);
    }

    return () => {
      ref.current = false;
    };
  }, [activeAccount, token]);

  return isLoading && <LoadingIcon large />;
};

export default VerifyAccountContent;
