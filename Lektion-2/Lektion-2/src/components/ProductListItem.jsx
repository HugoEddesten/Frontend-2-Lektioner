import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;

    width: 200px;
    height: 200px;
    background-color: dodgerblue;
    border-radius: 4px;
    
    &:hover {
        transition: all 0.2s;
        transform:scale(1.05);
        cursor: pointer;
    }

`;

const Btn = styled.button`


`;


function ProductListItem() {
    return (
        <Box>
            <p>Product List Item</p>
            <Btn></Btn>
        </Box>
      
            
        
    )
}

export default ProductListItem