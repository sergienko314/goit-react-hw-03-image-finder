import { Blocks } from 'react-loader-spinner';
import { BackdropStyled } from 'components/Modal/Modal.styled';

const Loader = () => {
  return (
    <BackdropStyled>
      <Blocks
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
/>
    </BackdropStyled>
  );
};
export default Loader;
