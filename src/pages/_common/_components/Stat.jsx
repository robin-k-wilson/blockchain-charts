import React from 'react';
import { Link } from 'react-router-dom';

import { numberWithCommasNoDecimals, numberWithCommasWithDecimals } from '../';

export default function Stat(props) {
  const { title, data, unit, sign } = props;
  return (
    <div className="padding-sm">
      <span className="no-p-m fnt-md">{title}</span>
      <Link to={"#"}><p className="fnt-xxlg padding-xsm text-color-dark-blue">{sign + (data.toString().indexOf('.') === -1 ? numberWithCommasNoDecimals(data) : numberWithCommasWithDecimals(data))}</p></Link>
      <p className="fnt-sm no-p-m">{unit}</p>
    </div>
  );
}