/** @format */

import React from 'react';
import * as reactRedux from 'react-redux';
import { render, screen, cleanup } from '@testing-library/react';

import App from './App';

describe('test suite for crwn-clothing app', () => {
	const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
	const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

	beforeEach(() => {
		useSelectorMock.mockClear();
		useDispatchMock.mockClear();
	});

	it('should take a snapshot', () => {
		useSelectorMock.mockReturnValue({
			mockCurrentUser: null,
		});
		const mockCheckUserSession = jest.fn();
		useDispatchMock.mockReturnValue(mockCheckUserSession);

		const { asFragment } = render(<App />);
		expect(asFragment(<App />)).toMatchSnapshot();
	});
});
