import React, { useState } from 'react';
import Autocomplete from  'react-autocomplete';
import { getStocks, matchStocks } from './PeudoData';


export default function PeudoCase() {
    const [value, setValue] = useState('')
    
    return(
        <div style = {{ marginTop: 40, marginLeft: 50 }}>
        <Autocomplete
          //value={ this.state.value }
          inputProps={{ id: 'states-autocomplete' }}
          wrapperStyle={{ position: 'relative', display: 'inline-block' }}
          items={ getStocks() }
          getItemValue={ item => item.name }
          shouldItemRender={ matchStocks }
          onChange={(event) => setValue(value)}
          onSelect={ (value) => setValue(value) }
          renderMenu={ children => (
            <div className = "menu">
              { children }
            </div>
          )}
          renderItem={ (item, isHighlighted) => (
            <div
              className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
              key={ item.abbr } >
              { item.name }
            </div>
          )}
        />
      </div>
    )

}
