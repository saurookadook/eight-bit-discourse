import React from 'react';
import '../styles/css/App.css';

export const PageLayout = () =>
    <div className="PageHeader bg-warning">
      <div className="row">
        <div className="AppDetails col-8 mt-4">
          <h1 className="AppName text-left ml-5 mt-3">8-bit Discourse</h1>
          <p className="HomeDescription text-left ml-5">A place for open discourse about games.</p>
        </div>
        <img className="PageHeaderImage col-4" src="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
      </div>
    </div>
