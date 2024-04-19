import React from 'react';

function Homepage() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <main role="main">
        {/* Main jumbotron for a primary marketing message or call to action */}
        <div className="jumbotron">
          <div className="container text-center">
            <h1 className="display-3">Welcome to IPT Project</h1>
          </div>
        </div>
        <div className="container">
          {/* Example row of columns */}
          <div className="row"></div>
          <hr />
        </div>{" "}
        {/* /container */}
      </main>
    </div>
  );
}

export default Homepage;
