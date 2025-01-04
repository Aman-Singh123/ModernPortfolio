import React from 'react'
import AnimatedCursor from "react-animated-cursor"

export default function AnimatedCursron() {
    return (
        <AnimatedCursor
            innerSize={8} // Inner cursor size
            outerSize={25} // Outer cursor size for the donut effect
            innerScale={1} // Scaling for the inner circle on hover
            outerScale={2} // Scaling for the outer ring on hover
            outerAlpha={0} // Makes the outer ring transparent inside
            hasBlendMode={true} // Enables blend mode for smooth effects
            innerStyle={{
                backgroundColor: '#ff0000', // Gold color for the inner circle
            }}
            outerStyle={{
                border: '3px solid #33cc33', // Gold border for the outer ring
            }}
        />


    )
}
