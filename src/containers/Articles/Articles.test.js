import React from 'react';
import Articles from './Articles';
import axios from 'axios';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

jest.mock('axios');

describe('Articles container', () => {
    it('should fetch list from articles', () => {
        const getSpy = jest.spyOn(axios, 'get');
        const toDoListInstance = shallow(
            <Articles />
        )
        expect(getSpy).toBeCalled();
    });

    it('render Articles without crashing', () => {
        shallow(
            <Articles />
        )
    });
});