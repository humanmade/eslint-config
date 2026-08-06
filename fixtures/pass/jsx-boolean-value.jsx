/* eslint-disable no-unused-vars */

import React from 'react';

const Toggle = ( { enabled } ) => <span>{ enabled ? 'on' : 'off' }</span>;

const A = () => (
	<Toggle enabled />
);
