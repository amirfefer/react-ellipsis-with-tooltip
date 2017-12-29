# react-ellipsis-and-tooltip

truncates (with ellipsis) overflowing text elements and adds a tooltip

## Usage

1. Install package
   > npm --save react-ellipsis-with-tooltip

2. Import it

    ```javascript
    import EllipsisWithTooltip from 'reac-ellipsis-with-tooltip'
    ```
3. Wrap with text elements

## Examples
### Inside a table cell
```javascript
<td>
  <EllipsisWithTooltip placement="bottom">
     Long Text
  </EllipsisWithTooltip>
<td>      
```

### Wrapping anchor element
```javascript
<td>
  <EllipsisWithTooltip placement="bottom">
    <a href="#"> Long link </a> 
  </EllipsisWithTooltip>
<td>      
```
