import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Divehabot from './components/divehabot/divehabot';
import Content from './components/contentBox/content';
import Verification from './components/verificationBox/verification';
import WorkBox from './components/workBox/workBox';
import Footer from './components/footer/footer';
import { boxesData } from '../src/data';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Divehabot />
      <Content />
      <Verification />
      <WorkBox data={boxesData} />
      <Footer />
    </>
  );
}

export default App;
