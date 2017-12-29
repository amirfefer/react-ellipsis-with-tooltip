import React from 'react';
import { Alert } from 'react-bootstrap'
import { storiesOf } from '@storybook/react';
import EllipisWithTooltip from '../src/index';


storiesOf('EllipisWithTooltip', module)
  .add('in a table cell', () => (
    <table
      style={{ tableLayout: 'fixed', width: '200px' }}
      className="table table-striped"
    >
      <thead>
        <tr>
          <th style={{ width: '100px' }}> Elipsis </th>
          <th> Regullar </th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ width: '200px' }}>
          <td style={{ width: '100px' }}>
            <EllipisWithTooltip placement="bottom">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </EllipisWithTooltip>
          </td>
          <td>
            <EllipisWithTooltip placement="bottom">Lorem ipsum</EllipisWithTooltip>
          </td>
        </tr>
      </tbody>
    </table>
  ))

  .add('in a dropdown', () => (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <div
        style={{ maxWidth: '100px' }}
        className="dropdown-menu"
        aria-labelledby="dropdownMenuButton"
      >
        <EllipisWithTooltip placement="bottom">
          <a className="dropdown-item" href="#">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </a>
        </EllipisWithTooltip>
      </div>
    </div>
  ))

  .add('in alert', () => (
    <Alert style={{width: '350px'}} bsStyle="warning">
         <EllipisWithTooltip placement="bottom">
       <strong> Lorem ipsum! </strong> dolor sit amet, consectetur adipiscing elit Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </EllipisWithTooltip>
  </Alert>
  ));

