const PasswordRevealer = ({ value }) => {
  const [shown, setShown] = React.useState(false);
  return (
    <>
      <input type={shown ? 'text' : 'password'} value={value} />
      <button onClick={() => setShown(!shown)}>Show/Hide</button>
    </>
  );
};

//How to use it
/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <PasswordRevealer />
);
*/
