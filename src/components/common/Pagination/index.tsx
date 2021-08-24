import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setPageNumber, getProducts } from '../../../actions';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(12),
    },
  },
}));

export default function PaginationControlled() {
  const count = useSelector((state: any) => state.productReducer.count);
  const dispatch = useDispatch();

  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event: any, value: any) => {
    setPage(value);
    dispatch(setPageNumber(value));
    dispatch(getProducts());
  };

  return (
    <div className={classes.root}>
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        shape="rounded"
        color="primary"
        boundaryCount={4}
      />
    </div>
  );
}
