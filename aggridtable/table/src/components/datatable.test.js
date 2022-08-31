import React from "react";
// import { configure } from "enzyme";
// import adapter from 'enzyme-adapter-react-16';
// configure({adapter:new adapter()});
// import { BasicTable } from "./datatable";
// import {shallow} from 'enzyme';

describe('taleformat',()=>{
    it('render check',()=>{
        let wrapper=shallow(<BasicTable/>);
       // console.log(wrapper.debug());
       expect(wrapper.exists('Taleformat')).toEqual(true);
      
    })
})