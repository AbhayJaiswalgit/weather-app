const Header = () => {
  let time = new Date();

  return (
    <div className="header">
      <p>{time.toLocaleTimeString()}</p>
      <h1>The Weather App</h1>
      <p>{time.toLocaleDateString()}</p>
    </div>
  );
};

export default Header;
