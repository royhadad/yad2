import React from 'react';
import { shallow } from 'enzyme';
import { ItemForm } from '#components#/personalPage/ItemForm';
import { emptyItem } from '#src#/reducers/itemForm';

//end to end test for ItemForm page

let wrapper, setErrorSpy, onSubmitSpy, startDeleteItemSpy, resetToDefaultSpy;
beforeEach(() => {
    setErrorSpy = jest.fn();
    onSubmitSpy = jest.fn();
    startDeleteItemSpy = jest.fn();
    resetToDefaultSpy = jest.fn();
    wrapper = shallow(
        <ItemForm
            setError={setErrorSpy}
            onSubmitText={undefined}
            successText={undefined}
            category={'forsale'}
            error={undefined}
            setItem={jest.fn()}
            setLocation={jest.fn()}
            setError={jest.fn()}
            resetToDefault={resetToDefaultSpy}
            onSubmit={onSubmitSpy}
            item={emptyItem}
            startDeleteItem={startDeleteItemSpy}
            isEdit={true}
        />
    );
});

test('should render ItemForm component correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call onSubmit on button click', () => {
    wrapper.find('.item-form__submit-button').at(0).simulate('click');
    expect(onSubmitSpy).toHaveBeenCalledTimes(1);
});

test('should call startDeleteItem on button click', () => {
    wrapper.find('.item-form__delete-button').at(0).simulate('click');
    expect(startDeleteItemSpy).toHaveBeenCalledTimes(1);
});

test('should call resetToDefault on componentDidMount', () => {
    expect(resetToDefaultSpy).toHaveBeenCalledTimes(1);
});