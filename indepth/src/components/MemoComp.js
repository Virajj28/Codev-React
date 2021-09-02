import React from 'react'

function MemoComp({name}) {
    console.log('MemoComp rendered')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
