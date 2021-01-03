import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Modal = ({ children }: { children: any }) => {
  return <ModalWrapper>{children}</ModalWrapper>;
};
