/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function Tabs({ buttons, Wrapper="menu", children }) {
  return (
    <>
      <Wrapper>{buttons}</Wrapper>
      {children}
    </>
  );
}
