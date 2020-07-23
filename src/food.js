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

export default function Food() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    food1: '',
    food2: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">food1</InputLabel>
        <Select
          native
          value={state.food1}
          onChange={handleChange}
          label="food1"
          inputProps={{
            name: 'food1',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Milk</option>
          <option value={20}>Yogurt</option>
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">food2</InputLabel>
        <Select
          native
          value={state.food2}
          onChange={handleChange}
          inputProps={{
            name: 'food2',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Citric Friut</option>
          <option value={20}>Melons</option>
          <option value={30}>Cucumber</option>
          <option value={40}>Reddish</option>
          <option value={50}>Urad daal</option>
          <option value={60}>Spicy Food</option>
          <option value={70}>Fish</option>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">food3</InputLabel>
        <Select
          native
          label="food3"
        >
          <option aria-label="None" value="" />
          <option value={10}>Milk</option>
          <option value={20}>Yogurt</option>
        </Select>
      </FormControl>
    </div>
  );
}
