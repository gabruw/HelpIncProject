//#region Imports

import React from 'react';
import { Button } from 'semantic-ui-react';
import styles from './styles.module.css';
import './styles.css';

//#endregion

const MainButton = ({ text, textColor = '#ffffff' }) => (
    <Button className={styles.mainButton} content={text} style={{ color: textColor }}></Button>
);

export default MainButton;
