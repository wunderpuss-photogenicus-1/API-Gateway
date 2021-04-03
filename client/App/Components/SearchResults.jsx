import React from 'react';


const SearchResults = (props) => (

    <table className='table' key={this.data.id}>
                <tbody>
                    <tr>
                        <td className='datainformation'>
                             <p className='title'>{this.props.data.title} </p>
                            <p className='overview'>{this.props.data.overview}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
  );

export default SearchResults