import React from 'react';
import NavBar from './NavBar'
import Form from "./Form"
import PageContent from './pageContent'
import {ThemeProvider} from "./contexts/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <NavBar />
        <Form />
      </PageContent>
    </ThemeProvider> 
  );
}

export default App;
