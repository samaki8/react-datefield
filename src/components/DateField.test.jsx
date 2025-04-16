//src\components\DateField.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import DateField from './DateField';

//import './styles/datefield.css';

test('renders DateField with label', () => {
    render(<DateField label="Test Label" id="test-id" register={() => { }} />);
    expect(screen.getByLabelText(/Test Label/i)).toBeInTheDocument();
});

test('displays error message when validation fails', () => {
    const errors = { 'test-id': { message: 'Required field' } };
    render(<DateField label="Test Label" id="test-id" register={() => { }} errors={errors} />);
    expect(screen.getByText(/Required field/i)).toBeInTheDocument();
});
