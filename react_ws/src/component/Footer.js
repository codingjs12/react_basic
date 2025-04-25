function Footer(props) {
  console.log(props);

  let title = <h3>숫자 목록</h3>;
    return (
    <div>
      <div>{title}</div>
      <div>{props.list.map((item) => {
        return <li>
          <a href="/" onClick={(e) => {
            e.preventDefault();
            props.fnFooter(item);
          }}>
          {item}
          </a>
        </li>
      })}</div>
    </div>
    )
  }

export default Footer