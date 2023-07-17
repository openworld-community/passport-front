import { CircularProgress } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';

type Props = ButtonProps & {
  loading?: boolean;
};

export const LoadingButton = ({ loading, children, ...props }: Props) => {
  return <Button {...props}>{loading ? <CircularProgress color="warning" size={24} /> : children}</Button>;
};
