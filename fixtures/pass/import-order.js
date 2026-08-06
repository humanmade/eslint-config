/* eslint-disable no-unused-vars */

import apiFetch from '@wordpress/api-fetch';
import chalk from 'chalk';
import eslint from 'eslint';
import path from 'path';

import Test from './component-jsx-parentheses';
import index from '../../index';

// Side-effect imports are order-dependent, so their position is not enforced.
import '../test-lint-config';
