import React from 'react';
import Articles from './Articles';
import Article from '../../components/Article/Article';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import store from '../../store/index';
import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });

describe('Articles container', () => {
    it('render Articles without crashing', () => {
        shallow(
            <Provider store={store}>
                <Articles />
            </Provider>
        )
    });
    it('renders Article without crashing', () => {
        shallow(
            <Provider store={store}>
                <Article />
            </Provider>
        );
    });
});