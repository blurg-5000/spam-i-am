interface Props {
  data: []
}

function Table({ data }: Props) {
  const rows = 5
  const columns = 5

  // Fill in the data, if not enough data is provided, use empty strings
  const filledData = Array.from({ length: rows }, (_, rowIndex) =>
    Array.from({ length: columns }, (_, colIndex) =>
      data[rowIndex] ? data[rowIndex][colIndex] || '' : '',
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
        {filledData.map((row, rowIndex) => (
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
