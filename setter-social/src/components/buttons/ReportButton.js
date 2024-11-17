import React from 'react';
import './buttons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

const ReportButton = ({ onClick, size = '100%', buttonType = 'button'}) => (
    <button className="report-button" type={buttonType} style={{ width: size }} onClick={onClick}>
        <FontAwesomeIcon icon={faFlag} />
        Report
    </button>
);

export default ReportButton;