import React, { useEffect, useState } from "react";
import '../../App.css'

const LoginLoader = props => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, props.delay);
    return () => clearTimeout(timer)
  }, [props.delay]);

  return !visible ? <div className="fade-in">{props.children}</div> : <div className="fade-in"><img src="/images/mefit.png" alt="mefitlogo" /></div>;
};

export default LoginLoader;