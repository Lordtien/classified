import React from 'react';
import logo from './logo.svg';
import './App.css';

function experience() {
  return (
    <div>
      <h1>[EXPERIENCE]</h1>
      <div>
        <h3>RIPPLING</h3>
        <img src=".../dummy.jpg" alt="Rippling Logo"/>
        <p>
          - Worked on data extractors using selenium.
          - SAML integrations and debugging using pysaml.
          - API integrations.
          - API documentation 
  
          Duration: 4 months
          Stack: Django, Mongo, AWS
        </p>
      </div>
      <div>
        <h3>TECHNOARCH SOFTWARES</h3>
        <img src=".../dummy.jpg" alt="Technoarch Softwares Logo"/>
        <p>
          - Worked as a sole developer on a crypto-currency high frequency arbitrage bot.
          - Worked on data entry system for contractors.
  
          Duration: 1 year 2 months
          Stack: Django, PostgreSQL, Redis, Celery, AWS
        </p>
      </div>
      <div>
        <h3>PROFILEDSK.IN</h3>
        <img src=".../dummy.jpg" alt="Technoarch Softwares Logo"/>
        <p>
            - Converted texture detection python scripts into CUDA scripts.
    
            Duration: 4 months
            Stack: CUDA, OpenCV
        </p>
      </div>
    </div>
  );
}

function skills() {
  return (
    <div>
      <h1>[EXPERTISE]</h1>
        <table>
          <tr>
              <th>Skill</th>
              <th>Proficiency</th>
          </tr>
          <tr>
              <td>JavaScript</td>
              <td><span class="redacted">Redacted</span></td>
          </tr>
          <tr>
              <td>Python</td>
              <td><span class="redacted">Redacted</span></td>
          </tr>
      </table>
    </div>
  );
}

function assignments() {
  return (
    <div>
      <h1>[ASSIGNMENTS]</h1>
        <div>
          <h3>Real time multiple stream motion detection</h3>
          <p>
              Working under Zenesis Network as an intern, created a motion detection system that performs
              motion detection in real time over multiple (~50) data streams from CCTV cameras.
      
              Stack: Python
              Libraries: OpenCV, Streamparse, Apache Storm, Redis
          </p>
        </div>
        
        <div>
          <h3>Face Recognition System</h3>
          <p>
              Under Elvento Labs as an intern, created a face recognition system that detects pre-defined
              faces in local media files as well as data streams.
      
              Stack: Python
              Libraries: OpenCV, OpenFace
          </p>
        </div>
    </div>
  );
}

function contacts() {
  return (
    <div>
      <h1 class="heading">[RENDEZVOUS]</h1>
        
        <div>
          <p>
            <span class="redacted"> redacted redacted redacted redacted redacted</span> <strong>ELINT</strong> <span class="redacted"> redacted redacted 
            redacted redacted </span> <strong>nitinpawarme@gmail.com</strong> <span class="redacted"> redacted 
            redacted redacted redacted</span>.
          </p>
        </div>
        
        <div>
            <p>
              <span class="redacted"> 
              redacted redacted redacted </span> <strong>COMINT</strong> <span class="redacted"> redacted redacted redacted 
              redacted redacted redacted </span> <strong>(+91) 78348 55418</strong> <span class="redacted"> redacted redacted redacted 
              redacted redacted redacted</span>.
            </p>
        </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
