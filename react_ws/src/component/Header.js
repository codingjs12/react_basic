function Header(props) {
    console.log(props);
    return (
    <div>
      <h2 style={{color: "red", fontSize:"30px"}}>
        <a href="/" onClick={ (e)=>{
          e.preventDefault();
          props.fnHeader(props.contents);
        }}>{props.title}</a>
      </h2>
    </div>
    )
  }

export default Header