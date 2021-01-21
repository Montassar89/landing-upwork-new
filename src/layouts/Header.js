import React from "react";
import { useEffect, useState } from "react";

const Header = () => {
  const [headerText, setHeaderText] = useState(whenNotFixed);
  useEffect(() => {
    // const header = document.getElementById("myHeader");
    // const sticky = header.offsetTop;
    // const scrollCallBack = window.addEventListener("scroll", () => {
    //   if (window.pageYOffset > sticky) {
    //     header.classList.add("sticky");
    //     if (headerText !== fixedText) {
    //       setHeaderText(fixedText);
    //     }
    //   } else {
    //     header.classList.remove("sticky");
    //     if (headerText !== whenNotFixed) {
    //       setHeaderText(whenNotFixed);
    //     }
    //   }
    // });
    // return () => {
    //   window.removeEventListener("scroll", scrollCallBack);
    // };
  }, []);

  return (
    <div>
      <header className="header">HEADER</header>
    </div>
  );
}

export default Header;