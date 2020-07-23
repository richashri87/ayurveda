import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Demo() {
  const classes = useStyles();
  const [food1, setFood1] = React.useState('');
  const [food2, setFood2] = React.useState('');

  const handleChange1 = (event) => {      
    setFood1(event.target.value);
  };

  const handleChange2 = (event) => {      
    setFood2(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">food1</InputLabel>
        <Select
          native
          label="food1"
          value={food1}
          onChange={handleChange1}
        >
          <option aria-label="None" value="" />
          <option value={10}>Milk</option>
          <option value={20}>Yogurt</option>
          <option value={10}>Citric Friut</option>
          <option value={20}>Melons</option>
          <option value={30}>Cucumber</option>
          <option value={40}>Reddish</option>
          <option value={50}>Urad daal</option>
          <option value={60}>Spicy Food</option>
          <option value={70}>Fish</option>
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">food2</InputLabel>
        <Select
          native label="food2"
          value={food2}
          onChange={handleChange2}

        >
          <option aria-label="None" value="" />
          <option value={10}>Milk</option>
          <option value={20}>Yogurt</option>
          <option value={10}>Citric Friut</option>
          <option value={20}>Melons</option>
          <option value={30}>Cucumber</option>
          <option value={40}>Reddish</option>
          <option value={50}>Urad daal</option>
          <option value={60}>Spicy Food</option>
          <option value={70}>Fish</option>
        </Select>
      </FormControl>
    </div>
  );
}
