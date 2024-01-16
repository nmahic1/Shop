import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <footer>{` © ${year} M.a.s Shop. Designed By Nejla Mahic. `}</footer>
    </div>
  );
}

export default Footer;
