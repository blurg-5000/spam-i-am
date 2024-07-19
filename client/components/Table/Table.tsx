interface Props {
  selectedCell: null | number
  data: []
  image: string
}

function Table({ selectedCell, data, image }: Props) {
  const rows = 5
  const columns = 5

  const tableData = Array.from({ length: rows }, (_, rowIndex) =>
    Array.from({ length: columns }, (_, colIndex) =>
      selectedCell !== null && rowIndex * columns + colIndex === selectedCell
        ? image
        : '',
    ),
  )

  return (
    <table
      style={{
        width: '100',
        borderCollapse: 'collapse',
        border: '1px solid #ddd',
        marginRight: 'center',
        marginLeft: 'center',
        margin: 0,
      }}
    >
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td
                key={colIndex}
                style={{
                  padding: '8px',
                  border: '1px solid #ddd',
                  height: 100,
                  width: 100,
                }}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
