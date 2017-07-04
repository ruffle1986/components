import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {

  static propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array
  }

  render() {
    return (
      <table className="table" cellPadding={ 0 } cellSpacing={ 0 }>
        <thead>
          <tr>
            {
              this.props.columns.map((column, i) => (
                <th
                  key={ `table-column-${i}` }
                >
                  { column.name }
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            this.props.data.map((datum, i) => (
              <tr>
                {
                  this.props.columns.map((column, j) => (
                    <td>
                      {
                        (() => {
                          if (typeof column.render === 'function') {
                            return column.render(datum[column.key] || datum, datum);
                          }
                          return datum[column.key];
                        })()
                      }
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

export default Table;
