import React from 'react'

interface DividerProps {
  dark?: boolean
}

export const Divider: React.FC<DividerProps> = ({ dark = false }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        height: 1,
        borderTop: `1px dashed ${dark ? 'rgb(20, 20, 20)' : 'rgb(235, 235, 235)'}`,
      }}
    />
  )
}
