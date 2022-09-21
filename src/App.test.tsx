import React from 'react';
import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import App from './App';

const app = shallow(<App />);
const searchContainer = app.find('SearchContainer');


describe("basic tests", () => {

    it('renders properly', ()  =>  {
        expect(app).toMatchSnapshot();
    });


})

describe()

// expect(screen.getByText("Where are we going to eat?")).toBeInTheDocument();

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });