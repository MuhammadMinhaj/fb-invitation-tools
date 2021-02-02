/**
 * DATE:26/01/2021
 * AUTHOR: Muhammad Minhaj
 * GITHUB_USERNAME:@dev-mdminhaj
 * TITLE: Form Component
 * DESCRIPTION: This is a simple form component for use in any pages
 * * */
import { Button, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

function Form({ btnName, fields, handleChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            {fields.map(({ type, name, value, label, placeholder }) => (
                <TextField
                    key={name}
                    type={type}
                    name={name}
                    value={value}
                    label={label}
                    placeholder={placeholder}
                    onChange={handleChange}
                    variant="filled"
                    fullWidth
                    margin="dense"
                />
            ))}
            <Button type="submit" size="large" color="primary" variant="contained">
                {btnName}
            </Button>
        </form>
    );
}

Form.propTypes = {
    btnName: PropTypes.string.isRequired,
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            placeholder: PropTypes.string.isRequired,
        })
    ).isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default Form;
