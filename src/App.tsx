import React, { useState } from "react";
import "./App.css";
import AccountPage from "./pages/account";
import ArchivesPage from "./pages/archives";

import SearchingPage from "./pages/searching";

function App() {
  type Pages = "searching" | "archives" | "account";
  const [currentPage, setCurrentPage] = useState<Pages>("searching");

  function DisplayedPage() {
    switch (currentPage) {
      case "searching":
        return <SearchingPage />;
      case "archives":
        return <ArchivesPage />;
      case "account":
        return <AccountPage />;
    }
  }

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a onClick={() => setCurrentPage("searching")}>Start Searching</a>
            </li>
            <li>
              <a onClick={() => setCurrentPage("archives")}>All Archives</a>
            </li>
            <li>
              <a onClick={() => setCurrentPage("account")}>My Account</a>
            </li>
          </ul>
        </nav>
      </header>
      <DisplayedPage />
    </>
  );
}

export default App;
