import { Checkbox, FormControlLabel } from '@material-ui/core';
import React from 'react';

const Checkboxes = () => {
    return (
        <>
           <FormControlLabel
          value="iui"
          control={<Checkbox color="Secondary" />}
          label="IUI"
          labelPlacement="end"
        />
         <FormControlLabel
          value="ivf"
          control={<Checkbox color="Secondary" />}
          label="IVF"
          labelPlacement="end"
        />
         <FormControlLabel
          value="infertility"
          control={<Checkbox color="Secondary" />}
          label="Infertility"
          labelPlacement="end"
        />

        </>
    );
};

export default Checkboxes;