import React from 'react';
import NavBar from './NavBar'
import Form from "./Form"
import PageContent from './pageContent'
import {ThemeProvider} from "./contexts/ThemeContext"
import {LanguageProvider} from "./contexts/languageContext"
function App() {
  return (
    <LanguageProvider>
    <ThemeProvider>
      <PageContent>
        <NavBar />
        <Form />
      </PageContent>
    </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
