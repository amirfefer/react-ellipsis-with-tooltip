# react-ellipsis-and-tooltip
Recognizes whether a text element is overflowed,

truncates (with ellipsis) it and adds a tooltip.

Try via [stroybook](https://amirfefer.github.io/react-ellipsis-with-tooltip/
)

## Usage

1. Install package
   > npm install --save react-ellipsis-with-tooltip

2. Import it

    ```javascript
    import EllipsisWithTooltip from 'react-ellipsis-with-tooltip'
    ```
3. Wrap with text elements

## Examples
### Inside a table cell
```javascript
<td>
  <EllipsisWithTooltip placement="bottom">
     Lorem Ipsum
  </EllipsisWithTooltip>
<td>      
```

### Wrapping anchor element
```javascript
<td>
  <EllipsisWithTooltip placement="bottom">
    <a href="#">  Lorem Ipsum </a> 
  </EllipsisWithTooltip>
<td>      
```
