const TableView = ({ json }) => {
  return (
    <table id="table" className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Image</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody id="tbody">
        {json.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <img
                  src={require(`../../img/${item.imgName}`)}
                  alt={item.imgName}
                />
              </td>
              <td>{item.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableView;
