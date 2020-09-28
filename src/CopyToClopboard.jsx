import React  from 'react';
import {copyTableToClipboard }from './util';


export const CopyToClipboard = ({divID,reportName}) => (<button onClick={() => copyTableToClipboard(divID,reportName)}> Click To Copy </button>)