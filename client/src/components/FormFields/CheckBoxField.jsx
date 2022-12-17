import React from "react";
import PropTypes from "prop-types";
import { Box, TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";

import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

CheckBoxField.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

CheckBoxField.defaultProps = {
  label: "",
  disabled: false,
};

function CheckBoxField(props) {
  const { name, label, form, disabled } = props;
  const { errors } = form;
  const errorMessage = errors[name]?.message;
  const hasError = !!errorMessage;

  return (
    <Box mt={1} mb={2}>
      <FormControl>
        <Controller
          name={name}
          control={form.control}
          render={({ value, onChange, onBlur }) => (
            <FormControlLabel
              control={
                <Checkbox
                  name={name}
                  checked={value}
                  onChange={(e) => onChange(e.target.checked)}
                  onBlur={onBlur}
                  disabled={disabled}
                />
              }
              label={label}
            />
          )}
        />
        <FormHelperText>Something here</FormHelperText>
      </FormControl>
    </Box>
  );
}

export default CheckBoxField;
