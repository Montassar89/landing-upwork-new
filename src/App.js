import React from 'react';
const App = ({ Component, pageProps }) => {
  return (
    <div className="main">
      <Header />
      <Component  {...pageProps} />
      <Footer />
    </div>
  );
}
export default App;
