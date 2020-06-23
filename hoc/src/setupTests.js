// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
//import '@testing-library/jest-dom/extend-expect';

//////////////////////////////

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/////////////// 
// CRA does not provide lastest version of Jest
// Added manually MutationObserver for waitFor function
import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver
///////////////

Enzyme.configure({ adapter: new Adapter() })